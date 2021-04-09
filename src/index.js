import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CookiesProvider } from "react-cookie";
import {
  BrowserRouter as Router,
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </Router>,
  document.getElementById('root')
);


