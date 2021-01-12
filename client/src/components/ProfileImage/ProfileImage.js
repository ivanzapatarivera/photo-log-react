import React, { Component } from "react";
import "./style.css";

export default class ProfileImage extends Component {
  handleMouseOver = (e) => {
    e.target.style.backgroundColor = "red";
  };

  handleMouseOut = (e) => {
    e.target.style.backgroundColor = "transparent";
  };

  handleOnClick = (e) => {
    const id = e.target.innerText;
    console.log(`You clicked on ${id}.`);
    // const mainDiv = (e.target.parentNode.parentNode.parentNode.parentNode);
    // mainDiv.style.backgroundColor = "red"
  };

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div
              className="col-12 mx-auto"
              onMouseOver={this.handleMouseOver}
              onMouseOut={this.handleMouseOut}
              onClick={this.handleOnClick}
            >
              Picture Component
            </div>
          </div>
        </div>
      </div>
    );
  }
}
