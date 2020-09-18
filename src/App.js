import React from 'react';
import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Switch } from 'react-router-dom';
import MobileHome from './components/Routes/mobile/Home';
import MobileAbout from './components/Routes/mobile/About';
import MobileProjects from './components/Routes/mobile//Projects';
import MobileExperience from './components/Routes/mobile//Experience';
import MobileContact from './components/Routes/mobile//Contact';
import PcHome from './components/Routes/pc/Home';
import PcAbout from './components/Routes/pc/About';
import PcProjets from './components/Routes/pc/Projects';
import PcExperience from './components/Routes/pc/Experience';
import PcContact from './components/Routes/pc/Contact';
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
            <Route exact path='/' component={MobileHome} />
            <Route path='/about' component={MobileAbout} />
            <Route path='/projects' component={MobileProjects} />
            <Route path='/experience' component={MobileExperience} />
            <Route path='/contact' component={MobileContact} />
          </Switch>
        </div>
        <div id='pc-container'>
          <Sidebar />
          <Switch>
            <Route exact path='/' component={PcHome} />
            <Route path='/about' component={PcAbout} />
            <Route path='/projects' component={PcProjets} />
            <Route path='/experience' component={PcExperience} />
            <Route path='/contact' component={PcContact} />
          </Switch>
        </div>
      </div>
    )
  }
}


export default App;
