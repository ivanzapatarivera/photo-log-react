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

  return (
    <div className="px-1">
      {
        (imageTag) ? <img src={"/image/" + imageTag.filename} alt={imageTag.filename} className="imagePreview" /> : (<p>No Image</p>)
      }
    </div>
  );
}
