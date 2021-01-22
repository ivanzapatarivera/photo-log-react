import React, { Component } from "react";
import "./style.css";

export default class ProfileImage extends Component {
  handleMouseOver = (e) => {
    e.target.style.backgroundColor = "red";
  };

  handleMouseOut = (e) => {
    e.target.style.backgroundColor = "transparent";
  };

  handleOnClick = (e, profilePictureUploadForm) => {
    profilePictureUploadForm = document.querySelector("#profilePictureUploadForm");
    if(profilePictureUploadForm.style.display == "none") {
      this.showProfilePictureUploadForm(profilePictureUploadForm)
    } else {
      this.hideProfilePictureUploadForm(profilePictureUploadForm)
    }
  };

  showProfilePictureUploadForm(profilePictureUploadForm) {
    profilePictureUploadForm.style.display = "block"
    profilePictureUploadForm.classList.add("d-flex");
  }

  hideProfilePictureUploadForm(profilePictureUploadForm) {
    profilePictureUploadForm.style.display = "none";
    profilePictureUploadForm.classList.remove("d-flex");
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div
              className="col-12 mx-auto"
              onMouseOver={this.handleMouseOver}
              onMouseOut={this.handleMouseOut}
              onClick={this.handleOnClick}
            >
              Picture Component
            </div>
          </div>
        </div>
      </div>
    );
  }
}
