import styled from 'styled-components';
import { ContentDef } from './content/data';
import { Link } from 'react-router-dom';
import { ScBlobBorder } from './blob-border';
import Icon_KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import Icon_KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const ScFooter = styled.footer`
  background-color: var(--color-black);
  padding: 0 1rem;
  min-height: 3.625rem;

  position: relative;

  
  @media (max-width: 42.15rem) {
    min-height: 5rem;
    padding-top: 0.5rem;
  }
`;

const ScNavBar = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  margin-bottom: .5rem;
  min-height: 3.625rem;

  display: flex;
  justify-content: center;
  align-items: center;

  > a {
    color: var(--theme-primary);
    margin: 0 .5rem -.25rem .5rem;

    &:hover{
      color: var(--theme-bg);
      filter: drop-shadow(0 0 3px var(--theme-primary)) drop-shadow(0 0 3px var(--theme-primary)) drop-shadow(0 0 3px var(--theme-primary));
    }
  }
`;

interface ScNavBubbleProps {
  $text: string;
  $theme: string;
}
const ScNavBubble = styled.div<ScNavBubbleProps>`
  position: relative;
  margin: 0.5rem;
  border-radius: 100%;
  border: 0.2rem solid var(--theme-primary);
  background-color: var(--theme-primary);
  width: 1rem;
  height: 1rem;

  transition: width 0.3s, height 0.3s, background-color 0.3s;

  &:hover {
    /* background-color: var(--theme-bg); */
    background-color: var(--theme-${p => p.$theme}-bg);
    border-color: var(--theme-${p => p.$theme}-primary);
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
    content: '${p => p.$text}';

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

    color: var(--theme-${p => p.$theme}-primary);
    opacity: 0;
    /* just fade out on unhover */
    transition: opacity 0.3s, bottom 0.3s .3s, transform 0.3s .3s;
  }

  &:hover {
    filter: drop-shadow(2px 4px 6px var(--theme-${p => p.$theme}-primary));

    &::before {
      /* tilt up and fade in */
      transition: opacity 0.5s .1s, bottom 0.3s, transform 0.3s;
      bottom: 100%;
      opacity: 1;
      transform: rotate(-5deg) translateY(-.5rem);
    }
  }
`;

interface Props {
  pageIdx: number;
  projects: ContentDef[];
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
      <ScBlobBorder $blobType='footer' />
      {pageIdx > -1 && (
        <>
          <ScNavBar>
            <Link key='prev' to={projects[prevIdx].route}>
              <Icon_KeyboardArrowLeft className='icon-large' />
            </Link>
            {projects.map((p, pIdx) => (
              <ScNavBubble
                key={p.route}
                className={pIdx === pageIdx ? 'active' : ''}
                $text={p.name}
                $theme={p.theme || 'default'}
              >
                <Link to={p.route} />
              </ScNavBubble>
            ))}
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
