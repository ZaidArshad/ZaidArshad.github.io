import { useState } from 'react';
import './styles.css';
import "../../App.css";

const KeyCap:React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const bgColor = getComputedStyle(document.documentElement).getPropertyValue("--background");

  return (

    <div>        
          <svg width="433" height="500" viewBox="0 0 433 459" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M216.292 457.584L431.584 242.292L216.292 27L1 242.292L216.292 457.584Z" fill="#600C88" stroke="#7C349E"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M231.946 128.098C223.005 128.247 211.433 132.561 198.621 145.373L108.145 235.849L93.2954 221L183.772 130.524C199.358 114.937 215.853 107.364 231.595 107.101C247.387 106.837 260.938 113.977 270.194 124.878C288.612 146.57 290.3 183.133 263.341 210.092L255.916 202.668L248.492 195.243C267.761 175.974 265.487 151.78 254.186 138.47C248.583 131.871 240.836 127.949 231.946 128.098ZM255.916 202.668C248.492 195.243 248.492 195.243 248.492 195.243L248.49 195.244L248.487 195.248L170.564 273.171C155.942 287.793 148.699 303.486 148.198 318.529C147.696 333.604 154.034 346.812 164.209 355.938C184.698 374.315 219.426 375.522 246.17 348.777L337.5 257.448L330.076 250.022L322.651 242.598L231.321 333.928C211.837 353.412 189.77 350.656 178.23 340.305C172.39 335.067 168.904 327.721 169.186 319.228C169.47 310.703 173.619 299.814 185.413 288.02L263.34 210.094L263.341 210.092C263.341 210.092 263.341 210.092 255.916 202.668Z" fill="#7C349E"/>
              <path d="M85.5318 271.283C100.814 271.283 113.202 258.895 113.202 243.613C113.202 228.331 100.814 215.942 85.5318 215.942C70.2498 215.942 57.8613 228.331 57.8613 243.613C57.8613 258.895 70.2498 271.283 85.5318 271.283Z" stroke="#7C349E" stroke-width="21"/>
              <path d="M347.052 260.717C362.334 260.717 374.723 248.328 374.723 233.046C374.723 217.764 362.334 205.376 347.052 205.376C331.77 205.376 319.382 217.764 319.382 233.046C319.382 248.328 331.77 260.717 347.052 260.717Z" stroke="#7C349E" stroke-width="21"/>
            </g>
            <g className={isHovered ? 'keycap-hover' : 'keycap'}>
              <path  d="M1 216.292V242.708L216.292 458L431.584 242.708V216.292M1 216.292L216.292 431.584L431.584 216.292M1 216.292L216.292 1L431.584 216.292" stroke="#FFFFFF00" fill={bgColor} />
              <path d="M216.292 458L431.584 242.708V216.5L216.292 431.584V444.792V458Z" fill="#7C349E"/>
              <path d="M216.292 431.584L1 216.292V242.708C85.0767 326.785 132.215 373.923 216.292 458V444.792V431.584Z" fill="#440861"/>
              <path d="M1 216.292V242.708L216.292 458L431.584 242.708V216.292M1 216.292L216.292 431.584L431.584 216.292M1 216.292L216.292 1L431.584 216.292" stroke="#7C349E"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M231.946 102.098C223.005 102.247 211.433 106.561 198.621 119.373L108.145 209.849L93.2954 195L183.772 104.524C199.358 88.9374 215.853 81.3641 231.595 81.1009C247.387 80.8368 260.938 87.9766 270.194 98.8784C288.612 120.57 290.3 157.133 263.341 184.092L255.916 176.668L248.492 169.243C267.761 149.974 265.487 125.78 254.186 112.47C248.583 105.871 240.836 101.949 231.946 102.098ZM255.916 176.668C248.492 169.243 248.492 169.243 248.492 169.243L248.49 169.244L248.487 169.248L170.564 247.171C155.942 261.793 148.699 277.486 148.198 292.529C147.696 307.604 154.034 320.812 164.209 329.938C184.698 348.315 219.426 349.522 246.17 322.777L337.5 231.448L330.076 224.022L322.651 216.598L231.321 307.928C211.837 327.412 189.77 324.656 178.23 314.305C172.39 309.067 168.904 301.721 169.186 293.228C169.47 284.703 173.619 273.814 185.413 262.02L263.34 184.094L263.341 184.092C263.341 184.092 263.341 184.092 255.916 176.668Z" fill="#7C349E"/>
              <path d="M85.5318 245.283C100.814 245.283 113.202 232.895 113.202 217.613C113.202 202.331 100.814 189.942 85.5318 189.942C70.2498 189.942 57.8613 202.331 57.8613 217.613C57.8613 232.895 70.2498 245.283 85.5318 245.283Z" stroke="#7C349E" stroke-width="21"/>
              <path d="M347.052 234.717C362.334 234.717 374.723 222.328 374.723 207.046C374.723 191.764 362.334 179.376 347.052 179.376C331.77 179.376 319.381 191.764 319.381 207.046C319.381 222.328 331.77 234.717 347.052 234.717Z" stroke="#7C349E" stroke-width="21"/>
            </g>
            <path className='hitbox' d="M1 216.292V242.708L216.292 458L431.584 242.708V216.292M1 216.292L216.292 431.584L431.584 216.292M1 216.292L216.292 1L431.584 216.292" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}/>
          </svg>
        
    </div>
    
  )
}

export default KeyCap