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
      <div className="col-12 d-flex justify-content-center align-items-center">
        <span
          className="btn btn-primary mb-2 col-4 col-md-2"
          onClick={this.handleOnClick}
        >
          <i class="fas fa-feather"></i>
        </span>
      </div>
    );
  }
}
