import React, { Component } from "react";

export default class Description extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      description: "",
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    console.log(this.onChangeHandler.bind(this));
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value)
  }

  postDescription(req, res) {
    fetch("/api/description", {
      method: "post",
      body: JSON.stringify({
        description: this.state.description,
      }), 
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    })
    .then(res.json())
    .catch((err) => {
      res.json(err);
    })
  }

  render() {
    return (
      <form onSubmit={this.postDescription.bind(this)} className="mb-5 text-center col-12">
        <textarea
          type="text"
          name="description"
          placeholder="Update profile description."
          className="col-6"
          style={{height: "4em"}}
          onChange={this.onChangeHandler}
        />
        <br />
        <input type="submit" value="Update" className="btn btn-primary shadow-sm" />
      </form>
    );
  }
}