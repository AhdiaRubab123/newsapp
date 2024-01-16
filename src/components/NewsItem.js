import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, publishedAt, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              position: "absolute",
              justifyContent: "flex-end",
              right: "0",
            }}
          >
            <span className="badge rounded-pill bg-danger">{source} </span>
          </div>
          <img
            src={
              !imageUrl
                ? "https://s.yimg.com/ny/api/res/1.2/w9VOqo8buwtw0Jgx5yih.Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-01/81608c20-af40-11ee-af7d-7db3359a92fd"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author ? author : "Unknown Author"} on
                {new Date(publishedAt).toGMTString()}
              </small>
            </p>

            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
