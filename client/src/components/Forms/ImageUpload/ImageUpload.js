import React from "react";
const axios = require("axios");

class ReactUploadImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("upload", this.state.file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post("/upload", formData, config)
      .then(windows.location.reload())
      .catch((error) => {});
    
  }
  onChange(e, filename, index, filenameArray) {
    this.setState({ file: e.target.files[0] });
    filename = e.target.value
    filenameArray = filename.split("\\")
    index = filenameArray.length - 1
    filename = filenameArray[index]
    
    const previewFileName = document.querySelector("#previewFileName");
    previewFileName.innerText = `Would you like to upload ${filename}?`
    console.log(filename)
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="mb-5 text-center col-12 col-md-4 p-3 mx-auto" style={{border: "1px solid lightgrey"}}>
        <h4>Upload a Picture</h4>
        <label className="btn btn-secondary col-12 col-md-6 mb-2 mx-auto">Select Profile Photo
          <input type="file" name="upload" className="btn btn-secondary" style={{display: "none"}} onChange={this.onChange} /><br />
        </label>
        <div className="col-12 mx-auto">
          <button type="submit" className="btn btn-primary mb-2">Upload</button>
          &emsp;<button className="btn btn-danger mb-2">Cancel</button><br />
          <label id="previewFileName" className=""></label><br />
        </div>
      </form>
    );
  }
}

export default ReactUploadImage;
