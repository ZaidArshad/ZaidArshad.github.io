import PopText from "../PopText/PopText"
import './styles.css'

interface Props {
    primaryColor: string;
    secondaryColor: string;
    projectName: string;
}

const ProjectPage:React.FC<Props> = (props) => {
    document.documentElement.style.setProperty("--primaryColor", props.primaryColor);
    document.documentElement.style.setProperty("--secondaryColor", props.secondaryColor);

  return (
    <div className='webpage'>
        <div className='sticky'>
          <PopText primaryColor={props.primaryColor} secondaryColor={props.secondaryColor} >
            {props.projectName}
          </PopText>
        </div>

        <div className='text-area'>
            {props.children}
        </div>
    </div>
  )
}

export default ProjectPage