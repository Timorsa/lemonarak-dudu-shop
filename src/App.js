import React from 'react'
import About from './components/about';
import Intro from './components/intro';
import Stores from './components/stores';
import Overlay from './components/overlay'

import './styles/main.scss';



const App = () => {
  // const section = document.querySelector('section');
  // let currentPos = window.pageYOffset;

  // const update = () => {
  //   const newPos = window.pageYOffset;
  //   const diff = newPos - currentPos;
  //   const speed = diff * 0.35;
  //   if (section)
  //     section.style.transform = `skewY(${speed / 10}deg)`;

  //   currentPos = newPos;

  //   requestAnimationFrame(update);
  // }

  // update();



  return (
    <div className="App">
      <Overlay />
      <div className="bg"></div>
      <Intro />
      <About />
      <Stores />
    </div>
  );
}

export default App;
