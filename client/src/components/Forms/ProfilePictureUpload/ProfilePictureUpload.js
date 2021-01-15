import axios from "axios";
import React, { Component } from "react";
import "./style.css";

export default class ProfilePictureUpload extends Component {
    constructor(props){
        super(props);
        this.state = {
            file: null,
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onFormSubmit(e, res, formData, config) {
        e.preventDefault();
        formData = new FormData();
        formData.append("profilepictures", this.state.file);
        config = {
            header: { "Content-Type": "multipart/form-data", },
        };
        axios.post("/profilepictures", formData, config)
        .then(this.windowReload)
        .catch((err) => {res.json(err)})
    }

    windowReload() {
        window.location.reload();
    }

    onChange(e) {
        this.setState({ file: e.target.files[0] });
    }

    render() {
        return(
            <form onSubmit={this.onFormSubmit} className="col-12 col-md-4 p-3 mx-auto text-center profilePictureUploadForm" style={{border: "1px solid lightgrey", }}>
                <h4>Update Profile Picture</h4>
            </form>
        )
    }
}