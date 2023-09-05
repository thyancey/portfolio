import styled, { css } from 'styled-components';

import AssetMap from './assets';
import { Route, Routes, useLocation } from 'react-router';
import Content_Slots from './components/content_slots';
import Content_Zebra from './components/content_zebra';
import { Link, Navigate } from 'react-router-dom';
import Content, { ContentDef } from './components/content';
import HomeContent from './components/home-content';

const TRANSITION_SPEED = '.5s';

const ScContainer = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: min-content auto min-content;

  position: absolute;
  inset: 0;

  &.theme-zebra {
    --theme-primary: var(--theme-zebra-primary);
    --theme-secondary: var(--theme-zebra-secondary);
    --theme-bg: var(--theme-zebra-bg);
    --theme-neutral: var(--theme-zebra-neutral);
  }

  &.theme-slots {
    --theme-primary: var(--theme-slots-primary);
    --theme-secondary: var(--theme-slots-secondary);
    --theme-bg: var(--theme-slots-bg);
    --theme-neutral: var(--theme-slots-neutral);
  }

  > * {
    transition: background-color ${TRANSITION_SPEED} ease-in-out, color ${TRANSITION_SPEED} ease-in-out;
  }

  overflow: hidden;
`;

const ScHeader = styled.header`
  background-color: var(--color-black);

  display: flex;

  align-items: center;
  justify-content: space-between;

  padding: 0rem 1rem;

  position: relative;
  z-index: 10;

  h1 {
    margin-top: 1rem;
  }

  h2 {
    font-size: 1.5rem;
    margin: 1rem 2rem;
    display: inline;

    &.active {
      a {
        color: var(--color-grey-light);
        text-decoration: underline;
      }
    }
  }
`;

// SHOULD MATCH IMAGE SIZE, CAN BE LARGER/SMALLER BUT KEEP RATIO THE SAME
const BLOB_WIDTH = '695px';
const BLOB_HEIGHT = '65px';
const BLOB_SPEED = 30;

type ScBlobBorderProps = {
  $blobType: 'header' | 'footer';
};
const ScBlobBorder = styled.div<ScBlobBorderProps>`
  position: absolute;
  left: 0;
  width: calc(${BLOB_WIDTH} * 3);
  height: ${BLOB_HEIGHT};
  z-index: 1;

  background-size: contain;

  @keyframes blob-wrap-left {
    0% {
      left: 0px;
    }
    100% {
      left: -${BLOB_WIDTH};
    }
  }

  @keyframes blob-wrap-right {
    0% {
      left: -${BLOB_WIDTH};
    }
    100% {
      left: 0px;
    }
  }

  background-image: url(${AssetMap.BlobDivider});
  animation: blob-wrap-left ${BLOB_SPEED / 2}s linear infinite;

  ${(p) =>
    p.$blobType === 'header' &&
    css`
      top: calc(100% - 1rem);

      -webkit-transform: scaleY(-1);
      -moz-transform: scaleY(-1);
      -ms-transform: scaleY(-1);
      -o-transform: scaleY(-1);
      transform: scaleY(-1);

      animation: blob-wrap-left ${BLOB_SPEED}s linear infinite;
    `}

  ${(p) =>
    p.$blobType === 'footer' &&
    css`
      bottom: calc(100% - 1rem);
    `}
`;

const ScFooter = styled.footer`
  background-color: var(--color-black);
  padding: 0 1rem;
  min-height: 3.625rem;

  position: relative;
`;

const ScNavBar = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  > a {
    color: var(--theme-primary);
    text-decoration: none;
    margin: 0.5rem 2rem;
    /* width: 1rem; */
    /* height: 1rem; */
    font-size: 2rem;
    font-weight: bold;
  }
`;

const ScNavBubble = styled.div`
  margin: 0.5rem;
  border-radius: 100%;
  border: 0.2rem solid var(--theme-primary);
  background-color: var(--theme-primary);
  width: 1rem;
  height: 1rem;

  transition: width 0.3s, height 0.3s, background-color 0.3s;

  &:hover {
    background-color: var(--theme-bg);
    width: 1.5rem;
    height: 1.5rem;
  }

  &.active {
    background-color: var(--theme-bg);
    width: 2.5rem;
    height: 2.5rem;

    &:hover {
      background-color: var(--theme-bg);
      width: 2.5rem;
      height: 2.5rem;
    }
  }

  > a {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const pages: ContentDef[] = [
  {
    route: '/projects/zebra',
    name: 'Zebra Tables',
    theme: 'zebra',
    bodyComponent: <Content_Zebra />,
    images: [AssetMap.Zebra1, AssetMap.Zebra2, AssetMap.Zebra3],
    gallery: [
      {
        image: AssetMap.Zebra1,
        caption: `Trying to fit the isometric grid in a responsive space was challening. Although I still don't have it quite right, allowing the user to zoom and pan the space seemed like the right answer.`
      },
      {
        image: AssetMap.Zebra2,
        caption: 'Since some may have not interacted with a puzzle like this before, it was important to make a tutorial flow. '
      },
      {
        image: AssetMap.Zebra3,
        caption: `Using LocalStorage, the player can save and continue their progress. As the levels and their order changes, it's important to keep track of which particular puzzles users have solved, and whether or not they have been updated. If the puzzle hasn't changed, why should someone have to replay it?`
      },
    ],
    url: 'https://thyancey.github.io/tly-truth-tables/',
    repoUrl: 'https://github.com/thyancey/tly-truth-tables',
  },
  {
    route: '/projects/slots',
    name: '!SLOTS!',
    theme: 'slots',
    bodyComponent: <Content_Slots />,
    images: [AssetMap.Slots1, AssetMap.Slots2, AssetMap.Slots3],
    gallery: [
      {
        image: AssetMap.Slots1,
        caption: 'The basic gameplay loop involves making upgrades, rolling the dice, and conquering foes'
      },
      {
        image: AssetMap.Slots2,
        caption: 'Between rounds, the slot machine can be modified to spin the odds in your favor!'
      },
    ],
    url: 'https://thyancey.github.io/slot-machine/',
    repoUrl: 'https://github.com/thyancey/tly-truth-tables',
  },
  {
    route: '/projects/browserpet',
    name: 'BrowserPet',
    theme: 'zebra',
    bodyComponent: <Content_Slots />,
    images: [AssetMap.Slots1, AssetMap.Slots2, AssetMap.Slots3],
    gallery: [
      {
        image: AssetMap.Zebra1,
        caption: 'blah blah blah'
      },
      {
        image: AssetMap.Zebra2,
        caption: 'blah blah blah'
      },
      {
        image: AssetMap.Zebra3,
        caption: 'blah blah blah'
      },
      {
        image: AssetMap.Zebra3,
        caption: 'blah blah blah'
      },
      {
        image: AssetMap.Zebra3,
        caption: 'blah blah blah'
      }
    ],
    url: 'https://thyancey.github.io/slot-machine/',
    repoUrl: 'https://github.com/thyancey/tly-truth-tables',
  },
  {
    route: '/projects/alteredchromatic',
    name: 'Altered Chromatic',
    theme: 'zebra',
    bodyComponent: <Content_Slots />,
    images: [AssetMap.Slots1, AssetMap.Slots2, AssetMap.Slots3],
    gallery: [
      {
        image: AssetMap.Zebra1,
        caption: 'blah blah blah'
      },
      {
        image: AssetMap.Zebra2,
        caption: 'blah blah blah'
      },
      {
        image: AssetMap.Zebra3,
        caption: 'blah blah blah'
      },
      {
        image: AssetMap.Zebra3,
        caption: 'blah blah blah'
      },
      {
        image: AssetMap.Zebra3,
        caption: 'blah blah blah'
      }
    ],
    url: 'https://thyancey.github.io/slot-machine/',
    repoUrl: 'https://github.com/thyancey/tly-truth-tables',
  },
  {
    route: '/projects/fretref',
    name: 'FretRef',
    theme: 'zebra',
    bodyComponent: <Content_Slots />,
    images: [AssetMap.Slots1, AssetMap.Slots2, AssetMap.Slots3],
    gallery: [
      {
        image: AssetMap.Zebra1,
        caption: 'blah blah blah'
      },
      {
        image: AssetMap.Zebra2,
        caption: 'blah blah blah'
      },
      {
        image: AssetMap.Zebra3,
        caption: 'blah blah blah'
      },
      {
        image: AssetMap.Zebra3,
        caption: 'blah blah blah'
      },
      {
        image: AssetMap.Zebra3,
        caption: 'blah blah blah'
      }
    ],
    url: 'https://thyancey.github.io/slot-machine/',
    repoUrl: 'https://github.com/thyancey/tly-truth-tables',
  },
  {
    route: '/projects/dropship',
    name: 'Dropship!',
    theme: 'zebra',
    bodyComponent: <Content_Slots />,
    images: [AssetMap.Slots1, AssetMap.Slots2, AssetMap.Slots3],
    gallery: [
      {
        image: AssetMap.Zebra1,
        caption: 'blah blah blah'
      },
      {
        image: AssetMap.Zebra2,
        caption: 'blah blah blah'
      },
      {
        image: AssetMap.Zebra3,
        caption: 'blah blah blah'
      },
      {
        image: AssetMap.Zebra3,
        caption: 'blah blah blah'
      },
      {
        image: AssetMap.Zebra3,
        caption: 'blah blah blah'
      }
    ],
    url: 'https://thyancey.github.io/slot-machine/',
    repoUrl: 'https://github.com/thyancey/tly-truth-tables',
  },
  {
    route: '/projects/raccoontrapper',
    name: 'Raccoon Trapper',
    theme: 'zebra',
    bodyComponent: <Content_Slots />,
    images: [AssetMap.Slots1, AssetMap.Slots2, AssetMap.Slots3],
    gallery: [
      {
        image: AssetMap.Zebra1,
        caption: 'blah blah blah'
      },
      {
        image: AssetMap.Zebra2,
        caption: 'blah blah blah'
      },
      {
        image: AssetMap.Zebra3,
        caption: 'blah blah blah'
      },
      {
        image: AssetMap.Zebra3,
        caption: 'blah blah blah'
      },
      {
        image: AssetMap.Zebra3,
        caption: 'blah blah blah'
      }
    ],
    url: 'https://thyancey.github.io/slot-machine/',
    repoUrl: 'https://github.com/thyancey/tly-truth-tables',
  },
];

function Layout() {
  const location = useLocation();

  // TODO: tidy all this logic up
  const isProject = location.pathname.indexOf('/projects') > -1;
  const isBlog = location.pathname.indexOf('/blog') > -1;

  const pageIdx = pages.findIndex((p) => location.pathname.indexOf(p.route) > -1);
  let prevIdx = -1;
  let nextIdx = -1;
  let imageIdx = -1;

  let theme = 'none';
  if (pageIdx > -1) {
    prevIdx = pageIdx <= 0 ? pages.length - 1 : pageIdx - 1;
    nextIdx = pageIdx >= pages.length - 1 ? 0 : pageIdx + 1;
    theme = pages[pageIdx].theme || 'none';
    const imagePath = location.pathname.split(`${pages[pageIdx].route}/`)[1];
    imageIdx = imagePath !== undefined ? +imagePath : -1;
  }

  return (
    <ScContainer id='main' className={`theme-${theme}`}>
      <ScHeader>
        <h1>
          <Link to={'/'}>{'thomasyancey.com'}</Link>
        </h1>
        <div>
          <h2 className={isBlog ? 'active' : ''}>
            <Link to={'/blog'}>{'blog'}</Link>
          </h2>
          <h2 className={isProject ? 'active' : ''}>
            <Link to={'/projects'}>{'projects'}</Link>
          </h2>
        </div>
        <ScBlobBorder $blobType='header' />
      </ScHeader>
      <>
        <Routes>
          <Route path='/' element={<HomeContent />} />
          <Route path='/blog' element={<HomeContent />} />
          {pages.map((p) => (
            // "/*" allows for images after project path
            <Route key={p.route} path={`${p.route}/*`} element={<Content contentDef={p} imageIdx={imageIdx} />} />
          ))}
          <Route path='/projects/' element={<Navigate to={`${pages[0].route}`} replace />} />
        </Routes>
      </>
      <ScFooter>
        <ScBlobBorder $blobType='footer' />
        {pageIdx > -1 && (
          <>
            <ScNavBar>
              <Link key='prev' to={pages[prevIdx].route}>
                {'<'}
              </Link>
              {pages.map((p, pIdx) => (
                <ScNavBubble key={p.route} className={pIdx === pageIdx ? 'active' : ''}>
                  <Link to={p.route} />
                </ScNavBubble>
              ))}
              <Link key='next' to={pages[nextIdx].route}>
                {'>'}
              </Link>
            </ScNavBar>
          </>
        )}
      </ScFooter>
    </ScContainer>
  );
}

export default Layout;
