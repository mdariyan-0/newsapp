import React from "react";

function NewsContent(props) {
  
    return (
      <>
        <div className="card my-3 align-self-start" style={{ width: "18rem" }}>
          <img
            src={props.imageUrl}
            className="card-img-top"
            alt="News Cover Picture"
          />
          <div className="card-body text-start">
            <p className="card-text">
              <small className="text-muted">
                <em><strong>{props.source}</strong></em>
              </small>
            </p>

            <h5 className="card-title">{props.title}...</h5>
            <p className="card-text">{props.description}...</p>
            <a
              rel="noreferrer"
              href={props.newsUrl}
              target="_blank"
              className="btn btn-dark"
            >
              Read More
            </a>
            <p className="my-2 card-text">
              <small className="text-muted">
                <em>{props.author}</em> on <em>{props.date}</em>
              </small>
            </p>
          </div>
        </div>
      </>
    );
  }


export default NewsContent;
