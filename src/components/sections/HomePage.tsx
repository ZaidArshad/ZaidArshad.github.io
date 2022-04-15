import '../../App.css';
import './homepage.css'
import PopText from '../PopText/PopText';
import ZCap from '../KeyCaps/ZCap';
import KeyCap from '../KeyCaps/KepCap';
import projects from './projects';

const HomePage = () => {
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
            <KeyCap Front={project.Front} Back={project.Back} link={project.link}/>
          )
        }
      </div>
    </div>
  )
}

export default HomePage