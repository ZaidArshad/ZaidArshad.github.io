import React from 'react';
import './App.css';

import PopText from './components/PopText/PopText';

function App() {
  const priColour = getComputedStyle(document.documentElement).getPropertyValue("--primaryPurple").split("\"").join("");
  const secColour = getComputedStyle(document.documentElement).getPropertyValue("--secondayPurple").split("\"").join("");

  return (
    <div>
      <div className='center'>
        <PopText
          text='Zaid Arshad'
          priColour={secColour}
          secColour={priColour}
          fSize='70px'
        />
        <div className='TitleSub'>Software Developer</div>
      </div>
    </div>
  );
}

export default App;
