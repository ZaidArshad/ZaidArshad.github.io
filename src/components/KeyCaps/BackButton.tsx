import { useState } from 'react';
import './styles.css';
import "../../App.css";
import { Link } from 'react-router-dom';

const KeyCap:React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const secondaryColor = document.documentElement.style.getPropertyValue("--secondaryColor");
  const primaryColor = document.documentElement.style.getPropertyValue("--primaryColor");

  return (

    <div className='center'>        
      <svg className='back-button' viewBox="0 0 117 127" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
            <path d="M58.5 113.999L112 60.4995L58.5 6.99951L5 60.4995L58.5 113.999Z" fill={secondaryColor} stroke={primaryColor}/>
            <path d="M51.641 37.8649L29.0063 60.8424L51.641 83.82V76.7991L38.647 63.6082L88.3365 60.8424L38.647 58.0766L51.641 44.8858V37.8649Z" fill={primaryColor} stroke={primaryColor} stroke-width="7"/>
        </g>
        
        <g className={isHovered ? 'keycap-back-hover' : 'keycap-back'}>
            <path d="M58.5 108L112 54.5L58.5 1L5 54.5L58.5 108Z" fill="white"/>
            <path d="M5 61.0644L58.5 114.564L112 61.0644V54.5L58.5 108L5 54.5V61.0644Z" fill="white"/>
            <path d="M5 54.5V61.0644L58.5 114.564L112 61.0644V54.5M5 54.5L58.5 108L112 54.5M5 54.5L58.5 1L112 54.5" stroke={primaryColor}/>
            <path d="M58.5 114.564C79.393 93.6714 112 61.0644 112 61.0644V54.5517L58.5 108V111.282C58.5 111.282 58.5 113.283 58.5 114.564Z" fill={primaryColor}/>
            <path d="M58.5 108L5 54.5V61.0644C25.893 81.9575 37.607 93.6714 58.5 114.564C58.5 113.283 58.5 111.282 58.5 111.282V108Z" fill={secondaryColor}/>
            <path d="M51.641 31.8654L29.0063 54.8429L51.641 77.8205V70.7996L38.647 57.6087L88.3365 54.8429L38.647 52.0771L51.641 38.8863V31.8654Z" fill={primaryColor} stroke={primaryColor} stroke-width="7"/>
            <path d="M58.5149 126.8C81.2389 103.855 117 68.0459 117 68.0459L116.895 56.8802L58.5149 115.555L0 56.8L0 68.0429C22.724 90.9878 35.7909 103.855 58.5149 126.8Z" fill="white"/>
        </g>

        <Link to={'/'}>
          <path
            className='hitbox'
            d="M1 61.0644L54.5 114.564L108 61.0644V54.5L54.5 1L1 54.5V61.0644Z"
            onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}/>
        </Link>
        <path
          className='animation-blocker'
          d="M58.5149 126.8C81.2389 103.855 117 68.0459 117 68.0459L116.895 56.8802L58.5149 115.555L0 56.8L0 68.0429C22.724 90.9878 35.7909 103.855 58.5149 126.8Z"/>

      </svg>
    </div>
  )
}

export default KeyCap