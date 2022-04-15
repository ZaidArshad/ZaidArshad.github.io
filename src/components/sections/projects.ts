import * as projectSvgs from '../assets/projects';
import WatRe from '../assets/projects/WatRe/WatRe';

export interface Projects {
    key: number;
    Front: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    Back: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    Page?: React.FC<any> | undefined;
    link: string;
    primaryColor?: string;
    secondayColor?: string;
  }

export const projects: Projects[] = [
    {
        key: 0,
        Front: projectSvgs.BoatxzFront,
        Back: projectSvgs.BoatxzBack,
        link: '/boatxz',
    },
    {
        key: 1,
        Front: projectSvgs.WatReFront,
        Back: projectSvgs.WatReBack,
        Page: WatRe,
        link: '/watre',
        primaryColor: '#3E68FF',
        secondayColor: '#183AB2'
    },
    {
        key: 2,
        Front: projectSvgs.LevelToolFront,
        Back: projectSvgs.LevelToolBack,
        link: '/level-tool',
    },
    {
        key: 3,
        Front: projectSvgs.DecayFront,
        Back: projectSvgs.DecayBack,
        link: '/decay',
    },
    {
        key: 4,
        Front: projectSvgs.DuckHuntFront,
        Back: projectSvgs.DuckHuntBack,
        link: '/duck-hunt',
    },
    {
        key: 5,
        Front: projectSvgs.LapsFront,
        Back: projectSvgs.LapsBack,
        link: '/laps',
    },
    {
        key: 6,
        Front: projectSvgs.SupplyTrackerFront,
        Back: projectSvgs.SupplyTrackerBack,
        link: '/supply-tracker',
    },
    {
        key: 7,
        Front: projectSvgs.GobblersFront,
        Back: projectSvgs.GobblersBack,
        link: '/gobblers',
    },
    {
        key: 8,
        Front: projectSvgs.BounceFront,
        Back: projectSvgs.BounceBack,
        link: '/bounce',
    },
];

export default projects;
