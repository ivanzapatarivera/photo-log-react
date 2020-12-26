import React from 'react';

// Stylesheet
import './style.css'
// src\images\logo-nav.png
const photoLogIcon = 'https://photo-logger.herokuapp.com/images/logo-nav.png';

function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container text-white">
                <a className="navbar-brand" href="/photo-log-react">
                    <img src={photoLogIcon} className="logo-nav" />
                </a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mt-4">
                        <li className="nav-item">
                            <a className="nav-link" href="/profile">
                                <i className="far fa-user-circle"></i> Profile <span className="sr-only">(current)</span>
                            </a>
                        </li>
                   
                        <li className="nav-item">
                            <a className="nav-link" id="logNewPhoto">
                                <i className="fas fa-camera"></i> Log a Photo
                            </a>
                        </li> 
        
                        {/* <li className="nav-item nav-link">
                            <div className="dropdown" id="locationsLoggedNavbarBtn">
                                <div className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-map-marker-alt"></i> Albums
                                </div>
                                <div className="dropdown-menu shadow fade-in locationsLoggedDropdownMenu" aria-labelledby="dropdownMenuButton" id="generatedLocationsDropdownMenu">                              
                                </div>
                            </div>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;