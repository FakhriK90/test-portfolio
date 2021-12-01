import * as React from "react";
import image1 from "./Movie App.jpg";
import image2 from './Weather App.png'
import "./portfolio.css";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <h1>Portfolio</h1>
      <div className="container">
        <div className="card-wrapper">
          <div className="card profile-two">
            <div className="card-image profile-img--two">
              <img src={image1} alt="profile two" />
            </div>
            <ul className="social-icons">
              <li>
                <a
                  href="https://github.com/FakhriK90/First-Movie-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github" />
                </a>
              </li>
            </ul>
            <div className="details info">
              <h2>
                First movie app
                <br />
                <span className="desc-title">
                  This is my first movie app with react using router
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card profile-two">
            <div className="card-image profile-img--two">
              <img src={image2} alt="profile two" style={{width:350,height:350}} />
            </div>
            <ul className="social-icons">
              <li>
                <a
                  href="https://github.com/FakhriK90/weather_app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github" />
                </a>
              </li>
            </ul>
            <div className="details info">
              <h2>
                First weather app
                <br />
                <span className="desc-title">
                  This is my first weather app with react using router, redux and API
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
