import React, { useState } from 'react';
import './styles.css';
import "../../App.css";
import { Link } from 'react-router-dom';
import { BasePage } from '../Page/BasePage';

export interface KeyCapProps {
  page: BasePage,
  title?: string,
  tags?: string[]
}

/**
 * Button component that goes to a link 
 * @param Front SVG of the button in an idle state 
 * @param Back SVG of the button when hovered
 * @param link Link to navigate to when clicked
 * @returns React.FC<KeyCapProps>
 */
const KepCap: React.FC<KeyCapProps> = (props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const page = props.page
  const tags = []
  const offset = 45
  const gap = 20
  if (props.tags) {
    for (let i = 0; i < props.tags.length; i += 1) {
      tags.push(<tspan key={i} x="0" y={offset + (gap * i) + "px"} fontSize='15px'>{props.tags[i]}</tspan>)
    }
  }

  return (
    <svg className='keycap-svg' viewBox="0 0 545 368" fill="none" xmlns="http://www.w3.org/2000/svg" >

      <page.Back />
      <text transform="translate(38, 64)" fontSize="40px" fill={'white'} fontFamily='Poppins'>
        {props.title}
        {tags}
      </text>

      <g className={isHovered ? 'keycap-hover' : 'keycap'}>
        <page.Front />
        <text transform="translate(26, 52)" fontSize="40px" fill={page.primaryColor} fontFamily='Poppins'>
          {props.title}
          {tags}
        </text>
      </g>
      <path className='animation-blocker' d="M0 368V345H521.426V0H544.5V368H0Z" />

      <Link to={isHovered ? page.link : ''}>
        <path
          className='hitbox'
          d="M504.565 3H8V328.174M504.565 3V328.174H8M504.565 3L521 19.4348V344.608H24.4348L8 328.174"
          onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} />
      </Link>

    </svg>


  )
}

export default KepCap