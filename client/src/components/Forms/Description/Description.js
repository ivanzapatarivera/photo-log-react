import React, { Component } from "react";
import "./style.css";

export default class DescriptionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  postDescription(req, res) {
    fetch("/api/description", {
      method: "post",
      body: JSON.stringify({
        description: this.state.description,
      }),
      header: {
        Accept: "application/json",
        "Content-Type": "applicationjson",
      },
    })
      .then(res.json())
      .catch((err) => {
        res.json(err);
      });
  }

  render() {
    return (
      <form onSubmit={this.postDescription.bind(this)}>
        <input
          type="text"
          name="description"
          placeholder="Enter profile description."
          onChange={this.onChangeHandler}
        />
        <br />
        <input
          type="submit"
          className="btn btn-primary mb-5"
          value="Update Description"
        />
      </form>
    );
  }
}
