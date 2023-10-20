import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'

// Create a function to load the Cookiebot script
function loadCookiebot() {
  const script = document.createElement('script');
  script.id = 'CookieDeclaration';
  script.src = 'https://consent.cookiebot.com/833787b2-df56-499c-bf41-32fbb791b29a/cd.js';
  script.type = 'text/javascript';
  script.async = true;
  document.body.appendChild(script);
}

// Load the Cookiebot script
loadCookiebot();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
