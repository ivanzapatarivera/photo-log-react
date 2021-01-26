import React, { useState, useEffect } from "react";
import "./style.css";

// Importing services 
import profileImageService from "../../services/profileImageService";

export default function RenderProfileImage() {
    const [ profileImage, setProfileImage ] = useState(null);
    useEffect(() => {
        if(!profileImage) {
            getProfileImage();
        }
    });

    const getProfileImage = async () => {
        let response = await profileImageService.getAll();
        console.log(response);
        setProfileImage(response);
    }

    return (
        <div>
            {(profileImage) ? 
                <img src={profileImage.URL} alt={profileImage.description} className="imagePreview" id={profileImage._id} style={{ width: "12.5em", height: "auto" }} /> : (<p>Add Profile Image</p>)
            }
        </div>
    );
}