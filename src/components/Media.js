import React from 'react';
import '../App.css';

const Media = ({type}) => {

    let output;

    if (type === 'none') {
        output = (
            <div className="Modal">
                yo yo yo
            </div>
        );
    } else if (type === 'stm') {
            output = (
                <div className="Media">
                <h1 className="Media-h1">Media pop-up</h1>
                {/* {token ? <Redirect to="/Home" /> : null} */}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/fPpbbSOAgYQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            );
    } else if (type === 'peggy') {
        output = (
            <div className="Media">
            <h1 className="Media-h1">Peggy Gou pop-up</h1>
            {/* {token ? <Redirect to="/Home" /> : null} */}
            <iframe width="560" height="315" src="https://www.youtube.com/embed/jxcK_wENFgo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        );
    }
    return output;
}
export default Media;
