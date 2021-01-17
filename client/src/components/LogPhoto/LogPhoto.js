import React, { Component } from "react";
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
  }
  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  }
  onFormSubmit(req, res) {
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
      .then(res.json())
      .catch((err) => {
        res.json(err);
      });
  }
  onCancelHandler() {
    window.location.replace("/");
  }
  render() {
    return (
      <div className="container bg-info logPhotoContainer">
        <h4 className="text-center pt-3">Log Your Photo</h4>
        <form
          className="col-12 col-md-7 mx-auto"
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
            onChange={this.onChangeHandler}
          ></input>
          <br />
          <button className="btn btn-primary col-3 col-md-2 my-2 px-2"><i class="fas fa-check"></i></button>
          &emsp;<button className="btn btn-danger col-3 col-md-2 my-2 px-2" onClick={this.onCancelHandler}><i class="fas fa-times"></i></button>
        </form>
      </div>
    );
  }
}
