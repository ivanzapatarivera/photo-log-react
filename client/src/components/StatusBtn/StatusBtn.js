import React, { Component } from "react";
import "./style.css";

export default class StatusBtn extends Component {
handleOnClick(statusForm) {
    statusForm = document.querySelector("#statusForm");
    statusForm.classList.add("d-flex");
    statusForm.style.display = "block";
}
  render() {
    return (
      <div className="col-12 col-md-4 feather d-flex justify-content-center align-items-center">
        <span
          className="btn btn-primary col-12 col-md-3 shadow-sm"
          onClick={this.handleOnClick}
        >
          <i class="fas fa-feather"></i>
        </span>
      </div>
    );
  }
}
