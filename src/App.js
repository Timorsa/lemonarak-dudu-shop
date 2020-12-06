import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import About from './components/about';
import Intro from './components/intro';
import Footer from './components/footer';
import Stores from './components/stores';
import Overlay from './components/overlay';

// shop import
import ShopAddon from './shop';
import './styles/main.scss';



const App = () => {


  const LandingPage = () => (
    <>
      <Overlay />
      <div className="bg"></div>
      <Intro />
      <About />
      <Stores />
      
    </>
  )
  function disableScroll() {
    window.onscroll = function () {
      window.scrollTo(0, 0);
    };
  }

  const enableScroll = () => setTimeout(function () {
    window.onscroll = function () {
    }
  }, 3000 /* miliseconds */);


  useEffect(() => {
    disableScroll();
    enableScroll();
  }, [])

  return (
        <Router>
    <div className="App">
          <Switch>
            <Route path='/'>
              <LandingPage/>
            </Route>
            <Route path exact='/shop'>
            </Route>
            <ShopAddon/>
          </Switch>
        <Footer />
    </div>
        </Router>
  );
}

export default App;
