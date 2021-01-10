import React, { Component } from "react";
import "./style.css";
import logo from "./logo-nav.png";


export default class Header extends Component {

    clickOnProfile = (e) => {
        console.log(`You've clicked on`, e.target.innerText)
    }

    clickOnLogAPhoto = (e) => {
        console.log(`You've clicked on`, e.target.innerText)
    }

    clickOnAlbums = (e) => {
        console.log(`You've clicked on`, e.target.innerText)
    }

  render() {
    return (
      <nav className="navbar">
        <div className="container d-flex justify-content-start align-items-end">
          <img src={logo} className="logo" alt="logo" />
          <div className="links d-flex">
            <div className="mx-4 ml-5 profile" onClick={this.clickOnProfile}>
              <i class="far fa-user-circle"></i>
              &emsp;Profile
            </div>
            <div className="mx-4 logaphoto" onClick={this.clickOnLogAPhoto}>
            <i class="fas fa-camera"></i>
                &emsp;Log a Photo</div>
            <div className="mx-4 albums" onClick={this.clickOnAlbums}>
            <i class="fas fa-map-marker-alt"></i>
                &emsp;Albums</div>
          </div>
        </div>
      </nav>
    );
  }
}

