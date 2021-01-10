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
      <nav className="navbar shadow">
        <div className="container d-flex justify-content-center align-items-end">
          <img src={logo} className="logo" alt="logo" />
          <div className="links d-flex">
            <div className="ml-5 px-4 profile" onClick={this.clickOnProfile}>
              <i class="far fa-user-circle"></i>
              &emsp;<span class="linkText">Profile</span>
            </div>
            <div className="px-4 logaphoto" onClick={this.clickOnLogAPhoto}>
            <i class="fas fa-camera"></i>
                &emsp;<span class="linkText">Log a Photo</span>
            </div>
            <div className="px-4 albums" onClick={this.clickOnAlbums}>
            <i class="fas fa-map-marker-alt"></i>
                &emsp;<span class="linkText">Albums</span>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

