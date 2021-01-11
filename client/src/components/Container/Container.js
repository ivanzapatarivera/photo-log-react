import React, { Component } from "react";
import "./style.css";

export default class Container extends Component {
  render() {
    return (
      <div className="container contents bg-warning">
        <div className="row">
          <div className="profilePicture">
            <section>Profile Picture</section>
          </div>
        </div>
        <div className="row">
          <div className="newUpdateMessage">
            <section>Buttons for a new update message</section>
          </div>
        </div>
        <div className="row">
          <div className="gallery">
            <section>Carrousel or Collage</section>
          </div>
        </div>
        <div className="row">
          <div className="updateMessages">
            <section>Messages with Updates</section>
          </div>
        </div>
      </div>
    );
  }
}
