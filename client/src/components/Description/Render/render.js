import React, { useState, useEffect, Component } from "react";
import descritionRenderService from "../../../services/descriptionRenderService";
import "../style.css";

export default function RenderDescription() {
  const [renderDescription, setRenderDescription] = useState(null);
  useEffect(() => {
    if (!renderDescription) {
      getRenderDescription();
    }
  });

  const getRenderDescription = async () => {
    let response = await descritionRenderService.getAll();
    setRenderDescription(response);
  };
  return (
    <div>
      {(renderDescription < 1) ? 
        <p className="btn btn-secondary mb-0">Edit Description</p> : 
        <p className="renderDescription">{renderDescription.description}</p>}
    </div>
  );
}
