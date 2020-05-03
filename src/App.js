import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, useHistory } from 'react-router-dom';
import * as ls from 'local-storage';
// import fb from './lib/firebase';
import './App.css';
import Home from './pages/HomeContainer';
// import Media from './pages/Media';
import SignUpButton from './components/Button';
import LinkUrl from './components/Link';
import Media from './components/Media';

function App() {
    const [token, setToken] = useState(ls.get('appToken'));
    const history = useHistory();

    const ToggleContent = ({ toggle, content }) => {
        const [isShown, setIsShown] = React.useState(false);
        const hide = () => setIsShown(false);
        const show = () => setIsShown(true);

        return (
          <React.Fragment>
            {toggle(show)}
            {isShown && content(hide)}
          </React.Fragment>
        );
      }

    const Modal = ({ children }) => (
        ReactDOM.createPortal(
          <div className="modal">
            {children}
          </div>,
          document.getElementById('modal-root')
        )
    );

    return (
        <div className="App">

        <ToggleContent
            toggle={show => <button onClick={show} className="Link1">Link to video</button>}
            content={hide => (
            <Modal>
                <Media type="stm"/>
                <button onClick={hide}>Close</button>
            </Modal>
            )}
        />

        <ToggleContent
            toggle={show => <button onClick={show} className="Link2">Link to peggy</button>}
            content={hide => (
            <Modal>
                <Media type="peggy"/>
                <button onClick={hide}>Close</button>
            </Modal>
            )}
        />

            <SignUpButton
                className="button"
                setToken={setToken}
                token={token}
            />

            <Switch>
                <Route exact path="/">
                    <Home token={token} setToken={setToken} />
                </Route>
                {/* <Route path="/Media">
                    <Media token={token} />
                </Route> */}
            </Switch>
        </div>
    );
}

export default App;


