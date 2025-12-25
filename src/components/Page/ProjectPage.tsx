import DiamondCaps from "../DiamondCaps/DiamondCaps";
import './styles.css'
import * as iconSVGs from '../assets/icons/index';
import Page from "./Page";
import { Project } from "./Project";

export interface ProjectProps {
  project?: Project
  gitBG?: string
}

/**
 * Component for the header of a project's page
 * @param project Main color of the project
 * @param gitBG Background of github button
 * @returns 
 */
const ProjectPage: React.FC<ProjectProps> = (props) => {
  window.scroll(0, 0);
  document.documentElement.style.setProperty("--primaryColor", props.project!!.primaryColor);
  document.documentElement.style.setProperty("--secondaryColor", props.project!!.secondaryColor);

  return (
    <Page page={props.project}>
      {props.children}
      <div className='foot section'>
        <DiamondCaps Front={iconSVGs.GithubFront} Back={iconSVGs.GithubBack} link={props.project!!.github} bgColor={props.gitBG} />
      </div>
    </Page>
  )
}

export default ProjectPage