import React from "react";
const axios = require("axios");

export default class ImageUpload extends React.Component {
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
    this.onAPIChange() 
    formData = new FormData();
    formData.append("upload", this.state.file);
    config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post("/upload", formData, config)
      .catch((req, res, error) => { res.json(error)});
    
  }

  onAPIChange() {
    const API = `/image`;
    fetch(API)
    .then((res) => res.json(API))
    .then((data) => {
      let initialDataLength = data.length;
      this.validationAPI(initialDataLength, API);
    })
  }

  validationAPI(initialDataLength, API) {
    console.log("This is API", API)
    console.log("This is initial data length", initialDataLength)
    fetch(API)
    .then((res) => res.json(API))
    .then((data) => {
      let newDataLength = data.length;
      console.log("New Data Length before validation ", newDataLength)
      if(newDataLength > initialDataLength) {
        console.log("Data length has changed to: ", newDataLength); window.location.replace("/LogPhoto")
      } else { 
        console.log("New data length is the same as initial data length.")
        this.validationAPI(initialDataLength, API);
      }
    })
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

  render() {
    return (
      <form
        onSubmit={this.onFormSubmit}
        className="mb-5 text-center col-12 col-lg-4 p-1 mx-auto"
        style={{ border: "1px solid lightgrey", display: "none" }}
        id="imageUploadForm"
      >
        <h4>Upload a Picture</h4>
        <label className="btn btn-secondary col-12 col-md-6 mb-2 mx-auto">
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
          &emsp;<button className="btn btn-danger mb-2"><i class="fas fa-times"></i></button>
          <br />
          <label id="previewFileName" className=""></label>
          <br />
        </div>
      </form>
    );
  }
}
