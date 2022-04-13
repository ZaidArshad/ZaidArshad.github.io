import '../../App.css';
import './homepage.css'
import PopText from '../PopText/PopText';
import ZCap from '../KeyCaps/ZCap';
import KeyCap from '../KeyCaps/KepCap';

import { ReactComponent as BoatxzFront} from '../assets/Boatxz/boatxz-cap.svg'
import { ReactComponent as BoatxzBack} from '../assets/Boatxz/boatxz-cap-pressed.svg'
import { ReactComponent as WatReFront} from '../assets/WatRe/watre-cap.svg'
import { ReactComponent as WatReBack} from '../assets/WatRe/watre-cap-pressed.svg'
import { ReactComponent as LevelToolFront} from '../assets/LevelTool/leveltool-cap.svg'
import { ReactComponent as LevelToolBack} from '../assets/LevelTool/leveltool-cap-pressed.svg'
import { ReactComponent as DecayFront} from '../assets/Decay/decay-cap.svg'
import { ReactComponent as DecayBack} from '../assets/Decay/decay-cap-pressed.svg'
import { ReactComponent as DuckHuntFront} from '../assets/DuckHunt/duckhunt-cap.svg'
import { ReactComponent as DuckHuntBack} from '../assets/DuckHunt/duckhunt-cap-pressed.svg'
import { ReactComponent as LapsFront} from '../assets/Laps/laps-cap.svg'
import { ReactComponent as LapsBack} from '../assets/Laps/laps-cap-pressed.svg'
import { ReactComponent as SupplyTrackerFront} from '../assets/SupplyTracker/supplytracker-cap.svg'
import { ReactComponent as SupplyTrackerBack} from '../assets/SupplyTracker/supplytracker-cap-pressed.svg'
import { ReactComponent as GobblersFront} from '../assets/Gobblers/gobblers-cap.svg'
import { ReactComponent as GobblersBack} from '../assets/Gobblers/gobblers-cap-pressed.svg'
import { ReactComponent as BounceFront} from '../assets/Bounce/bounce-cap.svg'
import { ReactComponent as BounceBack} from '../assets/Bounce/bounce-cap-pressed.svg'



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
        <KeyCap front={<g><BoatxzFront/></g>} back={<g><BoatxzBack/></g>}/>
        <KeyCap front={<g><WatReFront/></g>} back={<g><WatReBack/></g>}/>
        <KeyCap front={<g><LevelToolFront/></g>} back={<g><LevelToolBack/></g>}/>
        <KeyCap front={<g><DecayFront/></g>} back={<g><DecayBack/></g>}/>
        <KeyCap front={<g><DuckHuntFront/></g>} back={<g><DuckHuntBack/></g>}/>
        <KeyCap front={<g><LapsFront/></g>} back={<g><LapsBack/></g>}/>
        <KeyCap front={<g><SupplyTrackerFront/></g>} back={<g><SupplyTrackerBack/></g>}/>
        <KeyCap front={<g><GobblersFront/></g>} back={<g><GobblersBack/></g>}/>
        <KeyCap front={<g><BounceFront/></g>} back={<g><BounceBack/></g>}/>
      </div>
    </div>
  )
}

export default HomePage