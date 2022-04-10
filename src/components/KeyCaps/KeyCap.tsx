import { Component } from "react"

interface Props {
    Logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

const KeyCap:React.FC<Props> = ({Logo}) => {
  return (
    <Logo/>
  )
}

export default KeyCap