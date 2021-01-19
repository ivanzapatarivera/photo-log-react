import React, { Component } from "react";
import "./style.css";

export default class Description extends Component {
  handleOnMouseOver = (e) => {
    console.log(`You moved the mouse over ${e.target.innerText}`);
  };

  handleOnMouseOut = (e) => {
    console.log(`You moved the mouse out of `, e.target.innerText);
  };

  handleOnClick = (e) => {
    console.log(`You clicked on ${e.target.innerText}.`);
  };

  render() {
    return (
      <div className="row">
        <div
          className="col-12"
          onMouseOver={this.handleOnMouseOver}
          onMouseOut={this.handleOnMouseOut}
          onClick={this.handleOnClick}
        >
          <RenderDescription />
        </div>
      </div>
    );
  }
}
