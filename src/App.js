import React, { useEffect } from 'react'
import About from './components/about';
import Intro from './components/intro';
import Footer from './components/footer';
import Stores from './components/stores';
import Overlay from './components/overlay';

import './styles/main.scss';



const App = () => {


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
    <div className="App">
      <Overlay />
      <div className="bg"></div>
      <Intro />
      <About />
      <Stores />
      <Footer />
    </div>
  );
}

export default App;
