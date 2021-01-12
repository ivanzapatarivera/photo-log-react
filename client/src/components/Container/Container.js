import React, { Component } from "react";
import ProfileImage from "../ProfileImage/ProfileImage";
import Description from "../Description/Description";
import "./style.css";

export default class Container extends Component {
  render() {
    return (
      <div className="container contents">
        <div className="row">
          <div className="col-12">
            <section>
              <div className="row">
                <div className="col-md-4 col-12 image d-flex align-items-center justify-content-center">
                  <ProfileImage />
                </div>
                <div className="col-md-8 col-12 description">
                  <Description />
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="row">
          <div className="newUpdateMessage col-12 d-flex align-items-center justify-content-center">
            <section>Buttons for a new update message</section>
          </div>
        </div>
        <div className="row">
          <div className="gallery col-12 d-flex align-items-center justify-content-center">
            <section>Carrousel or Collage</section>
          </div>
        </div>
        <div className="row">
          <div className="updateMessages col-12 d-flex justify-content-center">
            <section>Messages with Updates</section>
          </div>
        </div>
      </div>
    );
  }
}
