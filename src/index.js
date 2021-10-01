import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';
import BrowserRouter from 'react-router-dom/BrowserRouter';

ReactDOM.render(
    <>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        <FirebaseContext.Provider value={{ firebase }}>
            <App />
        </FirebaseContext.Provider>
        </BrowserRouter>
    </>,
  document.getElementById('root')
);

