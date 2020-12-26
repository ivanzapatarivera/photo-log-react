import React from 'react';

// Components
import Navigation from '../Navigation/Navigation';

// Stylesheets
import './style.css';

function Frame() {
   return (
        <div className="body">
            <div className="row">
                <div className="col-12">
                   <Navigation />
                </div>
            </div>
        </div>
    )
}

export default Frame;