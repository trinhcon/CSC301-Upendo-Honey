import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

serviceWorker.register();


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);