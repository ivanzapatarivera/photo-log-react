import React, { Component } from "react";

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

  postStatus(req, res) {
    fetch("/api/status", {
      method: "post",
      body: JSON.stringify({
        status: this.state.status,
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

  render() {
    return (
      <form onSubmit={this.postStatus.bind(this)} className="my-5 text-center col-12">
        <textarea
          type="text"
          name="status"
          placeholder="What's on your mind?"
          className="col-6 mb-2"
          style={{height: "4em"}}
          onChange={this.onChangeHandler}
        />
        <br />
        <input type="submit" value="Send Update" className="btn btn-primary shadow-sm" />
      </form>
    );
  }
}
