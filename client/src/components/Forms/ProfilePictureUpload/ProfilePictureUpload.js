import axios from "axios";
import React, { Component } from "react";
import "./style.css";

export default class ProfilePictureUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onFormSubmit(e, res, formData, config) {
    e.preventDefault();
    this.onAPIChange();
    formData = new FormData();
    formData.append("profilepictures", this.state.file);
    config = {
      header: { "Content-Type": "multipart/form-data" },
    };
    axios
      .post("/profilepictures", formData, config)
      .then(this.windowReload)
      .catch((err) => {
        res.json(err);
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
          window.location.replace("/");
        } else {
          this.validationAPI(initialDataLength, API);
        }
      });
  }

  windowReload() {
    window.location.reload();
  }

  onChange(e, filename, index, filenameArray, previewProfilePictureFileName) {
    this.setState({ file: e.target.files[0] });
    filename = e.target.value;
    filenameArray = filename.split("\\");
    index = filenameArray.length - 1;
    filename = filenameArray[index];

    previewProfilePictureFileName = document.querySelector(
      "#previewProfilePictureFileName"
    );
    previewProfilePictureFileName.innerText = `Would you like to upload ${filename}?`;
  }

  onHandleCancelClick(profilePictureUploadForm) {
    profilePictureUploadForm = document.querySelector("#profilePictureUploadForm");
    profilePictureUploadForm.style.display = "none";
    profilePictureUploadForm.classList.remove("d-flex");
  }

  render() {
    return (
      <form
        onSubmit={this.onFormSubmit}
        className="col-12 p-1 mx-auto text-center justify-content-center align-items-center profilePictureUploadForm"
        style={{ border: "1px solid lightgrey", display: "none" }}
        id="profilePictureUploadForm"
      >
        <div className="container">
          <label className="btn btn-secondary col-12 col-md-6">
            Select Photo
            <input
              type="file"
              name="profilepictures"
              className="profilePicturesInputBtn"
              onChange={this.onChange}
            ></input>
          </label>
          <br />
          <div className="col-10 mx-auto">
          <button type="submit" className="btn btn-primary mb-2 col-4 col-md-2">
            <i class="fas fa-check"></i>
          </button>   
          &emsp;<button className="btn btn-danger mb-2 col-4 col-md-2" onClick={this.onHandleCancelClick}>
            <i class="fas fa-times"></i>
          </button>
          <br />
          </div>
          <label id="previewProfilePictureFileName" className="col-12"></label>
        </div>
      </form>
    );
  }
}
