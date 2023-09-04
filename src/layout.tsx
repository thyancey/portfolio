import { useContext } from 'react';
import styled, { css } from 'styled-components';

import { StoreContext } from './store/context';
import AssetMap from './assets';

const ScContainer = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  inset: 0;

  &.theme-zebra {
    --theme-primary: var(--theme-zebra-primary);
    --theme-secondary: var(--theme-zebra-secondary);
  }

  &.theme-slots {
    --theme-primary: var(--theme-slots-primary);
    --theme-secondary: var(--theme-slots-secondary);
  }

  > * {
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
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

  > div {
    a {
      margin: 1rem;
    }
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

const ScBody = styled.main`
  background-color: var(--theme-secondary);
  color: var(--theme-primary);

  flex: 1;

  display: flex;
  padding: 0 1rem;

  display: grid;
  grid-template-columns: 66% 34%;
  grid-template-rows: 66% 34%;
`;

const ScFooter = styled.footer`
  background-color: var(--color-black);
  padding: 0 1rem;

  position: relative;
`;

const ScBodyCopy = styled.div`
  border-right: 0.25rem solid var(--color-black);

  grid-column: 1;
  grid-row: 1 / span 2;
`;

const ScBodyImage = styled.div`
  grid-column: 2;
  grid-row: 1;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ScBodyThumbnails = styled.div`
  text-align: center;

  grid-column: 2;
  grid-row: 2;
  display: flex;

  justify-content: space-evenly;

  > * {
    width: 6rem;
    height: 6rem;
    background-size: contain;
  }
`;

const ScButton = styled.button`
  margin: 1rem;

  cursor: pointer;
  background: none;
  border: 0.2rem solid var(--theme-primary);
  background-color: var(--theme-secondary);

  border-radius: 0.5rem;

  padding: 1rem;

  &:hover {
    background-color: var(--theme-primary);
  }
`;

function App() {
  const { count, setCount } = useContext(StoreContext);

  const themeClass = count % 2 === 0 ? 'theme-slots' : 'theme-zebra';

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
      <ScBody>
        <ScBodyCopy>
          <h2>{'!SLOTS!SLOTS!SLOTS!'}</h2>
          <h3>{'Premise'}</h3>
          <p>{'A roguelike slot machine, where you bend the odds in your favor to earn cash and battle enemies'}</p>
          <p>
            {
              'Spin the reels of fortune in a world of slot machines, where excitement and anticipation reign supreme. The clinking of coins, the flashing lights, and the thrilling soundtracks create an immersive gaming experience that keeps players coming back for more.'
            }
          </p>
          <ul>
            <li>
              {
                'In this realm of chance, every pull of the lever or press of the button represents a shot at big winnings.'
              }
            </li>
            <li>{`Whether you're chasing cherries, lucky sevens, or bonus symbols, the spinning reels hold the promise of jackpots and thrilling payouts.`}</li>
            <li>{'With each spin, the heart races, and dreams of hitting the ultimate jackpot come to life.'}</li>
          </ul>

          <h3>{'Rouge-like Elements'}</h3>
          <p>
            {
              'Spin the reels of fortune in a world of slot machines, where excitement and anticipation reign supreme. The clinking of coins, the flashing lights, and the thrilling soundtracks create an immersive gaming experience that keeps players coming back for more.'
            }
          </p>
        </ScBodyCopy>
        <ScBodyImage>
          <img src={AssetMap.Loader} />
        </ScBodyImage>
        <ScBodyThumbnails>
          <img src={AssetMap.Loader} />
          <img src={AssetMap.Loader} />
          <img src={AssetMap.Loader} />
        </ScBodyThumbnails>
      </ScBody>
      <ScFooter>
        <ScButton onClick={() => setCount((prev) => prev + 1)}>{count}</ScButton>
        <a>{'<'}</a>
        <span>{'- - - - - - - - '}</span>
        <a>{'>'}</a>
        <ScButton>{'launch it!'}</ScButton>
        <ScBlobBorder $blobType='footer' />
      </ScFooter>
    </ScContainer>
  );
}

export default App;
