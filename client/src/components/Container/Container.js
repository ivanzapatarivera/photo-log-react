import React, { Component } from "react";
import ProfileImage from "../ProfileImage/ProfileImage";
import Description from "../Description/Description";
import StatusBtn from "../StatusBtn/StatusBtn";
import RenderStatus from "../Status/render";
import "./style.css";

// Importing Forms
import StatusForm from "../Forms/Status/Status";
import DescriptionForm from "../Forms/Description/Description";
import ImageUpload from "../Forms/ImageUpload/ImageUpload";
import ProfilePictureUpload from "../Forms/ProfilePictureUpload/ProfilePictureUpload";

export default class Container extends Component {
  render() {
    return (
      <div>
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
              <StatusBtn />
            </div>
          </div>
          <div className="row">
            <div className="gallery col-12 d-flex align-items-center justify-content-center">
              <section>Carrousel or Collage</section>
            </div>
          </div>
          <div className="row">
            <div className="updateMessages col-12 d-flex justify-content-center">
              <section>
                <RenderStatus />
              </section>
            </div>
          </div>
        </div>
        <div>
          <StatusForm />
          <DescriptionForm />
          <ImageUpload />
          <ProfilePictureUpload />
        </div>
      </div>
    );
  }
}
