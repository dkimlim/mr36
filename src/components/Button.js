import React from 'react';
import { Link } from 'react-router-dom';
import * as ls from 'local-storage';
import getToken from '../lib/tokenGenerator';

const SignUpButton = ({ token, setToken })  => {
    const onClick = event => {
        const newToken = getToken();
        ls.set('appToken', newToken);
        setToken(newToken);
    };
    return (
        <Link to="/Home" onClick={onClick}>
            <button className="signUpButton">
            <div className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="false"></div>
            </button>
            

        </Link>
    );
};

export default SignUpButton;
