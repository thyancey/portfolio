import Content_Slots, { ContentTitle as ContentTitle_Slots } from './content_slots';
import Content_Zebra from './content_zebra';
import Content_Dropship from './content_dropship';
import Content_AlteredChromatic from './content_alteredchromatic';
import Content_FretRef from './content_fretref';
import Content_BrowserPet from './content_browserpet';
import Content_RaccoonTrapper from './content_raccoontrapper';

export type GalleryDef = {
  image: string;
  caption?: string;
};

export type ContentDef = {
  route: string;
  name: string;
  description?: string;
  theme?: string;
  gallery: GalleryDef[];
  url?: string;
  repoUrl?: string;
  bodyComponent: React.ReactNode;
  titleComponent?: React.ReactNode;
};

export const Projects: ContentDef[] = [
  {
    route: '/projects/zebra',
    name: 'Zebra Tables',
    description: 'Solve puzzles using a combination of boring tables and deductive reasoning!',
    theme: 'zebra',
    bodyComponent: <Content_Zebra />,
    url: 'https://thyancey.github.io/tly-truth-tables/',
    repoUrl: 'https://github.com/thyancey/tly-truth-tables',
    gallery: [
      {
        image: 'zebra-1.png',
        caption: `Trying to fit the isometric grid in a responsive space was challening. Although I still don't have it quite right, allowing the user to zoom and pan the space seemed like the right answer.`,
      },
      {
        image: 'zebra-2.png',
        caption:
          'Since some may have not interacted with a puzzle like this before, it was important to make a tutorial flow. ',
      },
      {
        image: 'zebra-3.png',
        caption: `Using LocalStorage, the player can save and continue their progress. As the levels and their order changes, it's important to keep track of which particular puzzles users have solved, and whether or not they have been updated. If the puzzle hasn't changed, why should someone have to replay it?`,
      },
    ],
  },
  {
    route: '/projects/slots',
    name: '!SLOTS!SLOTS!SLOTS!',
    description: 'A roguelike slot machine, where you bend the odds in your favor to earn cash and battle enemies',
    theme: 'slots',
    titleComponent: <ContentTitle_Slots />,
    bodyComponent: <Content_Slots />,
    url: 'https://thyancey.github.io/slot-machine/',
    repoUrl: 'https://github.com/thyancey/tly-truth-tables',
    gallery: [
      {
        image: 'slots-1.png',
        caption: 'The basic gameplay loop involves making upgrades, rolling the dice, and conquering foes',
      },
      {
        image: 'slots-2.png',
        caption: 'Between rounds, the slot machine can be modified to spin the odds in your favor!',
      },
    ],
  },
  {
    route: '/projects/browserpet',
    name: 'BrowserPet',
    description: 'Keep some dumb animals alive in a chrome extension',
    theme: 'browserpet',
    bodyComponent: <Content_BrowserPet />,
    url: 'https://thyancey.github.io/tly-browserpet/',
    repoUrl: 'https://github.com/thyancey/tly-browserpet',
    gallery: [],
  },
  {
    route: '/projects/alteredchromatic',
    name: 'Altered Chromatic',
    description: 'What if music was simpler, and a piano had a black key for every white key?',
    theme: 'alteredchromatic',
    bodyComponent: <Content_AlteredChromatic />,
    url: 'http://alteredchromatic.com/',
    repoUrl: 'https://github.com/thyancey/altered-chromatic',
    gallery: [],
  },
  {
    route: '/projects/fretref',
    name: 'FretRef',
    description: 'An app that helps you play tasty licks without all the hard work',
    theme: 'fretref',
    bodyComponent: <Content_FretRef />,
    url: 'http://fretref.com/',
    repoUrl: 'https://github.com/thyancey/tly-guitarapp',
    gallery: [],
  },
  {
    route: '/projects/dropship',
    name: 'Dropship!',
    description: 'A roguelike shooter build in GameMaker studio',
    theme: 'dropship',
    bodyComponent: <Content_Dropship />,
    url: 'https://thyancey.github.io/tly-dropship/',
    repoUrl: '',
    gallery: [],
  },
  {
    route: '/projects/raccoontrapper',
    name: 'Raccoon Trapper',
    description: 'A twist on the classic game, built in PhaserJS',
    theme: 'raccoontrapper',
    bodyComponent: <Content_RaccoonTrapper />,
    url: 'https://thyancey.github.io/tly-raccoon-trapper/',
    repoUrl: 'https://github.com/thyancey/tly-raccoon-trapper',
    gallery: [],
  },
];