import React, { useState, useEffect } from "react";
import loggedPhotoService from "../../services/loggedPhotoService";
import "./style.css";

export default function ImageTag() {
  const [imageTag, setImageTag] = useState(null);
  useEffect(() => {
    if (!imageTag) {
      getImageTag();
    }
  });

  const getImageTag = async () => {
    let res = await loggedPhotoService.getAll();
    setImageTag(res);
  };

  return (
    <div className="px-1">
      {
        (imageTag) ? <img src={"/image/" + imageTag.filename} alt={imageTag.filename} className="imagePreview" id="imageTag" /> : <p>No Image</p>
      }
    </div>
  );
}
