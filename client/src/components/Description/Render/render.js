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
      {renderDescription ? (
        <p>{renderDescription.description}</p>
      ) : (
        <p>Please, enter profile description</p>
      )}
    </div>
  );
}
