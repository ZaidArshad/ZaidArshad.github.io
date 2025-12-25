import { BasePage } from "./BasePage";
import { ProjectProps } from "./ProjectPage";

export interface Project extends BasePage {
    github: string;
    description: string;
    languages: string[];
};
