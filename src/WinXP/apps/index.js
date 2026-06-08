import InternetExplorer from './InternetExplorer';
import Minesweeper from './Minesweeper';
import ErrorBox from './ErrorBox';
import Notepad from './Notepad';
import Paint from './Paint';
import AboutMe from './AboutMe';
import Resume from './Resume';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import iePaper from 'assets/windowsIcons/ie-paper.png';
import ie from 'assets/windowsIcons/ie.png';
import mine from 'assets/minesweeper/mine-icon.png';
import error from 'assets/windowsIcons/897(16x16).png';
import notepad from 'assets/windowsIcons/327(16x16).png';
import paintLarge from 'assets/windowsIcons/680(32x32).png';
import paint from 'assets/windowsIcons/680(16x16).png';
import messenger from 'assets/windowsIcons/msn.png';
import resume from 'assets/windowsIcons/308(16x16).png';
import resumeLarge from 'assets/windowsIcons/308(32x32).png';
import skills from 'assets/windowsIcons/374(16x16).png';
import projects from 'assets/windowsIcons/318(16x16).png';
import projectsLarge from 'assets/windowsIcons/318(32x32).png';
import contact from 'assets/windowsIcons/887(16x16).png';
import contactLarge from 'assets/windowsIcons/887(32x32).png';

const gen = () => {
  let id = -1;
  return () => {
    id += 1;
    return id;
  };
};
const genId = gen();
const genIndex = gen();

// Apps that open automatically when the desktop loads. "About Me" is the
// welcoming landing window.
export const defaultAppState = [
  {
    component: AboutMe,
    header: {
      title: 'About Me',
      icon: messenger,
    },
    defaultSize: {
      width: 720,
      height: 520,
    },
    defaultOffset: {
      x: 120,
      y: 30,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    id: genId(),
    zIndex: genIndex(),
  },
];

export const defaultIconState = [
  {
    id: 0,
    icon: messenger,
    title: 'About Me',
    component: AboutMe,
    isFocus: false,
  },
  {
    id: 1,
    icon: resumeLarge,
    title: 'My Resume',
    component: Resume,
    isFocus: false,
  },
  {
    id: 2,
    icon: skills,
    title: 'Skills',
    component: Skills,
    isFocus: false,
  },
  {
    id: 3,
    icon: projectsLarge,
    title: 'Projects',
    component: Projects,
    isFocus: false,
  },
  {
    id: 4,
    icon: contactLarge,
    title: 'Contact',
    component: Contact,
    isFocus: false,
  },
  {
    id: 5,
    icon: ie,
    title: 'Internet Explorer',
    component: InternetExplorer,
    isFocus: false,
  },
  {
    id: 6,
    icon: mine,
    title: 'Minesweeper',
    component: Minesweeper,
    isFocus: false,
  },
  {
    id: 7,
    icon: paintLarge,
    title: 'Paint',
    component: Paint,
    isFocus: false,
  },
];

export const appSettings = {
  'About Me': {
    header: {
      icon: messenger,
      title: 'About Me',
    },
    component: AboutMe,
    defaultSize: {
      width: 720,
      height: 520,
    },
    defaultOffset: {
      x: 120,
      y: 30,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: false,
  },
  'My Resume': {
    header: {
      icon: resume,
      title: 'My Resume - WordPad',
    },
    component: Resume,
    defaultSize: {
      width: 700,
      height: 540,
    },
    defaultOffset: {
      x: 150,
      y: 40,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: false,
  },
  Skills: {
    header: {
      icon: skills,
      title: 'Skills',
    },
    component: Skills,
    defaultSize: {
      width: 560,
      height: 480,
    },
    defaultOffset: {
      x: 180,
      y: 50,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: false,
  },
  Projects: {
    header: {
      icon: projects,
      title: 'My Projects',
    },
    component: Projects,
    defaultSize: {
      width: 660,
      height: 480,
    },
    defaultOffset: {
      x: 200,
      y: 60,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: false,
  },
  Contact: {
    header: {
      icon: contact,
      title: 'Contact',
      buttons: ['close'],
    },
    component: Contact,
    defaultSize: {
      width: 360,
      height: 260,
    },
    defaultOffset: {
      x: 240,
      y: 90,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    multiInstance: false,
  },
  'Internet Explorer': {
    header: {
      icon: iePaper,
      title: 'InternetExplorer',
    },
    component: InternetExplorer,
    defaultSize: {
      width: 700,
      height: 500,
    },
    defaultOffset: {
      x: 140,
      y: 30,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true,
  },
  Minesweeper: {
    header: {
      icon: mine,
      title: 'Minesweeper',
    },
    component: Minesweeper,
    defaultSize: {
      width: 0,
      height: 0,
    },
    defaultOffset: {
      x: 190,
      y: 180,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    multiInstance: true,
  },
  Error: {
    header: {
      icon: error,
      title: 'C:\\',
      buttons: ['close'],
      noFooterWindow: true,
    },
    component: ErrorBox,
    defaultSize: {
      width: 380,
      height: 0,
    },
    defaultOffset: {
      x: window.innerWidth / 2 - 190,
      y: window.innerHeight / 2 - 60,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    multiInstance: true,
  },
  Notepad: {
    header: {
      icon: notepad,
      title: 'Untitled - Notepad',
    },
    component: Notepad,
    defaultSize: {
      width: 660,
      height: 500,
    },
    defaultOffset: {
      x: 270,
      y: 60,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true,
  },
  Paint: {
    header: {
      icon: paint,
      title: 'Untitled - Paint',
    },
    component: Paint,
    defaultSize: {
      width: 660,
      height: 500,
    },
    defaultOffset: {
      x: 280,
      y: 70,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true,
  },
};

export {
  InternetExplorer,
  Minesweeper,
  ErrorBox,
  Notepad,
  Paint,
  AboutMe,
  Resume,
  Skills,
  Projects,
  Contact,
};
