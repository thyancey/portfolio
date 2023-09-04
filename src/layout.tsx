import { useContext } from 'react';
import styled from 'styled-components';

import { StoreContext } from './store/context';
import AssetMap from './assets';

const ScContainer = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  inset: 0;
`;

const ScHeader = styled.header`
  background-color: var(--color-black);

  display: flex;

  align-items: center;
  justify-content: space-between;

  padding: 0rem 1rem;

  > div {
    a {
      margin: 1rem;
    }
  }
`;

const ScBody = styled.main`
  background-color: var(--color-grey);
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
  
  >*{
    width: 6rem;
    height: 6rem;
    background-size: contain;
  }
`;

const ScButton = styled.button`
  margin: 1rem;

  cursor: pointer;
  background: none;
  border: 0.2rem solid var(--color-blue);
  border-radius: 0.5rem;

  padding: 1rem;

  &:hover {
    background-color: var(--color-blue-light);
  }
`;

function App() {
  const { count, setCount } = useContext(StoreContext);

  return (
    <ScContainer>
      <ScHeader>
        <h1>{'thomasyancey.com'}</h1>
        <div>
          <a>{'blog'}</a>
          <a>{'projects'}</a>
        </div>
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
      </ScFooter>
    </ScContainer>
  );
}

export default App;
