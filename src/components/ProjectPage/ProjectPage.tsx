import DiamondCaps from "../DiamondCaps/DiamondCaps";
import BackButton from "../KeyCaps/BackButton";
import PopText from "../PopText/PopText"
import './styles.css'
import * as iconSVGs from '../assets/icons/index';
import { Project } from "../HomePage/projects";

export interface ProjectProps {
    project: Project
    gitBG?: string
}

/**
 * Component for the header of a project's page
 * @param project Main color of the project
 * @param gitBG Background of github button
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
          <div className='foot section'>
            <DiamondCaps Front={iconSVGs.GithubFront} Back={iconSVGs.GithubBack} link={props.project.github} bgColor={props.gitBG}/>
          </div>
      </div>
    </div>
  )
}

export default ProjectPage