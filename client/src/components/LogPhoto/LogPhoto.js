import React, { Component } from "react";
import "./style.css";

export default class LogPhoto extends Component {
  onFormSubmit(e) {
    fetch("/")
  }
  render() {
    return (
      <div className="container bg-info logPhotoContainer">
        <h4 className="text-center pt-3">Log Your Photo</h4>
        <form className="col-12 col-md-7 mx-auto" onSubmit={this.onFormSubmit}>
          <label className="pt-3">Title</label>
          <br />
          <input
            className="col-12"
            type="text"
            name="title"
            placeholder="How would you like to name this picture?"
          ></input>
          <br />
          <label className="pt-3">Location</label>
          <br />
          <input
            className="col-12"
            type="text"
            name="location"
            placeholder="Where was this picture taken?"
          ></input>
          <br />
          <label className="pt-3">Description</label>
          <br />
          <textarea
            className="col-12"
            type="text"
            name="description"
            placeholder="Say something about this picture"
          ></textarea>
          <br />
          <input
            className="col-12"
            type="text"
            name="URL"
            value="Picture URL"
          ></input>
          <br />
          <button className="btn btn-primary col-2 my-2">Log</button>
        </form>
      </div>
    );
  }
}
