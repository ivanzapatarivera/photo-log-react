import React, { useState, useEffect } from "react";
import loggedPhotoService from "../../services/loggedPhotoService";
import "./style.css";

export default function ImageURL() {
  const [imageURL, setImageURL] = useState(null);
  useEffect(() => {
    if (!imageURL) {
      getimageURL();
    }
  });

  const getimageURL = async () => {
    let response = await loggedPhotoService.getAll();
    setImageURL(response);
  };

  return (
    <div>
      {imageURL ? (
        <input
          className="col-12"
          type="text"
          name="URL"
          id="URL"
          defaultValue={"/image/" + imageURL.filename}
        />
      ) : (
        []
      )}
    </div>
  );
}
