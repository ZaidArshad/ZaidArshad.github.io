import '../../App.css';
import './homepage.css'
import PopText from '../PopText/PopText';
import { ReactComponent as ZLogo } from '../assets/z-logo.svg'
import { ReactComponent as ZDLogo } from '../assets/z-logo-pressed.svg'
import KeyCap from '../KeyCaps/KeyCap';

const HomePage = () => {
    const priColour = getComputedStyle(document.documentElement).getPropertyValue("--primaryHome");
    const secColour = getComputedStyle(document.documentElement).getPropertyValue("--secondayHome");

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

      <div className='z-logo'><KeyCap Logo={ZLogo} DLogo={ZDLogo}/></div>
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