import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App text={'Hello World'} />
  </BrowserRouter>,
  document.getElementById( 'root' )
);