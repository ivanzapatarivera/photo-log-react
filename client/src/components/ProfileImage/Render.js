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
            {(profileImage < 1) ?
                <p className="btn btn-primary mb-0">Add Profile Picture</p> :
                <img src={profileImage.URL} alt={profileImage.description} className="profileImage" id={profileImage._id} /> 
            }
        </div>
    );
}