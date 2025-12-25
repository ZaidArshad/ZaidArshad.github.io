import { PageProps } from './Page';
import { ProjectProps } from './ProjectPage';

export interface BasePage {
    name: string;
    key: number;
    Front: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    Back: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    link: string;
    Page: React.FC<PageProps> | React.FC<ProjectProps>;
    primaryColor: string;
    secondaryColor: string;
}; 