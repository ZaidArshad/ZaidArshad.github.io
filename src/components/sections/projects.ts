import * as projectSvgs from '../assets/projects';
import WatRe from '../assets/projects/WatRe/WatRe';

export interface Projects {
    Front: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    Back: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    Page?: React.FC<any> | undefined;
    link: string;
    primaryColor?: string;
    secondayColor?: string;
  }

export const projects: Projects[] = [
    {
        Front: projectSvgs.BoatxzFront,
        Back: projectSvgs.BoatxzBack,
        link: '/boatxz',
    },
    {
        Front: projectSvgs.WatReFront,
        Back: projectSvgs.WatReBack,
        Page: WatRe,
        link: '/watre',
        primaryColor: '#3E68FF',
        secondayColor: '#183AB2'
    },
    {
        Front: projectSvgs.LevelToolFront,
        Back: projectSvgs.LevelToolBack,
        link: '/level-tool',
    },
    {
        Front: projectSvgs.DecayFront,
        Back: projectSvgs.DecayBack,
        link: '/decay',
    },
    {
        Front: projectSvgs.DuckHuntFront,
        Back: projectSvgs.DuckHuntBack,
        link: '/duck-hunt',
    },
    {
        Front: projectSvgs.LapsFront,
        Back: projectSvgs.LapsBack,
        link: '/laps',
    },
    {
        Front: projectSvgs.SupplyTrackerFront,
        Back: projectSvgs.SupplyTrackerBack,
        link: '/supply-tracker',
    },
    {
        Front: projectSvgs.GobblersFront,
        Back: projectSvgs.GobblersBack,
        link: '/gobblers',
    },
    {
        Front: projectSvgs.BounceFront,
        Back: projectSvgs.BounceBack,
        link: '/bounce',
    },
];

export default projects;
