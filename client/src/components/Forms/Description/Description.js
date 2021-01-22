import React, { Component } from "react";
import "./style.css"

export default class Description extends Component {
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
    console.log(e.target.value)
  }

  handleOnCancelClick(descriptionForm) {
    descriptionForm = document.querySelector("#descriptionForm");
    descriptionForm.classList.remove("d-flex");
    descriptionForm.style.display = "none"
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
      <form onSubmit={this.postDescription.bind(this)} className="col-12 pb-5 text-center justify-content-center align-items-center descriptionForm" style={{ display: "none" }} id="descriptionForm">
        <div style={{ marginTop: "10em" }} className="col-12 col-lg-6">
        <textarea
          type="text"
          name="description"
          placeholder="Update profile description."
          className="col-12"
          style={{height: "4em"}}
          onChange={this.onChangeHandler}
        />
        <br />
        <div className="col-10 mx-auto">
            <button type="submit" className="btn btn-primary mb-2 col-4 col-md-2">
              <i class="fas fa-check"></i>
            </button>
            &emsp;
            <div className="btn btn-danger mb-2 col-4 col-md-2" onClick={this.handleOnCancelClick}>
              <i class="fas fa-times"></i>
            </div>
            <br />
            <label id="previewFileName" className=""></label>
            <br />
          </div>
        </div>
      </form>
    );
  }
}