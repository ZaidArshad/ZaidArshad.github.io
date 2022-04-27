import DiamondCaps from "../DiamondCaps/DiamondCaps";
import BackButton from "../KeyCaps/BackButton";
import PopText from "../PopText/PopText"
import './styles.css'
import * as iconSVGs from '../assets/icons/index';
import { Project } from "../HomePage/projects";

export interface ProjectProps {
    project: Project
}

/**
 * Component for the header of a project's page
 * @param primaryColor Main color of the project
 * @param secondaryColor Secondary color of the project
 * @returns 
 */
const ProjectPage:React.FC<ProjectProps> = (props) => {
  window.scroll(0,0);
    document.documentElement.style.setProperty("--primaryColor", props.project.primaryColor);
    document.documentElement.style.setProperty("--secondaryColor", props.project.secondaryColor);

  return (
    <div className='webpage'>
      <div className='sticky'>
        <div className="project-title">
          <PopText primaryColor={props.project.primaryColor} secondaryColor={props.project.secondaryColor} >
            {props.project.name}
          </PopText>
        </div>
        <BackButton/>
      </div>

      <div className='text-area'>
          {props.children}
      </div>

      <div className='foot'>
      <DiamondCaps Front={iconSVGs.GithubFront} Back={iconSVGs.GithubBack} link={'https://github.com/ZaidArshad'} bgColor={'white'}/>
      </div>
    </div>
  )
}

export default ProjectPage