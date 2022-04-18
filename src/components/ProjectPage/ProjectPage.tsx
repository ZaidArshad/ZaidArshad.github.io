import BackButton from "../KeyCaps/BackButton";
import PopText from "../PopText/PopText"
import './styles.css'

interface ProjectPageProps {
    primaryColor: string;
    secondaryColor: string;
    projectName: string;
}

export interface ProjectProps {
  primaryColor: string,
  secondaryColor: string,
}

const ProjectPage:React.FC<ProjectPageProps> = (props) => {
  window.scroll(0,0);
    document.documentElement.style.setProperty("--primaryColor", props.primaryColor);
    document.documentElement.style.setProperty("--secondaryColor", props.secondaryColor);

  return (
    <div className='webpage'>
      <div className='sticky'>
        <div className="project-title">
          <PopText primaryColor={props.primaryColor} secondaryColor={props.secondaryColor} >
            {props.projectName}
          </PopText>
        </div>
        <BackButton/>
      </div>

      <div className='text-area'>
          {props.children}
      </div>
    </div>
  )
}

export default ProjectPage