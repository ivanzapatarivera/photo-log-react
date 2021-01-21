import React, { Component } from "react";
import "./style.css";
const axios = require("axios");


export default class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onFormSubmit(e, formData, config) {
    e.preventDefault();
    this.onAPIChange();
    formData = new FormData();
    formData.append("upload", this.state.file);
    config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios.post("/upload", formData, config).catch((req, res, error) => {
      res.json(error);
    });
  }

  onAPIChange() {
    const API = `/image`;
    fetch(API)
      .then((res) => res.json(API))
      .then((data) => {
        let initialDataLength = data.length;
        this.validationAPI(initialDataLength, API);
      });
  }

  validationAPI(initialDataLength, API) {
    fetch(API)
      .then((res) => res.json(API))
      .then((data) => {
        let newDataLength = data.length;
        if (newDataLength > initialDataLength) {
          window.location.replace("/LogPhoto");
        } else {
          this.validationAPI(initialDataLength, API);
        }
      });
  }

  onChange(e, filename, index, filenameArray, previewFileName) {
    this.setState({ file: e.target.files[0] });
    filename = e.target.value;
    filenameArray = filename.split("\\");
    index = filenameArray.length - 1;
    filename = filenameArray[index];
    previewFileName = document.querySelector("#previewFileName");
    previewFileName.innerText = `Would you like to upload ${filename}?`;
  }

  handleOnCancelClick = (e) => {
    const imageUploadForm = document.querySelector("#imageUploadForm");
    imageUploadForm.style.display = "none";
    imageUploadForm.classList.remove("d-flex");
  }

  handleHeaderChange = (logPhotoContainer, logAPhoto) => {
    console.log("handleHeaderChange read")
  }

  render() {
    return (
      <form
        onSubmit={this.onFormSubmit}
        className="text-center mx-auto imageUploadForm justify-content-center align-items-center text-white"
        style={{ border: "1px solid lightgrey", display: "none" }}
        id="imageUploadForm"
      >
        <div className="container">
          <label className="btn btn-secondary col-12 col-md-6 mx-auto">
            Select Photo
            <input
              type="file"
              name="upload"
              style={{ display: "none" }}
              onChange={this.onChange}
            />
            <br />
          </label>
          <div className="col-12 mx-auto">
            <button type="submit" className="btn btn-primary mb-2">
              <i class="fas fa-check"></i>
            </button>
            &emsp;
            <button className="btn btn-danger mb-2" onClick={this.handleOnCancelClick}>
              <i class="fas fa-times"></i>
            </button>
            <br />
            <label id="previewFileName" className=""></label>
            <br />
          </div>
        </div>
      </form>
    );
  }
}