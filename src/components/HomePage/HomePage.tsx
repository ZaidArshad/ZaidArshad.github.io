import '../../App.css';
import './homepage.css'
import PopText from '../PopText/PopText';
import ZCap from '../KeyCaps/ZCap';
import KeyCap from '../KeyCaps/KepCap';
import projects, { projectGroups } from './projects';
import TextDescription from '../TextDescription/TextDescription';
import * as iconSVGs from '../assets/icons/index';
import DiamondCaps from '../DiamondCaps/DiamondCaps';

/**
 * Component of the homepage that holds the buttons to project and about 
 * @returns React Component
 */
const HomePage = () => {
  window.scroll(0,0);
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

      <div className='project-tab'>
        <PopText>
          Mobile Apps
        </PopText>
        {
          projectGroups.mobile.map((project) => 
            <KeyCap project={project}/>
          )
        }

        <PopText>
          Games
        </PopText>
        {
          projectGroups.games.map((project) => 
            <KeyCap project={project}/>
          )
        }

        <PopText>
          Tools
        </PopText>
        {
          projectGroups.tools.map((project) => 
            <KeyCap project={project}/>
          )
        }
      </div>

      <div className='about'>
        <TextDescription title='About Me'>
          Pursuing a degree in computer science at Simon Fraser University. 
          Currently have 8 months of experience at Safe Software Inc. as a developer.
          As shown in my projects, I have developed skills for front-end, back-end, game, web, and mobile development. 
        </TextDescription>

        <div className='external-links'>
          <DiamondCaps Front={iconSVGs.LinkedinFront} Back={iconSVGs.LinkedinBack} link={'https://www.linkedin.com/in/zaid-arshad-882b12227/'}/>
          <DiamondCaps Front={iconSVGs.GithubFront} Back={iconSVGs.GithubBack} link={'https://github.com/ZaidArshad'}/>
          <DiamondCaps Front={iconSVGs.EmailFront} Back={iconSVGs.EmailBack} link={'mailto:zaidy.arshad@gmail.com'}/>
          <DiamondCaps Front={iconSVGs.CVFront} Back={iconSVGs.CVBack} link='resumes/dev-resume.pdf'/>
        </div>
      </div>
    </div>
  )
}

export default HomePage