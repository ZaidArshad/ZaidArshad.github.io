import '../../App.css';
import './homepage.css'
import PopText from '../PopText/PopText';
import ZCap from '../KeyCaps/ZCap';

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
    </div>
  )
}

export default HomePage