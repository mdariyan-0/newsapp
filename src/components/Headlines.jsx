import React, { useState } from 'react'

function Headlines () {
  const [headline, setHeadline] = useState([])
  const [loading, setLoading] = useState(false)
  
  (async function fetchHeadlines(){
    let url = "https://newsapi.org/v2/top-headlines?q=india&apiKey=6b2dd88f8a7e4a208814391f6513210e";
    let rawData = await fetch(url)
    let data = await rawData.json()
    setHeadline(data.articles)
  })()
 
    return (
      <>
        <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="https://img.freepik.com/free-photo/aerial-view-poda-island-krabi-thailand_335224-1196.jpg?t=st=1741960326~exp=1741963926~hmac=5e5ca3be053cb9f0de81f990c39705cf6562be0a68705d836e16195e3d00154a&w=1380" className="d-block w-100" alt="Headline Image"/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
                </div>
                <div className="carousel-item">
                <img src="https://img.freepik.com/free-photo/aerial-view-poda-island-krabi-thailand_335224-1196.jpg?t=st=1741960326~exp=1741963926~hmac=5e5ca3be053cb9f0de81f990c39705cf6562be0a68705d836e16195e3d00154a&w=1380" className="d-block w-100" alt="Headline Image"/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
                </div>
                <div className="carousel-item">
                <img src="https://img.freepik.com/free-photo/aerial-view-poda-island-krabi-thailand_335224-1196.jpg?t=st=1741960326~exp=1741963926~hmac=5e5ca3be053cb9f0de81f990c39705cf6562be0a68705d836e16195e3d00154a&w=1380" className="d-block w-100" alt="Headline Image"/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
      </>
    )
  }


export default Headlines