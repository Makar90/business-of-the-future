

// npm install react-router-dom
// npm install sass
// npm install firebase

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './main.scss';
import './firebase.js';
//import reportWebVitals from './reportWebVitals';

/*let login_flag = 'false'; // logined_man logined_female
export function changeLogin_flag(value) {
    login_flag = value;
}
export function getLogin_flag() {
    return login_flag;
}*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter >
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
