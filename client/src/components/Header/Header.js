import React, { Component } from "react";
import "./style.css";
import logo from "./logo-nav.png";

export default class Header extends Component {
  clickOnLogo = (e) => {
    console.log(`You've clicked on`, e.target.id);
  };

  clickOnProfile = (e) => {
    console.log(`You've clicked on`, e.target.innerText);
  };

  clickOnLogAPhoto = (e) => {
    console.log(`You've clicked on`, e.target.innerText);
  };

  clickOnAlbums = (e) => {
    console.log(`You've clicked on`, e.target.innerText);
  };

  render() {
    return (
      <nav className="navbar sticky-top shadow">
        <div className="container d-flex justify-content-center align-items-end">
          <img
            src={logo}
            className="logo"
            id="logo"
            alt="logo"
            onClick={this.clickOnLogo}
          />
          <div className="links d-flex">
            <div className="ml-5 px-4 profile" onClick={this.clickOnProfile}>
              <i className="far fa-user-circle"></i>
              &emsp;<span className="linkText">Profile</span>
            </div>
            <div className="px-4 logaphoto" onClick={this.clickOnLogAPhoto}>
              <i className="fas fa-camera"></i>
              &emsp;<span className="linkText">Log a Photo</span>
            </div>
            <div className="px-4 albums" onClick={this.clickOnAlbums}>
              <i className="fas fa-map-marker-alt"></i>
              &emsp;<span className="linkText">Albums</span>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
