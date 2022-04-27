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
import { ProjectProps } from '../ProjectPage/ProjectPage';

export interface Project {
    name: string;
    key: number;
    Front: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    Back: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    link: string;
    Page: React.FC<ProjectProps>;
    primaryColor: string;
    secondaryColor: string;
  }

export const projects: Project[] = [
    {
        name: 'Boatxz',
        key: 0,
        Front: projectSvgs.BoatxzFront,
        Back: projectSvgs.BoatxzBack,
        link: '/boatxz',
        Page: Boatxz,
        primaryColor: '#62E160',
        secondaryColor: '#1F9801'
    },
    {
        name: 'WatRe',
        key: 1,
        Front: projectSvgs.WatReFront,
        Back: projectSvgs.WatReBack,
        link: '/watre',
        Page: WatRe,
        primaryColor: '#3E68FF',
        secondaryColor: '#183AB2'
    },
    {
        name: 'Decay Level Tool',
        key: 2,
        Front: projectSvgs.LevelToolFront,
        Back: projectSvgs.LevelToolBack,
        link: '/level-tool',
        Page: LevelTool,
        primaryColor: '#FF419C',
        secondaryColor: '#AF0054'
    },
    {
        name: 'Decay',
        key: 3,
        Front: projectSvgs.DecayFront,
        Back: projectSvgs.DecayBack,
        link: '/decay',
        Page: Decay,
        primaryColor: '#65D1FF',
        secondaryColor: '#0099BA'
    },
    {
        name: 'Duck Hunt',
        key: 4,
        Front: projectSvgs.DuckHuntFront,
        Back: projectSvgs.DuckHuntBack,
        link: '/duck-hunt',
        Page: DuckHunt,
        primaryColor: '#FFC700',
        secondaryColor: '#E19400'
    },
    {
        name: 'Laps',
        key: 5,
        Front: projectSvgs.LapsFront,
        Back: projectSvgs.LapsBack,
        link: '/laps',
        Page: Laps,
        primaryColor: '#FE436D',
        secondaryColor: '#B81D40'
    },
    {
        name: 'Supply Tracker',
        key: 6,
        Front: projectSvgs.SupplyTrackerFront,
        Back: projectSvgs.SupplyTrackerBack,
        link: '/supply-tracker',
        Page: SupplyTracker,
        primaryColor: '#32BB79',
        secondaryColor: '#20955D'
    },
    {
        name: 'Gobblers',
        key: 7,
        Front: projectSvgs.GobblersFront,
        Back: projectSvgs.GobblersBack,
        link: '/gobblers',
        Page: Gobblers,
        primaryColor: '#C474EA',
        secondaryColor: '#B740EF'
    },
    {
        name: 'Bounce',
        key: 8,
        Front: projectSvgs.BounceFront,
        Back: projectSvgs.BounceBack,
        link: '/bounce',
        Page: Bounce,
        primaryColor: '#FF4343',
        secondaryColor: '#C22626'
    },
];

export default projects;
