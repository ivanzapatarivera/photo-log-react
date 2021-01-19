import React, { useState, useEffect } from "react";
import statusRenderService from "../../services/statusRenderService";
import "./style.css";

export default function RenderStatus() {
  const [renderStatus, setRenderStatus] = useState(null);
  useEffect(() => {
    if (!renderStatus) {
      getRenderStatus();
    }
  });

  const getRenderStatus = async () => {
    let response = await statusRenderService.getAll();
    console.log(`Render status response`, response);
    setRenderStatus(response);
  };

  const handleRenderStatus = (renderStatus) => {
    return (
      <p>
        {renderStatus.timestamp}
        <br />
        {renderStatus.status}
      </p>
    );
  };
  return (
    <div>
        {renderStatus ? (
          renderStatus.map((renderStatus) => handleRenderStatus(renderStatus))
        ) : (
          <p>There are no updates on your timeline.</p>
        )}
    </div>
  );
}
