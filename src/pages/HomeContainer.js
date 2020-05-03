import React from 'react';
import { Redirect } from 'react-router-dom';

function Home({ token, setToken }) {
    return (
        <div className="Home">
        <iframe width="100%" height="640"  frameborder="0" allowfullscreen="true" allow="vr,gyroscope,accelerometer,fullscreen" scrolling="no" src="https://kuula.co/share/7JKxD?fs=1&vr=0&sd=1&thumbs=1&chromeless=0&logo=0&logosize=80"></iframe>
        </div>
    );
}
export default Home;
