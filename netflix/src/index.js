import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';
import app from './app.css'

ReactDOM.render(
    <>
        <FirebaseContext.Provider value={{ firebase }}>
            <App />
        </FirebaseContext.Provider>
    </>,
  document.getElementById('root')
);

