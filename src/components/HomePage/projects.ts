import * as projectSvgs from '../assets/projects';
import Boatxz from '../pages/Boatxz';
import Bounce from '../pages/Bounce';
import Decay from '../pages/Decay';
import DuckHunt from '../pages/DuckHunt';
import Gobblers from '../pages/Gobblers';
import Laps from '../pages/Laps';
import LevelTool from '../pages/LevelTool';
import SupplyTracker from '../pages/SupplyTracker';
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
        Page: Boatxz,
        primaryColor: '#62E160',
        secondayColor: '#1F9801'
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
        Page: Laps,
        primaryColor: '#FE436D',
        secondayColor: '#B81D40'
    },
    {
        key: 6,
        Front: projectSvgs.SupplyTrackerFront,
        Back: projectSvgs.SupplyTrackerBack,
        link: '/supply-tracker',
        Page: SupplyTracker,
        primaryColor: '#32BB79',
        secondayColor: '#20955D'
    },
    {
        key: 7,
        Front: projectSvgs.GobblersFront,
        Back: projectSvgs.GobblersBack,
        link: '/gobblers',
        Page: Gobblers,
        primaryColor: '#C474EA',
        secondayColor: '#B740EF'
    },
    {
        key: 8,
        Front: projectSvgs.BounceFront,
        Back: projectSvgs.BounceBack,
        link: '/bounce',
        Page: Bounce,
        primaryColor: '#FF4343',
        secondayColor: '#C22626'
    },
];

export default projects;
