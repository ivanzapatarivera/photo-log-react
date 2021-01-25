import React, { Component } from "react";
import ImageTag from "./ImageTag";
import "./style.css";

export default class LogProfilePicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      URL: "",
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.handleURLState();
  }

  handleURLState() {
    const API = "/image";
    fetch(API)
      .then((res) => {
        return res.json(API);
      })
      .then((res) => {
        const lastIndex = res.length - 1;
        const lastObject = res[lastIndex];
        this.state.URL = `${API}/${lastObject.filename}`;
      });
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onFormSubmit(e, req, res) {
    e.preventDefault();
    fetch("/api/loggedprofilepicture", {
      method: "post",
      body: JSON.stringify({
        title: this.state.title,
        description: this.state.description,
        URL: this.state.URL,
      }),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(this.onReturnHome())
      .catch((err) => {
        res.json(err);
      });
  }

  onReturnHome() {
    window.location.replace("/");
  }

  render() {
    return (
      <div className="container logPhotoContainer">
        <div className="row">
          <div className="col-12 text-center">
            <h4>Picture Details</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-12 col-md-5 d-flex align-items-center">
                <ImageTag />
              </div>
              <div className="col-12 col-md-7 d-flex align-items-center">
                <form className="col-12" onSubmit={this.onFormSubmit.bind(this)}>
                  <label className="pt-3">Title</label>
                  <input
                    className="col-12"
                    type="text"
                    name="title"
                    placeholder="How would you like to name this picture?"
                    onChange={this.onChangeHandler}
                  ></input>
                  <label className="pt-3">Description</label>
                  <input
                    className="col-12"
                    type="text"
                    name="description"
                    placeholder="Say something"
                    onChange={this.onChangeHandler}
                  ></input>
                  <input
                    className="col-12"
                    type="text"
                    name="URL"
                    value={this.state.URL}
                    style={{ display: "none" }}
                  ></input>
                  <button
                    type="submit"
                    className="btn btn-primary col-3 col-md-2 my-2 px-2"
                  >
                    <i class="fas fa-check"></i>
                  </button>
                  &emsp;
                  <span
                    className="btn btn-danger col-3 col-md-2 my-2 px-2"
                    onClick={this.onReturnHome}
                  >
                    <i class="fas fa-times"></i>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
