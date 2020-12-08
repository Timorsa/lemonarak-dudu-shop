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
import ModalWarning from './components/modalWarning';

// shop import
import ShopAddon from './shop';
import './styles/main.scss';



const App = () => {

  
  function disableScroll() {
    window.onscroll = function () {
      window.scrollTo(0, 0);
    };
  }
  
  // const enableScroll = () => {
  //   window.onscroll = function () {
  //   }
  // };
  
  
    const LandingPage = () => (
      <>
        <Overlay />
        <div className="bg"></div>
        <Intro />
        <About />
        <Stores />
        
      </>
    )
    
    useEffect(() => {
      disableScroll();
      //enableScroll();
    }, [])
    
    return (
      <Router>
    <div className="App">
      <ModalWarning />
          <Switch>
            <Route path='/' exact >
              <LandingPage/>
            </Route>
            <Route path='/shop' >
              <ShopAddon/>
            </Route>
          </Switch>
        <Footer />
    </div>
        </Router>
  );
}

export default App;
