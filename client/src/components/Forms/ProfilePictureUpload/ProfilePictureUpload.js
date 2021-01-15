import React, { Component } from "react";
import "./style.css";

export default class ProfilePictureUpload extends Component {

    onFormSubmit(e) {
        console.log('You submitted this form');
        e.preventDefault();
        
    }
    render() {
        return(
            <form className="mb-5 col-12 col-md-4 p-3 mx-auto text-center" style={{border: "1px solid lightgrey"}}>
                <h4>Update Profile Picture</h4>
            </form>
        )
    }
}