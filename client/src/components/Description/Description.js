import React, { Component } from "react";
import RenderDescription from "./Render/render";
import "./style.css";

export default class Description extends Component {
  handleOnMouseOver = (descriptionDiv) => {
    descriptionDiv = document.querySelector("#descriptionDiv")
    descriptionDiv.style.backgroundColor = "rgba(25,25,25,.95)"
    descriptionDiv.style.color = "white"
  };

  handleOnMouseOut = (descriptionDiv) => {
    descriptionDiv = document.querySelector("#descriptionDiv")
    descriptionDiv.style.backgroundColor = "transparent"
  };

  handleOnClick = (descriptionForm) => {
    descriptionForm = document.querySelector("#descriptionForm");
    descriptionForm.classList.add("d-flex");
    descriptionForm.style.display = "block";
  };

  render() {
    return (
      
        <div
          onClick={this.handleOnClick}
          id="descriptionDiv"
        >
          <RenderDescription />
        </div>
    );
  }
}
