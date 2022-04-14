import { useState} from 'react';
import './styles.css';
import "../../App.css";

interface Props {
  Front: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  Back: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  link: string;
}

const onClick:Function = (link:string) => {
  window.open(link, "_blank");
}

const KepCap:React.FC<Props> = ({Front, Back, link}) => {
    const bgColor = getComputedStyle(document.documentElement).getPropertyValue("--background");
    const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <svg className='keycap-svg' viewBox="0 0 545 368" fill="none" xmlns="http://www.w3.org/2000/svg" >
      <Back/>
      <g className={isHovered ? 'keycap-hover' : 'keycap'}> <Front/> </g>

      <path className='animation-blocker' d="M0 368V345H521.426V0H544.5V368H0Z"/>
      
      <path 
        onMouseDown={() => {onClick(link)}}
        className='hitbox'
        d="M504.565 3H8V328.174M504.565 3V328.174H8M504.565 3L521 19.4348V344.608H24.4348L8 328.174"
        onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} />
    </svg>


  )
}

export default KepCap