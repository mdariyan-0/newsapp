import React, { useState, useEffect } from "react";
import NewsContent from "./NewsContent";
import Spinner from "./Spinner";

function News (props) {
  const[articles, setArticles] = useState([])
  const[loading, setLoading] = useState(false)
  const[page, setPage] = useState(12)
  const[offset, setOffset] = useState(0)
  const[totalResults, setTotalResults] = useState(0)
    if (props.category == "general")
      document.title = `NewsClick - Get your daily news free here!`;
    else document.title = `${capitalize(props.category)} - NewsClick`;
  
  function capitalize(str) {
    return `${str.charAt(0).toUpperCase()}${str.slice(1, str.length)}`;
  }
  const getSource = (source) => {
    console.log(source);
    if(source[0] == "www" ) return source[1]
    else return source[0];
    
  }
  const getMonth = (e) => {
    const month = e.split("-");
    switch (month[1]) {
      case "01":
        return "Jan";
      case "02":
        return "Feb";
      case "03":
        return "Mar";
      case "04":
        return "Apr";
      case "05":
        return "May";
      case "06":
        return "June";
      case "07":
        return "July";
      case "08":
        return "Aug";
      case "09":
        return "Sep";
      case "10":
        return "Oct";
      case "11":
        return "Nov";
      case "12":
        return "Dec";
    }
  };
  const getlocalDate = (data) => {
    const isoDate = data;
    let newDate = isoDate.slice(0,11)
    let month = getMonth(newDate);
    let newData = newDate.split("-");
    return `${newData[0]} ${month}, ${newData[2]}`;
  };
  async function updateNews(page,offset) {
    try{
      props.setProgress(20);
    let url = `https://api.worldnewsapi.com/search-news?api-key=${props.apiKey}&text=${props.category}&language=en&number=${page}&offset=${offset}`;
    setLoading(true)
    let rawData = await fetch(url);
    let data = await rawData.json();
    setArticles(data.news);
    setTotalResults(data.available);
    setLoading(false)
    props.setProgress(100);
  }catch(e){
    alert("Failed to fetch news. Please try again.")
  }
  }
  async function updateNewsIndia(page,offset) {
    try{
      props.setProgress(20);
    let url = `https://api.worldnewsapi.com/search-news?api-key=${props.apiKey}&text=general&language=en&source-country=in&number=${page}&offset=${offset}`;
    setLoading(true)
    let rawData = await fetch(url);
    let data = await rawData.json();
    setArticles(data.news);
    setTotalResults(data.available);
    setLoading(false)
    props.setProgress(100);
  }catch(e){
    alert("Failed to fetch news. Please try again.")
  }

  }

  const handleNextPage = async () => {
    if (props.category === "india") {
      updateNewsIndia(page, offset + 12);
      setOffset(offset + 12)
    } else {
      updateNews(page, offset + 12);
      setOffset(offset + 12)
    }
  };
  const handlePrevPage = async () => {
    if (props.category === "india") {
     updateNewsIndia(page, offset - 12);
     setOffset(offset - 12)
    } else {
      updateNews(page, offset - 12);
     setOffset(offset - 12)
    }
  };
  useEffect(()=>{
    if (props.category === "india") {
      updateNewsIndia(page, offset);
    } else {
      updateNews(page, offset);
    }
  },[])
  
    return (
      <>
        <div
          className="container justify-content-center"
          style={{ marginBlock: "70px" }}
        >
          <h2 className="my-3 text-center">
            Top Headlines - {capitalize(props.category)}
          </h2>
          {loading && <Spinner />}
          <div className="row gap-2">
            {loading ||
              articles.map((element) => {
                return (
                  <div
                    className="col d-flex justify-content-center"
                    key={element.url}
                  >
                    <NewsContent
                      title={
                        element.title
                          ? element.title.slice(0, 50)
                          : element.title
                      }
                      description={
                        element.summary
                          ? element.summary.slice(0, 60)
                          : element.text.slice(0, 60)
                      }
                      imageUrl={
                        element.image
                          ? element.image 
                          : "https://placehold.co/1200x675"
                      }
                      newsUrl={element.url}
                      date={getlocalDate(element.publish_date)}
                      source={capitalize(getSource(element.url.split("/")[2].split(".")))}
                      author={
                        element.author
                          ? `by ${element.author.slice(0, 17)}`
                          : "by Anonymous"
                      }
                    />
                  </div>
                );
              })}
          </div>

          <div className={`container d-flex justify-content-between`}>
            <button
              disabled={offset <= 0}
              type="button"
              onClick={handlePrevPage}
              className="btn btn-dark"
            >
              &#8636; Previous
            </button>
            <button
              disabled={
                page >=
                Math.ceil(totalResults / 12)
              }
              type="button"
              onClick={handleNextPage}
              className="btn btn-dark"
            >
              Next &#8640;
            </button>
          </div>
        </div>
      </>
    );
  
}

export default News;
