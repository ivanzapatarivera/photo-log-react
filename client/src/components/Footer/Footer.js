import React, { Component } from "react";
import "./style.css";
import logo from "../Header/logo-nav.png";

export default class Footer extends Component {
  clickOnProfile = (e) => {
    window.location.replace("/");
  };

  clickOnLogAPhoto = (imageUploadForm) => {
    imageUploadForm = document.querySelector("#imageUploadForm");
    if (imageUploadForm.style.display == "none") {
      this.showImageUploadForm(imageUploadForm);
    } else {
      this.hideImageUploadForm(imageUploadForm);
    }
  };

  showImageUploadForm(imageUploadForm) {
    imageUploadForm.style.display = "block";
    imageUploadForm.classList.add("d-flex");
  }

  hideImageUploadForm(imageUploadForm) {
    imageUploadForm.style.display = "none";
    imageUploadForm.classList.remove("d-flex");
  }
  

  clickOnAlbums = (e) => {
    console.log(`You've clicked on`, e.target.innerText);
  };

  render() {
    return (
      <footer className="footer">
        <div className="d-flex justify-content-center align-items-end">
          <div className="links d-flex">
            <div className="pr-4 profileFooter" onClick={this.clickOnProfile}>
              <i class="far fa-user-circle"></i>
              &nbsp;&nbsp;<span class="linkText">Profile</span>
            </div>
            {(window.location.pathname == "/LogPhoto") ? [] : (
              <div className="log4photoFooter" onClick={this.clickOnLogAPhoto}>
              <i class="fas fa-camera"></i>
              &nbsp;&nbsp;<span class="linkText">Log a Photo</span>
            </div>
            )}
            <div className="pl-4 albumsFooter" onClick={this.clickOnAlbums}>
              <i class="fas fa-map-marker-alt"></i>
              &nbsp;&nbsp;<span class="linkText">Albums</span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
