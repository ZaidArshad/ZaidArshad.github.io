import React, { useState } from 'react'
import './style.css'

export interface Props {
    Front: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    Back: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    bgColor?: string;
    link: string;
}  

/**
 * Diamond button component that goes to a link
 * @param Front SVG of the button in an idle state 
 * @param Back SVG of the button when hovered
 * @param link Link to navigate to when clicked
 * @returns React.FC<Props>
 */
const DiamondCaps:React.FC<Props> = ({Front, Back, link, bgColor}) => {
    const [isHovered, setIsHovered] = useState<boolean>(false)
    if (!bgColor) bgColor = '#600C88'

    return (
  
      <div className='center'>        
        <svg className='diamondcap-svg' viewBox="0 0 117 127" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Back/>
          
          <g className={isHovered ? 'diamondcap-hover' : 'diamondcap'}>
              <Front/>
          </g>
          
          <path
            className='hitbox'
            onMouseDown={() => {isHovered && window.open(link)}}
            d="M1 61.0644L54.5 114.564L108 61.0644V54.5L54.5 1L1 54.5V61.0644Z"
            onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}/>
          <path
            style={{fill:bgColor}}
            d="M58.5149 126.8C81.2389 103.855 117 68.0459 117 68.0459L116.895 56.8802L58.5149 115.555L0 56.8L0 68.0429C22.724 90.9878 35.7909 103.855 58.5149 126.8Z"/>
        </svg>
      </div>
    )
  }

export default DiamondCaps