import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
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
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
          <Route path='/experience' component={Experience} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </div>
    )
  }
}


export default App;
