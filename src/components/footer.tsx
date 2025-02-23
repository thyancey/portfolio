import styled from 'styled-components';
import { ProjectDef } from '../store/data';
import { Link } from 'react-router-dom';
import { ScBlobBorder } from './blob-border';
import Icon_KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import Icon_KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const ScFooter = styled.footer`
  background-color: var(--color-black);
  padding: 0 1rem;
  min-height: 3.625rem;

  position: relative;

  transition: min-height 0.3s;

  @media (max-width: 42.15rem) {
    min-height: 0.5rem;
    padding-top: 0rem;
  }
`;

const ScNavBar = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  margin-bottom: 0.5rem;
  min-height: 3.625rem;

  display: flex;
  justify-content: center;
  align-items: center;

  > a {
    color: var(--theme-primary);
    margin: 0 0.5rem -0.25rem 0.5rem;

    &:hover {
      color: var(--theme-bg);
      filter: drop-shadow(0 0 3px var(--theme-primary)) drop-shadow(0 0 3px var(--theme-primary))
        drop-shadow(0 0 3px var(--theme-primary));
    }
  }
`;

const ScNavBubbles = styled.div`
  display: flex;
  flex: 1;
  max-width: 30rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

interface ScNavBubbleProps {
  $text: string;
}
const ScNavBubble = styled.div<ScNavBubbleProps>`
  position: relative;
  /* padding: 0.25rem; */
  border-radius: 100%;
  border: 0.2rem solid var(--theme-primary);
  background-color: var(--theme-primary);
  width: 1rem;
  height: 1rem;

  transition: width 0.3s, height 0.3s, background-color 0.3s;

  &:hover {
    background-color: var(--theme-bg);
    border-color: var(--theme-primary);
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

  &::before {
    content: '${(p) => p.$text}';

    position: absolute;
    pointer-events: none;
    font-size: 1rem;
    left: 0;
    line-height: 1rem;
    text-align: center;
    transform: rotate(45deg) translateY(5rem);
    transform-origin: left;
    white-space: nowrap;

    bottom: 0;

    color: var(--theme-primary);
    opacity: 0;
    /* just fade out on unhover */
    transition: opacity 0.3s, bottom 0.3s 0.3s, transform 0.3s 0.3s, padding 0.3s;
  }

  &.active,
  &:hover {
    /* tilt up and fade in */
    &::before {
      transition: opacity 0.5s 0.1s, bottom 0.3s, transform 0.3s, padding 0.3s;
      bottom: 100%;
      opacity: 1;
      transform: rotate(-5deg) translateY(-0.5rem);
    }
  }

  &.active {
    /* black state */
    filter: drop-shadow(2px 4px 2px var(--theme-primary));
    &::before {
      background-color: var(--color-black);
      padding: 0.5rem 0.75rem;
      color: var(--theme-primary);
      border-radius: 1rem;
      border: 0.1rem solid var(--theme-primary);
    }
  }

  @media (hover: hover) {
    &:hover {
      z-index: 1;

      /* filled in state */
      filter: drop-shadow(2px 4px 2px var(--theme-bg));
      &::before {
        background-color: var(--theme-primary);
        padding: 0.5rem 0.75rem;
        color: var(--color-black);
        border-radius: 1rem;
        border: 0.1rem solid var(--theme-primary);
      }
    }
  }
`;

interface Props {
  pageIdx: number;
  projects: ProjectDef[];
}
function Footer({ pageIdx, projects }: Props) {
  let prevIdx = -1;
  let nextIdx = -1;

  if (pageIdx > -1) {
    prevIdx = pageIdx <= 0 ? projects.length - 1 : pageIdx - 1;
    nextIdx = pageIdx >= projects.length - 1 ? 0 : pageIdx + 1;
  }

  return (
    <ScFooter>
      <ScBlobBorder $blobType='footer' className='animation' />
      {pageIdx > -1 && (
        <>
          <ScNavBar>
            <Link key='prev' to={projects[prevIdx].route}>
              <Icon_KeyboardArrowLeft className='icon-large' />
            </Link>
            <ScNavBubbles>
              {projects.map((p, pIdx) => (
                <ScNavBubble key={p.route} className={pIdx === pageIdx ? 'active' : ''} $text={p.name}>
                  <Link to={p.route} />
                </ScNavBubble>
              ))}
            </ScNavBubbles>
            <Link key='next' to={projects[nextIdx].route}>
              <Icon_KeyboardArrowRight className='icon-large' />
            </Link>
          </ScNavBar>
        </>
      )}
    </ScFooter>
  );
}

export default Footer;
