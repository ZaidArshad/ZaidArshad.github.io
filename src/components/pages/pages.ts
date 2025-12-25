import * as projectSvgs from '../assets/projects';
import Boatxz from './Boatxz';
import Bounce from './Bounce';
import Decay from './Decay';
import DuckHunt from './DuckHunt';
import Gobblers from './Gobblers';
import Laps from './Laps';
import LevelTool from './LevelTool';
import SupplyTracker from './SupplyTracker';
import WatRe from './WatRe';
import Netpardy from './Netpardy';
import EA from './EA';
import Sony from './Sony';
import Safe from './Safe';

import { BasePage } from '../Page/BasePage';
import { Project } from '../Page/Project';

export interface ProjectGroups {
    mobile: Project[];
    games: Project[];
    tools: Project[];
}

export const mobileProjects: Project[] = [
    {
        name: 'WatRe',
        key: 1,
        Front: projectSvgs.WatReFront,
        Back: projectSvgs.WatReBack,
        link: '/watre',
        Page: WatRe,
        primaryColor: '#3E68FF',
        secondaryColor: '#183AB2',
        github: 'https://github.com/ZaidArshad/WatRe',
        description: 'Web App',
        languages: ['Java', 'C#', 'Python']
    },
    {
        name: 'Duck Hunt',
        key: 4,
        Front: projectSvgs.DuckHuntFront,
        Back: projectSvgs.DuckHuntBack,
        link: '/duck-hunt',
        Page: DuckHunt,
        primaryColor: '#FFC700',
        secondaryColor: '#E19400',
        github: 'https://github.com/ZaidArshad/SOSY-Hacks-Duck-Hunt',
        description: 'Android App',
        languages: ['Kotlin']
    },
    {
        name: 'Laps',
        key: 5,
        Front: projectSvgs.LapsFront,
        Back: projectSvgs.LapsBack,
        link: '/laps',
        Page: Laps,
        primaryColor: '#FE436D',
        secondaryColor: '#B81D40',
        github: 'https://github.com/ZaidArshad/Laps',
        description: 'Android App',
        languages: ['Kotlin']
    },
]

export const gameProjects: Project[] = [
    {
        name: 'Boatxz',
        key: 0,
        Front: projectSvgs.BoatxzFront,
        Back: projectSvgs.BoatxzBack,
        link: '/boatxz',
        Page: Boatxz,
        primaryColor: '#62E160',
        secondaryColor: '#1F9801',
        github: 'https://github.com/ZaidArshad/Boatxz',
        description: '3D Party',
        languages: ['C#']
    },
    {
        name: 'Decay',
        key: 3,
        Front: projectSvgs.DecayFront,
        Back: projectSvgs.DecayBack,
        link: '/decay',
        Page: Decay,
        primaryColor: '#65D1FF',
        secondaryColor: '#0099BA',
        github: 'https://github.com/ZaidArshad/Decay',
        description: 'Puzzle',
        languages: ['C++']
    },
    {
        name: 'Gobblers',
        key: 7,
        Front: projectSvgs.GobblersFront,
        Back: projectSvgs.GobblersBack,
        link: '/gobblers',
        Page: Gobblers,
        primaryColor: '#C474EA',
        secondaryColor: '#B740EF',
        github: 'https://github.com/ZaidArshad/SFU-CS-Fall-Hacks-2021',
        description: '2P Mobile',
        languages: ['Java']
    },
    {
        name: 'Bounce',
        key: 8,
        Front: projectSvgs.BounceFront,
        Back: projectSvgs.BounceBack,
        link: '/bounce',
        Page: Bounce,
        primaryColor: '#FF4343',
        secondaryColor: '#C22626',
        github: 'https://github.com/ZaidArshad/Bounce',
        description: 'Arcade',
        languages: ['Python']
    },
    {
        name: 'Netpardy!',
        key: 9,
        Front: projectSvgs.NetpardyFront,
        Back: projectSvgs.NetpardyBack,
        link: '/netpardy',
        Page: Netpardy,
        primaryColor: '#9069FF',
        secondaryColor: '#3600D0',
        github: 'https://github.com/ZaidArshad/Multiplayer-Jeopardy',
        description: 'Real-time Trivia',
        languages: ['Python']
    },
]

export const toolProjects: Project[] = [
    {
        name: 'Decay Level Tool',
        key: 2,
        Front: projectSvgs.LevelToolFront,
        Back: projectSvgs.LevelToolBack,
        link: '/level-tool',
        Page: LevelTool,
        primaryColor: '#FF419C',
        secondaryColor: '#AF0054',
        github: 'https://github.com/ZaidArshad/Decay-Level-Tool',
        description: 'Level Designer',
        languages: ['C++']
    },
    {
        name: 'Supply Tracker',
        key: 6,
        Front: projectSvgs.SupplyTrackerFront,
        Back: projectSvgs.SupplyTrackerBack,
        link: '/supply-tracker',
        Page: SupplyTracker,
        primaryColor: '#32BB79',
        secondaryColor: '#20955D',
        github: 'https://github.com/ZaidArshad/Web-Consumable-Tracker',
        description: 'Web Client',
        languages: ['Java']
    },
]

export const workExperiences: BasePage[] = [
    {
        name: 'Electronic Arts',
        key: 10,
        Front: projectSvgs.EAFront,
        Back: projectSvgs.EABack,
        link: '/ea',
        Page: EA,
        primaryColor: '#3E68FF',
        secondaryColor: '#183AB2',
    },
    {
        name: 'Sony Pictures Imageworks',
        key: 11,
        Front: projectSvgs.SonyFront,
        Back: projectSvgs.SonyBack,
        link: '/sony',
        Page: Sony,
        primaryColor: '#FF3D3A',
        secondaryColor: '#911311'
    },
    {
        name: 'Safe Software Inc.',
        key: 12,
        Front: projectSvgs.SafeFront,
        Back: projectSvgs.SafeBack,
        link: '/safe',
        Page: Safe,
        primaryColor: '#FF9330',
        secondaryColor: '#AF6018'
    },
]

export const projectGroups: ProjectGroups = {
    mobile: mobileProjects,
    games: gameProjects,
    tools: toolProjects
}

export const personalProjects: Project[] = [...mobileProjects, ...gameProjects, ...toolProjects];
