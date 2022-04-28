import { useState } from 'react';
import './styles.css';
import "../../App.css";
import { ReactComponent as ZLogoFront} from '../assets/zlogo/z-logo.svg'
import { ReactComponent as ZLogoBack} from '../assets/zlogo/z-logo-pressed.svg'

/**
 * Component that holds the title z-button
 * @returns React.FC
 */
const KeyCap:React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  return (

    <div className='center'>        
      <svg className='logo' viewBox="0 0 433 459" fill="white" xmlns="http://www.w3.org/2000/svg">
        <ZLogoBack/>
        <g className={isHovered ? 'keycap-z-hover' : 'keycap-z'}>
          <ZLogoFront/>
        </g>
        <path
          className='hitbox'
          onClick={() => {isHovered && window.scroll(0, 10000)}}
          d="M1 216.292V242.708L216.292 458L431.584 242.708V216.292M1 216.292L216.292 431.584L431.584 216.292M1 216.292L216.292 1L431.584 216.292"
          onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}/>
        <path
          className='animation-blocker'
          d="M216.5 498.706C300.576 414.629 432.889 283.414 432.889 283.414L432.5 242.5L216.5 457.5L0 242.206L0 283.403C84.0767 367.48 132.423 414.629 216.5 498.706Z"/>

      </svg>
    </div>
  )
}

export default KeyCap