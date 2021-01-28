import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import React from 'react';
import Favicon from 'react-favicon';
import App from './App';

ReactDOM.render(
  <HashRouter>
    <Favicon url='https://raw.githubusercontent.com/SpraylnlPray/MySite/master/src/icons/favicon.png' />
    <App />
  </HashRouter>,
  document.getElementById('root')
);
