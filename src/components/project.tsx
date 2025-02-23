import styled from 'styled-components';
import { ProjectDef } from '../store/data';
import Icon_RocketLaunch from '@mui/icons-material/RocketLaunch';
import Icon_Code from '@mui/icons-material/Code';
import ProjectGallery, { ScGallery } from './project-gallery';
import ProjectModal from './project-modal';
import { useContext, useEffect, useRef } from 'react';
import { StoreContext } from '../store/context';

const ScWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  position: relative;
`;

const ScContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  max-width: 50rem;
`;

const ScContentBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  > div {
    overflow-y: auto; // cause content can get long
    flex: 1;
  }
`;

const ScButtons = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: end;
  gap: 1rem;
  margin-top: 0.25rem;
  min-height: 3.5rem;

  @media (max-width: 42.15rem) {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    position: relative;

    &:after {
      content: '';
      opacity: 0.5;
      width: 100%;
      position: absolute;
      top: calc(100% + 1.5rem);
    }
  }
`;

const ScLaunchButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  text-decoration: none;
  text-align: center;
  font-size: 1.4rem;
  font-family: var(--font-heading);

  background-color: var(--theme-bg);
  color: var(--theme-primary);
  border: 2px solid var(--theme-primary);
  border-radius: 0.5rem;

  cursor: pointer;

  transition: background-color 0.5s ease, color 0.3s ease, box-shadow 0.3s ease;

  /* !importants override generic anchor tag styling.. fix this later */
  color: var(--theme-bg) !important;
  background-color: var(--theme-primary) !important;

  &:hover {
    color: var(--theme-primary) !important;
    background-color: var(--theme-bg) !important;
    text-decoration: none;

    box-shadow: 0px 0px 8px 2px var(--theme-primary);
  }

  > * {
    vertical-align: middle;
  }

  svg {
    margin-right: 0.5rem;
  }
`;

const ScBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  position: relative;
  overflow-x: hidden;
  max-width: 80rem;
  margin: 0 auto;

  /* background-color: var(--theme-bg);
  transition: background-color 1s ease-out; */

  > h2 {
    text-align: center;
  }

  h2 {
    color: var(--theme-primary);
    word-break: break-word;
  }

  padding: 4rem 3rem;

  @media (max-width: 42.15rem) {
    padding: 4rem 1rem;
  }
  @media (min-width: 81.25rem) {
  }
`;
const ScCard = styled.div`
  width: 100%;
  min-height: 27rem;
  border-radius: 2rem;
  box-shadow: 0 0 1rem 0.25rem var(--theme-primary);
  border: 0.15rem solid var(--theme-primary);
  background-color: var(--theme-bg);

  justify-content: space-between;

  h1,
  h2,
  h3 {
    color: var(--theme-primary);
  }

  p,
  li {
    color: var(--theme-neutral);
  }

  display: flex;
  flex-direction: row;

  ${ScButtons} {
    justify-content: start;
  }
  @media (min-width: 42.15rem) {
    gap: 2rem;

    padding: 1.5rem 2rem;

    ${ScContent} {
      flex: 1;
    }
    ${ScGallery} {
      flex: 0.6;
    }
  }

  /* big boy */
  @media (min-width: 81.25rem) {
  }

  /* tablety */
  @media (max-width: 53rem) {
    ${ScButtons} {
      justify-content: center;
      a {
        width: 100%;
      }
    }
  }

  /* mobile */
  @media (max-width: 42.15rem) {
    display: block;
    height: fit-content;
    padding: 1.5rem 1.5rem 1rem 1.5rem;

    ${ScGallery} {
      margin-left: 0; // reverts margin hack above
    }

    /* wide, taller buttons that can squish in pretty far */
    ${ScButtons} {
      a {
        font-size: 1.25rem;
      }
    }

    ${ScContentBlock} {
      position: relative;
    }
  }
`;

export const ScBodySideBySide = styled.div`
  display: flex;
  gap: 1rem;

  > div {
    flex: 1;
    max-width: 50%;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (min-width: 42.15rem) {
    &.reversed {
      flex-direction: row-reverse;
    }
  }

  @media (max-width: 42.15rem) {
    flex-wrap: wrap;
    > div {
      flex: inherit;
      width: 100%;
      max-width: 100%;
    }
  }
`;

const ScBodyComponent = styled.div`
  border-radius: 2rem;
  border-top: 0.25rem dashed var(--theme-primary);
  border-bottom: 0.25rem dashed var(--theme-primary);
  background-color: var(--theme-bg);
  display: flex;
  flex-direction: column;
  gap: 4rem;

  h1,
  h2,
  h3 {
    color: var(--theme-primary);
  }

  p,
  li {
    color: var(--theme-neutral);
  }

  @media (min-width: 42.15rem) {
    padding: 1.5rem 2rem;
  }

  /* mobile */
  @media (max-width: 42.15rem) {
    padding: 1.5rem;
  }
`;

interface Props {
  contentDef: ProjectDef;
  imageIdx?: number;
}
function ProjectContent({ contentDef, imageIdx = -1 }: Props) {
  const scrollRef = useRef<HTMLInputElement | null>(null);
  const { setIsHeaderCollapsed } = useContext(StoreContext);

  // jump back to top when changing projects
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [contentDef]);

  useEffect(() => {
    if (scrollRef.current) {
      const domEl = scrollRef.current;

      const handleScroll = () => {
        if (domEl && domEl.scrollTop > 100) {
          setIsHeaderCollapsed(true); // Hide the header when scrolled down
        } else {
          setIsHeaderCollapsed(false); // Show the header when at the top
        }
      };

      domEl.addEventListener('scroll', handleScroll);
      return () => {
        domEl && domEl.removeEventListener('scroll', handleScroll); // Clean up the event listener
      };
    }
  }, [setIsHeaderCollapsed]);

  return (
    <ScWrapper id='projects' ref={scrollRef}>
      <ProjectModal contentDef={contentDef} imageIdx={imageIdx} />
      <ScBodyContainer>
        <ScCard>
          <ScContent>
            <ScContentBlock>
              <h2>{contentDef.name}</h2>
              <div>{contentDef.titleComponent}</div>
            </ScContentBlock>
            <ScButtons>
              {contentDef.url && (
                <ScLaunchButton href={contentDef.url} target='_blank'>
                  <Icon_RocketLaunch />
                  <span>{contentDef.urlTitle || 'TRY IT'}</span>
                </ScLaunchButton>
              )}
              {contentDef.repoUrl && (
                <ScLaunchButton href={contentDef.repoUrl} target='_blank'>
                  <Icon_Code />
                  <span>{'GITHUB'}</span>
                </ScLaunchButton>
              )}
            </ScButtons>
          </ScContent>
          {/* <GalleryActive contentDef={contentDef} /> */}
          <ProjectGallery contentDef={contentDef} />
        </ScCard>
        {contentDef.bodyComponent && <ScBodyComponent>{contentDef.bodyComponent}</ScBodyComponent>}
      </ScBodyContainer>
    </ScWrapper>
  );
}

export default ProjectContent;
