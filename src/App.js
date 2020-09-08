import React from 'react';
import Topbar from './components/Topbar';
import './css/mobile/App.css';
import './css/pc/App.css';
import './css/App.css';

function App() {
  return (
    <div id='container'>
      <div id='mobile-container'>
        <Topbar />
      </div>
      <div id='pc-container'>
        hello pc
      </div>
    </div>
  )
}


export default App;
