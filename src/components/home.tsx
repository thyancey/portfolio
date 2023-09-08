import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

const ScBody = styled.div`
  overflow: hidden;

  color: var(--color-black);
  background-color: var(--color-purple);
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 3rem;

  text-align: center;

  /* bg text */
  h2 {
    font-size: 8rem;
    color: var(--color-black);
    opacity: 0.2;
    line-height: 7rem;
  }

  @media (max-width: 42.15rem) {
    h2 {
      font-size: 4rem;
      line-height: 3rem;
    }
  }
`;

/*
const anim_bounce1 = keyframes`
    0%,
    100% {
      transform: rotate(0deg) translateY(0);
    }
    10% {
      transform: rotate(0deg) translateY(0);
    }
    30% {
      transform: rotate(3deg) translateY(0.2rem);
    }
    35% {
      transform: rotate(6deg) translateY(0.25rem);
    }
    70% {
      transform: rotate(-3deg) translateY(-2rem);
    }
    90% {
      transform: rotate(2deg) translateY(0.2rem);
    }
`;
*/

/*
const anim_swing = keyframes`
    0%,
    100% {
      transform: rotate(6.5deg) translateX(.5rem);
    }
    50% {
      transform: rotate(-6.5deg) translateX(-.5rem);
    }
`;

const anim_swing2 = keyframes`
    0%,
    100% {
      transform: rotate(7deg) translateX(-1rem);
    }
    50% {
      transform: rotate(-7deg) translateX(1rem);
    }
`;
*/

const anim_swing3 = keyframes`
    0%,
    100% {
      transform: rotate(10.5deg) translateX(-1.5rem);
    }
    10% {
      transform: rotate(10.5deg) translateX(-1.5rem);
    }
    50% {
      transform: rotate(-10.5deg) translateX(1.5rem);
    }
    60% {
      transform: rotate(-10.5deg) translateX(1.5rem);
    }
`;

const anim_swing4 = keyframes`
    0%,
    100% {
      transform: rotate(10.5deg) translateX(1.5rem);
    }
    10% {
      transform: rotate(10.5deg) translateX(1.5rem);
    }
    50% {
      transform: rotate(-10.5deg) translateX(-1.5rem);
    }
    60% {
      transform: rotate(-10.5deg) translateX(-1.5rem);
    }
`;

interface ScButtonProps {
  $type?: 'right';
}
const ScButton = styled.div<ScButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  border: 0.25rem solid var(--theme-primary);
  border-radius: 1rem;

  padding: 0.5rem 1rem;
  margin: 2rem 2rem;
  padding-top: 0.75rem;

  color: var(--theme-bg);
  background-color: var(--theme-primary);
  box-shadow: -0.15rem 0.15rem 0.5rem 0.25rem var(--color-black);

  font-size: 2rem;
  line-height: 2remrem;
  font-family: var(--font-heading);

  cursor: pointer;

  --wiggler: ${anim_swing4} 8s infinite ease;
  ${(p) =>
    p.$type === 'right' &&
    css`
      --wiggler: ${anim_swing3} 8s infinite ease-in-out;
    `};
  animation: var(--wiggler);
  transform: rotate(5deg);
  transition: transform 0.3s ease-out, background-color 0.3s, color 0.3s;

  @media (hover: hover) {
    &:hover {
      color: var(--theme-primary);
      background-color: var(--theme-bg);
      box-shadow: 0rem 0rem 0.5rem 0.25rem var(--color-black);

      transform: rotate(-5deg) scale(1.2);

      padding: 2rem;
    }
  }

  ${(p) =>
    p.$type === 'right' &&
    css`
      transform: rotate(-1deg);
      @media (hover: hover) {
        &:hover {
          transform: rotate(3deg) scale(1.2);
        }
      }
    `};

  transition: padding 0.5s ease-out, background-color 0.5s, color 0.5s;
`;

const ScMessage = styled.div`
  text-align: center;
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
  ['AHOY', 'MATEY'],
  ['BUCKLE UP', 'BUCKAROO'],
  ['WHAT UP', 'CHEESEBAG'],
  ['WELCOME', 'TO THE ZOO'],
  ['GREETINGS', 'CITIZEN'],
  ['OH...', "IT'S YOU"],
  ['HEY THERE', 'ROCKSTAR'],
  ['HEY THERE', 'SUNSHINE'],
];

function HomeContent() {
  const text = textChoices[Math.floor(Math.random() * textChoices.length)];
  return (
    <ScBody>
      <h2>{text[0]}</h2>
      <ScMessage>
        <Link to={'/blog'}>
          <ScButton>
            <span>{'BLOG'}</span>
          </ScButton>
        </Link>
        <Link to={'/projects'}>
          <ScButton $type='right'>
            <span>{'PROJECTS'}</span>
          </ScButton>
        </Link>
      </ScMessage>
      {text[1] && <h2>{text[1]}</h2>}
    </ScBody>
  );
}

export default HomeContent;
