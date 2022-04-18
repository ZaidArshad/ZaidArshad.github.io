import * as projectSvgs from '../assets/projects';
import Decay from '../pages/Decay';
import DuckHunt from '../pages/DuckHunt';
import LevelTool from '../pages/LevelTool';
import WatRe from '../pages/WatRe';

export interface Projects {
    key: number;
    Front: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    Back: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    link: string;
    Page?: React.FC<any> | undefined;
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
        link: '/watre',
        Page: WatRe,
        primaryColor: '#3E68FF',
        secondayColor: '#183AB2'
    },
    {
        key: 2,
        Front: projectSvgs.LevelToolFront,
        Back: projectSvgs.LevelToolBack,
        link: '/level-tool',
        Page: LevelTool,
        primaryColor: '#FF419C',
        secondayColor: '#AF0054'
    },
    {
        key: 3,
        Front: projectSvgs.DecayFront,
        Back: projectSvgs.DecayBack,
        link: '/decay',
        Page: Decay,
        primaryColor: '#65D1FF',
        secondayColor: '#0099BA'
    },
    {
        key: 4,
        Front: projectSvgs.DuckHuntFront,
        Back: projectSvgs.DuckHuntBack,
        link: '/duck-hunt',
        Page: DuckHunt,
        primaryColor: '#FFC700',
        secondayColor: '#E19400'
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
