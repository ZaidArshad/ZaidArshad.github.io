import { useState } from 'react'
import './keycaps.css';

interface Props {
    Logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    DLogo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

const KeyCap:React.FC<Props> = ({Logo, DLogo}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  return (
    <div>
      <div
        style={{background:'#00000063'}}
        className='diamond-hitbox'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >

      </div>

      {isHovered ? <DLogo/> : <Logo/>}
    </div>
  )
}

export default KeyCap