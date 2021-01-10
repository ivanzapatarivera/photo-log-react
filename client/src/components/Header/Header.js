import React, { Component } from "react";
import "./style.css";
import logo from "./logo-nav.png";

export default class Header extends Component {

    
  render() {
    return (
      <navbar className="navbar">
          <div className="container">
              <img src={logo} alt="logo" />
          </div>
          
      </navbar>
    );
  }
}
