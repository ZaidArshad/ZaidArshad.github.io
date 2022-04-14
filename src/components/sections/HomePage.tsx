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
        <PopText text='Zaid Arshad' className='title'/>
        <div className='home-title-sub'>Software Developer</div>
      </div>

      <div className='z-logo'><ZCap/></div>
      <PopText text='Projects' className='title'/>

      <div className='project-tab'>
        <KeyCap Front={BoatxzFront} Back={BoatxzBack} link='https://github.com/ZaidArshad/Boatxz'/>
        <KeyCap Front={WatReFront} Back={WatReBack} link='https://github.com/ZaidArshad/WatRe'/>
        <KeyCap Front={LevelToolFront} Back={LevelToolBack} link='https://github.com/ZaidArshad/Decay-Level-Tool'/>
        <KeyCap Front={DecayFront} Back={DecayBack} link='https://github.com/ZaidArshad/Decay'/>
        <KeyCap Front={DuckHuntFront} Back={DuckHuntBack} link='https://github.com/ZaidArshad/SOSY-Hacks-Duck-Hunt'/>
        <KeyCap Front={LapsFront} Back={LapsBack} link='https://github.com/ZaidArshad/Laps'/>
        <KeyCap Front={SupplyTrackerFront} Back={SupplyTrackerBack} link='https://github.com/ZaidArshad/Web-Consumable-Tracker'/>
        <KeyCap Front={GobblersFront} Back={GobblersBack} link='https://github.com/ZaidArshad/SFU-CS-Fall-Hacks-2021'/>
        <KeyCap Front={BounceFront} Back={BounceBack} link='https://github.com/ZaidArshad/Bounce'/>
      </div>
    </div>
  )
}

export default HomePage