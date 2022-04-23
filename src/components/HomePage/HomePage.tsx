import '../../App.css';
import './homepage.css'
import PopText from '../PopText/PopText';
import ZCap from '../KeyCaps/ZCap';
import KeyCap from '../KeyCaps/KepCap';
import projects from './projects';
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