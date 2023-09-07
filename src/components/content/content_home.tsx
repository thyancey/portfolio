import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ScBody = styled.div`
  overflow: hidden;
  background-color: var(--color-purple);
  /* color: var(--theme-neutral); */
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 3rem;

  text-align: center;

  h2 {
    font-size: 8rem;
    color: var(--color-black);
    opacity: 0.1;
    line-height: 7rem;
  }

  h3 {
    font-size: 5rem;
  }

  @media (max-width: 42.15rem) {
    h2 {
      font-size: 5rem;
      line-height: 4rem;
    }
    h3 {
      font-size: 3rem;
    }
  }
`;

const ScMessage = styled.div`
  display: flex;
  /* justify-content: space-around; */
  /* align-items: center; */
  justify-content: center;
  gap: 1rem;
  width: 100%;
  text-align: center;

  h3 {
    /* font-size: 5rem; */
    color: var(--color-blue);
    position: relative;

    a {
      transition: color 0.3s;
      color: var(--color-white);
      &:hover {
        color: var(--color-blue);
      }
    }

    &:first-child a {
      &:before {
        content: '<';
        position: absolute;
        right: 100%;
        margin-right: 1rem;
        opacity: 0;
        transition: opacity 0.5s;
      }
    }
    &:last-child a {
      &:after {
        content: '>';
        position: absolute;
        left: 100%;
        margin-left: 1rem;
        opacity: 0;
        transition: opacity 0.5s;
      }
    }
    a:hover {
      &:after {
        opacity: 1;
      }
      &:before {
        opacity: 1;
      }
    }
  }
`;

// thanks ChatGPT, you're the best
const textChoices = [
  ['HOWDY', 'PARTNER'],
  ['HELLO', 'SUNSHINE'],
  ['HI', 'PAL'],
  ["G'DAY", 'MATE'],
  ['ALOHA', 'BUDDY'],
  ['HEY', 'CHAMP'],
  ['YO', 'BUDDY-O'],
  ['SALUT', 'AMIGO'],
  ['HELLO', 'THERE'],
  ['HI', 'FRIEND'],
  ['GOOD', 'TO SEE YOU'],
  ['HEY', 'BUDDY'],
  ["HOW'S", 'IT GOING'],
  ['HEY', 'YOU'],
  ['WELCOME', 'TO THE PARTY'],
  ['HELLO', 'FELLOW HUMAN'],
  ['HEY', 'NEIGHBOR'],
  ['WELL', 'HELLO THERE'],
  ['HOWDY', 'DOODY'],
  ['GREETINGS', 'EARTHLING'],
  ['OH', 'HI!'],
  ["WHAT'S", "COOKIN'"],
  ['GREETINGS', 'STRANGER'],
  ['YO', 'DUDE'],
  ['HEY', "GOOD LOOKIN'"],
  ['AHOY', 'MATEY'],
  ['BUCKLE UP', 'BUCKAROO'],
  ['HELLO', 'GORGEOUS'],
  ['WELCOME', 'TO THE ZOO'],
  ['HELLO', 'BEAUTIFUL'],
  ['GREETINGS', 'CITIZEN'],
  ['GREETINGS', 'SUNBEAM'],
  ['HELLO', 'ROCKSTAR'],
  ['HELLO', 'SUNFLOWER'],
  ['HELLO', 'SUNSHINE'],
  ['HELLO', 'TOASTER STRUDEL'],
  ['HI', 'SPARKLE CAKE'],
];

function HomeContent() {
  const text = textChoices[Math.floor(Math.random() * textChoices.length)];
  return (
    <ScBody>
      <h2>{text[0]}</h2>
      <ScMessage>
        <h3>
          <Link to={'/blog'}>{'BLOG'}</Link>
        </h3>
        <h3>{' / '}</h3>
        <h3>
          <Link to={'/projects'}>{`PROJECTS`}</Link>
        </h3>
      </ScMessage>
      {text[1] && <h2>{text[1]}</h2>}
    </ScBody>
  );
}

export default HomeContent;
