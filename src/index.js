import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import React, { Suspense } from 'react';
import App from './App';

ReactDOM.render(
  <HashRouter>
    {/* <Suspense fallback={<div>Loading...</div>}> */}
    <App />
    {/* </Suspense> */}
  </HashRouter>,
  document.getElementById('root')
);
