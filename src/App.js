import React, { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import * as ls from 'local-storage';
// import fb from './lib/firebase';
import './App.css';
import Home from './pages/HomeContainer';
import Media from './pages/Media';
import SignUpButton from './components/Button';

function App() {
    const [token, setToken] = useState(ls.get('appToken'));
    const history = useHistory();

    

    return (
        <div className="App">
            <SignUpButton
                className="button"
                setToken={setToken}
                token={token}
            />

            
            <Switch>
                <Route exact path="/">
                    <Home token={token} setToken={setToken} />
                </Route>
                <Route path="/Media">
                    <Media token={token} />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
