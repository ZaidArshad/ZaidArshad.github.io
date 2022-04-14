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
        <PopText text='Zaid Arshad' className='title'/>
        <div className='home-title-sub'>
          Software Developer
        </div>
      </div>

      <div className='z-logo'>
        <ZCap/>
      </div>

      <PopText text='Projects' className='title'/>
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