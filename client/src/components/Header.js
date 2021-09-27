import React from 'react';
import { Link } from 'react-router-dom';
import GoogleApi from './GoogleAuth';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">Streamer</Link>
            <div className="ui right menu">
                <Link to="/" className="item">
                    All streams
                </Link>
                <GoogleApi></GoogleApi>
            </div>

        </div>
    );
};

export default Header;