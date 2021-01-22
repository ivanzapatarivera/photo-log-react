import React, { Component } from "react";
import "./style.css";

export default class StatusForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleOnCancelClick(statusForm) {
    statusForm = document.querySelector("#statusForm");
    statusForm.style.display = "none";
    statusForm.classList.remove("d-flex");
  }

  postStatus(req, res) {
    fetch("/api/status", {
      method: "post",
      body: JSON.stringify({
        status: this.state.status,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(res.json())
      .catch((err) => {
        res.json(err);
      });
  }

  render() {
    return (
      <form
        onSubmit={this.postStatus.bind(this)}
        className="text-center align-items-center justify-content-center statusForm"
        id="statusForm"
        style={{ display: "none" }}
      >
        <div className="container">
          <textarea
            type="text"
            name="status"
            placeholder="What's on your mind?"
            className="col-12 col-md-6 mb-2"
            style={{ height: "4em" }}
            onChange={this.onChangeHandler}
          />
          <br />
          <div className="col-10 mx-auto">
          <button type="submit" className="btn btn-primary mb-2 col-4 col-md-2">
              <i class="fas fa-check"></i>
            </button>
            &emsp;
            <span className="btn btn-danger mb-2 col-4 col-md-2" onClick={this.handleOnCancelClick}>
              <i class="fas fa-times"></i>
            </span>
          </div>
        </div>
      </form>
    );
  }
}
