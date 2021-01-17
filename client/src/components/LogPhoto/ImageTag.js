import React, { useState, useEffect, Component } from "react";
import loggedPhotoService from "../../services/loggedPhotoService";
import "./style.css";

export default function ImageTag() {
  const [imageTag, setImageTag] = useState(null);
  console.log(loggedPhotoService);
  useEffect(() => {
    if (!imageTag) {
      getImageTag();
    }
  });

  const getImageTag = async () => {
    let res = await loggedPhotoService.getAll();
    console.log(res)
    setImageTag(res);
  };

  // const renderImageTag = (imageTag) => {
  //   console.log("This is image tag", imageTag);
  //   <li>{imageTag}</li>;
  // };

  return (
    <ul>
      {
        (imageTag) ? <img src={"/image/" + imageTag.filename} alt={imageTag.filename} className="imagePreview" /> : (<p>No Image</p>)
      }
    </ul>
  );
}
