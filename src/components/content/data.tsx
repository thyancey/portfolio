import Content_Slots from './content_slots';
import Content_Zebra from './content_zebra';
import Content_Dropship from './content_dropship';

export type GalleryDef = {
  image: string;
  caption?: string;
};

export type ContentDef = {
  route: string;
  name: string;
  theme?: string;
  gallery: GalleryDef[];
  url?: string;
  repoUrl?: string;
  bodyComponent: React.ReactNode;
};

export const Projects: ContentDef[] = [
  {
    route: '/projects/zebra',
    name: 'Zebra Tables',
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
    theme: 'slots',
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
    theme: 'zebra',
    bodyComponent: <Content_Slots />,
    url: 'https://thyancey.github.io/slot-machine/',
    repoUrl: 'https://github.com/thyancey/tly-truth-tables',
    gallery: [],
  },
  {
    route: '/projects/alteredchromatic',
    name: 'Altered Chromatic',
    theme: 'zebra',
    bodyComponent: <Content_Slots />,
    url: 'https://thyancey.github.io/slot-machine/',
    repoUrl: 'https://github.com/thyancey/tly-truth-tables',
    gallery: [],
  },
  {
    route: '/projects/fretref',
    name: 'FretRef',
    theme: 'zebra',
    bodyComponent: <Content_Slots />,
    url: 'https://thyancey.github.io/slot-machine/',
    repoUrl: 'https://github.com/thyancey/tly-truth-tables',
    gallery: [],
  },
  {
    route: '/projects/dropship',
    name: 'Dropship!',
    theme: 'zebra',
    bodyComponent: <Content_Dropship />,
    url: 'https://thyancey.github.io/slot-machine/',
    repoUrl: 'https://github.com/thyancey/tly-truth-tables',
    gallery: [],
  },
  {
    route: '/projects/raccoontrapper',
    name: 'Raccoon Trapper',
    theme: 'zebra',
    bodyComponent: <Content_Slots />,
    url: 'https://thyancey.github.io/slot-machine/',
    repoUrl: 'https://github.com/thyancey/tly-truth-tables',
    gallery: [],
  },
];