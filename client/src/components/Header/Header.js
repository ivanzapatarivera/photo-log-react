import React, { Component } from "react";
import "./style.css";
import logo from "./logo-nav.png";

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container d-flex justify-content-start align-items-end">
          <img src={logo} className="logo" alt="logo" />
          <div className="links d-flex">
            <div className="mx-4 profile">Profile</div>
            <div className="mx-4 logaphoto">Log a Photo</div>
            <div className="mx-4 albums">Albums</div>
          </div>
        </div>
      </nav>
    );
  }
}
