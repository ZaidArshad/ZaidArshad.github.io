import '../../App.css';
import './homepage.css'
import PopText from '../PopText/PopText';
import ZCap from '../KeyCaps/ZCap';
import KeyCap from '../KeyCaps/KepCap';
import projects from './projects';
import TextDescription from '../TextDescription/TextDescription';

import { ReactComponent as Front} from '../assets/backbutton/back-button-cap.svg';
import { ReactComponent as Back} from '../assets/backbutton/back-button-cap-pressed.svg';
import DiamondCaps from '../DiamondCaps/DiamondCaps';

const HomePage = () => {
  // window.scroll(0,0);
  return (
    <div>
      <div className='home-title'>
        <PopText>
          Zaid Arshad
        </PopText>
        <div className='home-title-sub'>
          Software Developer
        </div>
      </div>

      <div className='z-logo'>
        <ZCap/>
      </div>

      <PopText>
        Projects
      </PopText>
      <div className='project-tab'>
        {
          projects.map((project) => 
            <KeyCap Front={project.Front} Back={project.Back} link={project.link} key={project.key}/>
          )
        }
      </div>

      <div className='about'>
        <TextDescription title='About Me'>
          I am currently in my second year pursuing a degree in computer science at Simon Fraser University. 
          I hope to soon apply my efforts towards a co-op or an internship.
          As shown in my projects, I have developed skills for front-end, back-end, game, web, and mobile development. 
        </TextDescription>

        <div className='external-links'>
          <DiamondCaps Front={Front} Back={Back} link={''}/>
          <DiamondCaps Front={Front} Back={Back} link={''}/>
          <DiamondCaps Front={Front} Back={Back} link={''}/>
        </div>
      </div>
    </div>
  )
}

export default HomePage