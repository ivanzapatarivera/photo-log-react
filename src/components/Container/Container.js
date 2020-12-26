import React from 'react';

// Components
import Navigation from '../Navigation/Navigation';

// Stylesheets
import './style.css';

function Frame() {
   return (
        <div className="frame">
            <div className="row">
                <div>
                   <Navigation />
                </div>
            </div>
        </div>
    )
}

export default Frame;