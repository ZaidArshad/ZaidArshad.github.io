import '../../App.css';
import './homepage.css'
import PopText from '../PopText/PopText';
import { CSSTransition } from 'react-transition-group';
import ZCap from '../KeyCaps/ZCap';
import { useState } from 'react';

const HomePage = () => {
    const priColour = getComputedStyle(document.documentElement).getPropertyValue("--primaryHome");
    const secColour = getComputedStyle(document.documentElement).getPropertyValue("--secondayHome");
    const [isHovered, setIsHovered] = useState<boolean>(false)
    const [visible, setVisible] = useState<boolean>(true)

  return (
    <div>

      <div className='home-title'>
        <PopText
          text='Zaid Arshad'
          priColour={secColour}
          secColour={priColour}
          fSize='70px'
        />
        <div className='home-title-sub'>Software Developer</div>
      </div>

      <div className='z-logo'><ZCap/></div>
      <PopText
        text='Projects'
        priColour={secColour}
        secColour={priColour}
        fSize='60px'
      />
    </div>
  )
}

export default HomePage