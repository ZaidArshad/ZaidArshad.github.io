import BackButton from "../KeyCaps/BackButton";
import PopText from "../PopText/PopText"
import './styles.css'
import { BasePage } from "./BasePage";

export interface PageProps {
    page?: BasePage
}

/**
 * Component for the header of a project's page
 * @param project Main color of the project
 * @returns 
 */
const Page: React.FC<PageProps> = (props) => {
    window.scroll(0, 0);
    document.documentElement.style.setProperty("--primaryColor", props.page!!.primaryColor);
    document.documentElement.style.setProperty("--secondaryColor", props.page!!.secondaryColor);

    return (
        <div className='webpage'>
            <div className='sticky'>
                <div className="project-title">
                    <PopText primaryColor={props.page?.primaryColor} secondaryColor={props.page?.secondaryColor} >
                        {props.page?.name}
                    </PopText>
                </div>
                <BackButton />
            </div>
            <div className='text-area'>
                {props.children}
            </div>
        </div>
    )
}

export default Page