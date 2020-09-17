import React from 'react';
import Topbar from './components/Topbar/Topbar';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Routes/Home';
import About from './components/Routes/About';
import Projects from './components/Routes/Projects';
import Experience from './components/Routes/Experience';
import Contact from './components/Routes/Contact';
import './css/mobile/App.css';
import './css/pc/App.css';
import './css/App.css';

class App extends React.Component {
  componentDidMount() {
    this.setWindowSize();
  }

  setWindowSize() {
    const w = Math.max( document.documentElement.clientWidth, window.innerWidth || 0 );
    const h = Math.max( document.documentElement.clientHeight, window.innerHeight || 0 );
    document.getElementById( 'root' ).style.height = h.toString() + 'px';
    document.getElementById( 'root' ).style.width = w.toString() + 'px';
  }

  render() {
    return (
      <div id='container'>
        <div id='mobile-container'>
          <Topbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/projects' component={Projects} />
            <Route path='/experience' component={Experience} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </div>
        <div id='pc-container'>
          hello pc
        </div>
      </div>
    )
  }
}


export default App;
