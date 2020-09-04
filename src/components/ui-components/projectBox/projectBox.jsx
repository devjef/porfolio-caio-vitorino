import React from "react";
// Scss
import "./projectBox.scss";

const projectBox = (props) => (
  <div className="portfolio__box">
    <a href={props.url} target="_blank">
    <img src={props.preview} alt="project" />
    <div className="portfolio__hover-info flex-center">
      <div className="text-center">
        <p className="font20 weight800">{props.title}</p>
        <p className="font12 weight500">{props.tag}</p>
      </div>
    </div>
    </a>
  </div>
);

export default projectBox;
