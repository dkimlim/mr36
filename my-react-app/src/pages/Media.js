import React from 'react';
import { Link, Redirect } from 'react-router-dom';

function Media({ token, setToken }) {
    return (
        <div className="Media">
            <h1 className="Media-h1">Media pop-up</h1>
            {/* {token ? <Redirect to="/Home" /> : null} */}
        </div>
    );
}
export default Media;
