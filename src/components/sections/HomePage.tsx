import '../../App.css';
import './homepage.css'
import PopText from '../PopText/PopText';
import ZCap from '../KeyCaps/ZCap';
import KeyCap from '../KeyCaps/KepCap';

const HomePage = () => {

  return (
    <div>

      <div className='home-title'>
        <PopText
          text='Zaid Arshad'
          className='title'
        />
        <div className='home-title-sub'>Software Developer</div>
      </div>
      <div className='z-logo'><ZCap/></div>
      <PopText
        text='Projects'
        className='title'
      />

      <div className='project-tab'>
        <KeyCap/>
        <KeyCap/>
        <KeyCap/>
        <KeyCap/>
        <KeyCap/>
        <KeyCap/>
      </div>
    </div>
  )
}

export default HomePage