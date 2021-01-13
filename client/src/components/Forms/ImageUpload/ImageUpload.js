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
      .catch((error) => {});
  }
  onChange(e) {
    this.setState({ file: e.target.files[0] });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="mb-5 text-center col-6 p-3 mx-auto" style={{border: "1px solid lightgrey"}}>
        <h4>Upload a Picture</h4>
        <input type="file" name="upload" className="btn btn-secondary" onChange={this.onChange} />
        &emsp;<button type="submit" className="btn btn-primary">Upload</button>
        &emsp;<button className="btn btn-danger">Cancel</button>
      </form>
    );
  }
}

export default ReactUploadImage;
