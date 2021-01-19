import React, { useState, useEffect } from "react";
import statusRenderService from "../../services/statusRenderService";
import "./style.css";

export default function RenderStatus() {
    const [ renderStatus, setRenderStatus ] = useState(null);
    useEffect(() => {
        if(!renderStatus) {
            getRenderStatus();
        }
    });

    const getRenderStatus = async () => {
        let response = await statusRenderService.getAll();
        console.log(response);
        setRenderStatus(response);
    }
}