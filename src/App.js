import React, { lazy, Suspense, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Switch } from 'react-router-dom';
import './scss/App.scss';

const Home = lazy(() => import('./components/Home/Home'));
const About = lazy(() => import('./components/About/About'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const Experience = lazy(() => import('./components/Experience/Experience'));
const Contact = lazy(() => import('./components/Contact/Contact'));

const App = () => {
  const [activeItem, setActiveItem] = useState(getCurrentPath());

  function getCurrentPath() {
    const pathName = window.location.hash.substr(1);
    const path = pathName === '/' ? 'home' : pathName.substr(1);
    return path;
  }
  const handleClick = (e, name) => {
    setActiveItem(name);
  };

  return (
    <div id='container'>
      <Navbar handleClick={handleClick} activeItem={activeItem} />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route
            exact
            path='/'
            render={(props) => (
              <Home {...props} handleClick={handleClick} toName='contact' />
            )}
          />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
          <Route path='/experience' component={Experience} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
