import React from 'react';
import { Redirect } from 'react-router-dom';

function Home({ token, setToken }) {
    return (
        <div className="Home">
            <h1 className="Home-h1">Container Monde 3D</h1>
            <img src ="https://50e07b5ad0ad68162e1f-8b493d3b3ef98c1e2bde337d12990223.ssl.cf1.rackcdn.com/2105-Panorama-Panorama.jpg" />
            {/* {token ? <Redirect to="/Home" /> : null} */}
        </div>
    );
}
export default Home;
