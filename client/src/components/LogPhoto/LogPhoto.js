import React, { Component } from "react";
import ImageTag from "./ImageTag";
import ImageURL from "./ImageURL";
import "./style.css";

export default class LogPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      location: "",
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
      return res.json(API)
    })
    .then((res) => {
      const lastIndex = res.length - 1;
      const lastObject = res[lastIndex];
      this.state.URL = `${API}/${lastObject.filename}`
    })
  }
  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  onFormSubmit(e, req, res) {
    e.preventDefault();
    fetch("/api/loggedphoto", {
      method: "post",
      body: JSON.stringify({
        title: this.state.title,
        location: this.state.location,
        description: this.state.description,
        URL: this.state.URL,
      }),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(
        this.onReturnHome()
      )
      .catch((err) => {
        res.json(err);
      });
  }
  onReturnHome() {
    window.location.replace("/");
  }

  render() {
    return (
      <div
        className="container logPhotoContainer"
        style={{ marginBottom: "7em", marginTop: "8.5em" }}
        id="logPhotoContainer"
      >
        <h4 className="text-center py-3">Log Your Photo</h4>
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-12 col-md-5 d-flex align-items-center">
                <ImageTag />
              </div>
              <div className="col-12 col-md-7 bg-info d-flex align-items-center">
                <form
                  className="col-12 col-md-12 mx-auto"
                  onSubmit={this.onFormSubmit.bind(this)}
                >
                  <label className="pt-3">Title</label>
                  <br />
                  <input
                    className="col-12"
                    type="text"
                    name="title"
                    placeholder="How would you like to name this picture?"
                    onChange={this.onChangeHandler}
                  ></input>
                  <br />
                  <label className="pt-3">Location</label>
                  <br />
                  <input
                    className="col-12"
                    type="text"
                    name="location"
                    placeholder="Where was this picture taken?"
                    onChange={this.onChangeHandler}
                  ></input>
                  <br />
                  <label className="pt-3">Description</label>
                  <br />
                  <textarea
                    className="col-12"
                    type="text"
                    name="description"
                    placeholder="Say something about this picture"
                    onChange={this.onChangeHandler}
                  ></textarea>
                  <br />
                  <input
                    className="col-12"
                    type="text"
                    name="URL"
                    id="URL"
                    defaultValue={this.state.URL}
                    style={{ display: "none" }}
                  />
                  <br />
                  <button
                    type="submit"
                    className="btn btn-primary col-3 col-md-2 my-2 px-2"
                  >
                    <i class="fas fa-check"></i>
                  </button>
                  &emsp;
                  <button
                    className="btn btn-danger col-3 col-md-2 my-2 px-2"
                    onClick={this.onReturnHome}
                  >
                    <i class="fas fa-times"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
