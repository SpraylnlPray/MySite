import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import React from 'react';
import App from './App';

ReactDOM.render(
  <HashRouter>
    <App text={'Hello World'} />
  </HashRouter>,
  document.getElementById( 'root' )
);