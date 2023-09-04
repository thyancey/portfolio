import styled, { css } from 'styled-components';

import AssetMap from './assets';
import { Route, Routes, useLocation } from 'react-router';
import Content_Slots from './components/content_slots';
import Content_Zebra from './components/content_zebra';
import { Link } from 'react-router-dom';
import Content, { ContentDef } from './components/content';

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
    --theme-bg-transparent: var(--theme-zebra-bg-transparent);
    --theme-neutral: var(--theme-zebra-neutral);
  }

  &.theme-slots {
    --theme-primary: var(--theme-slots-primary);
    --theme-secondary: var(--theme-slots-secondary);
    --theme-bg: var(--theme-slots-bg);
    --theme-bg-transparent: var(--theme-slots-bg-transparent);
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

  h1{
    margin-top: 1rem;
  }
`;

// SHOULD MATCH IMAGE SIZE, CAN BE LARGER/SMALLER BUT KEEP RATIO THE SAME
const BLOB_WIDTH = '695px';
const BLOB_HEIGHT = '65px';
const BLOB_SPEED = '20s';

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
  animation: blob-wrap-right ${BLOB_SPEED} linear infinite;

  ${(p) =>
    p.$blobType === 'header' &&
    css`
      top: calc(100% - 1rem);

      -webkit-transform: scaleY(-1);
      -moz-transform: scaleY(-1);
      -ms-transform: scaleY(-1);
      -o-transform: scaleY(-1);
      transform: scaleY(-1);

      animation: blob-wrap-left ${BLOB_SPEED} linear infinite;
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

  position: relative;

  display: flex;
  align-items: center;
`;

const ScNavBar = styled.div`
  flex: 1;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  >a {
    color: var(--theme-primary);
    text-decoration: none;
    margin: .5rem 2rem;
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
const ScLaunchBtn = styled.div``;

const ScButton = styled.a`
  display: block;
  margin: 1rem;

  cursor: pointer;
  background: none;
  border: 0.2rem solid var(--theme-primary);
  background-color: var(--theme-bg);
  color: var(--theme-primary);
  text-decoration: none;

  border-radius: 0.5rem;

  padding: 1rem;

  &:hover {
    background-color: var(--theme-primary);
  }
`;

const pages: ContentDef[] = [
  {
    route: 'zebra',
    name: 'Zebra Tables',
    bodyComponent: <Content_Zebra />,
    images: [
      AssetMap.Zebra1,
      AssetMap.Zebra2,
      AssetMap.Zebra3,
      AssetMap.Zebra3,
    ],
    url: 'https://thyancey.github.io/tly-truth-tables/',
  },
  {
    route: 'slots',
    name: '!SLOTS!',
    bodyComponent: <Content_Slots />,
    images: [
      AssetMap.Slots1,
      AssetMap.Slots2,
      AssetMap.Slots3,
    ],
    url: 'https://thyancey.github.io/slot-machine/',
  },
  {
    route: 'browserpet',
    name: 'BrowserPet',
    bodyComponent: <Content_Slots />,
    images: [
      AssetMap.Slots1,
      AssetMap.Slots2,
      AssetMap.Slots3,
    ],
    url: 'https://thyancey.github.io/slot-machine/',
  },
  {
    route: 'alteredchromatic',
    name: 'Altered Chromatic',
    bodyComponent: <Content_Slots />,
    images: [
      AssetMap.Slots1,
      AssetMap.Slots2,
      AssetMap.Slots3,
    ],
    url: 'https://thyancey.github.io/slot-machine/',
  },
  {
    route: 'fretref',
    name: 'FretRef',
    bodyComponent: <Content_Slots />,
    images: [
      AssetMap.Slots1,
      AssetMap.Slots2,
      AssetMap.Slots3,
    ],
    url: 'https://thyancey.github.io/slot-machine/',
  },
  {
    route: 'dropship',
    name: 'Dropship!',
    bodyComponent: <Content_Slots />,
    images: [
      AssetMap.Slots1,
      AssetMap.Slots2,
      AssetMap.Slots3,
    ],
    url: 'https://thyancey.github.io/slot-machine/',
  },
  {
    route: 'raccoontrapper',
    name: 'Raccoon Trapper',
    bodyComponent: <Content_Slots />,
    images: [
      AssetMap.Slots1,
      AssetMap.Slots2,
      AssetMap.Slots3,
    ],
    url: 'https://thyancey.github.io/slot-machine/',
  },
];

function Layout() {
  const location = useLocation();

  console.log('cur', location.pathname);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.hello = location;

  // const themeClass = count % 2 === 0 ? 'theme-slots' : 'theme-zebra';
  // const nextHash = count % 2 === 0 ? 'slots' : 'zebra';

  const curPage = location.pathname.split('/')[1] || pages[0].route;

  const pageIdx = pages.findIndex((p) => p.route === curPage);
  const prevIdx = pageIdx <= 0 ? pages.length - 1 : pageIdx - 1;
  const nextIdx = pageIdx >= pages.length - 1 ? 0 : pageIdx + 1;

  console.log('pageIdx', pageIdx);

  const themeClass = `theme-${curPage}`;



  return (
    <ScContainer id='main' className={themeClass}>
      <ScHeader>
        <h1>{'thomasyancey.com'}</h1>
        <div>
          <a>{'blog'}</a>
          <a>{'projects'}</a>
        </div>
        <ScBlobBorder $blobType='header' />
      </ScHeader>
      <>
        <Routes>
          <Route path='/' element={<Content contentDef={pages[0]} />} />
          {pages.map((p) => (
            <Route key={p.route} path={p.route} element={<Content contentDef={p} />} />
          ))}
        </Routes>
      </>
      <ScFooter>
        <ScNavBar>
          <Link key='prev' to={pages[prevIdx].route}>{'<'}</Link>
          {pages.map((p, pIdx) => (
            <ScNavBubble key={p.route} className={pIdx === pageIdx ? 'active' : ''}>
              <Link to={p.route} />
            </ScNavBubble>
          ))}
          <Link key='next' to={pages[nextIdx].route}>{'>'}</Link>
        </ScNavBar>
        <ScLaunchBtn>
          <ScButton href={pages[pageIdx].url} target='_blank'>
            {'launch it!'}
          </ScButton>
        </ScLaunchBtn>
        <ScBlobBorder $blobType='footer' />
      </ScFooter>
    </ScContainer>
  );
}

export default Layout;
