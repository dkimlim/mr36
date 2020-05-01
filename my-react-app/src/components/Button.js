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
            <button className="signUpButton">Sign in avec Facebook</button>
        </Link>
    );
};

export default SignUpButton;
