import styled from 'styled-components';
import { ProjectDef } from '../store/data';
import Icon_RocketLaunch from '@mui/icons-material/RocketLaunch';
import Icon_Code from '@mui/icons-material/Code';
import ProjectGallery, { ScGallery } from './project-gallery';
import ProjectModal from './project-modal';

const ScContent = styled.div`
  position: relative;
`;

const ScContentBlock = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  > div {
    overflow-y: auto; // cause content can get long
    flex: 1;
  }
`;

const ScWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  position: relative;
`;

const ScButtons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: end;
  gap: 1rem;
  margin-top: 0.25rem;

  @media (max-width: 42.15rem) {
    margin-top: 1rem;
    margin-bottom: 3rem;
    position: relative;

    &:after {
      content: '';
      opacity: 0.5;
      border-bottom: 2px dashed var(--theme-primary);
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
  font-size: 1.5rem;
  font-family: var(--font-heading);

  background-color: var(--theme-bg);
  color: var(--theme-primary);
  border: 2px solid var(--theme-primary);
  border-radius: 0.5rem;

  cursor: pointer;

  transition: background-color 0.5s ease, color 0.3s ease, box-shadow 0.3s ease;

  color: var(--theme-bg);
  background-color: var(--theme-primary);

  &:hover {
    color: var(--theme-primary);
    background-color: var(--theme-bg);

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
  gap: 2rem;
  position: relative;
  overflow-x: hidden;

  background-color: var(--theme-bg);

  h2 {
    color: var(--theme-primary);
    word-break: break-word;
  }

  h3,
  h4 {
    color: var(--theme-secondary);
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
  height: 27rem;
  border-radius: 2rem;
  box-shadow: 0 0 1rem 0.25rem var(--theme-primary);
  border: 0.15rem solid var(--theme-primary);
  background-color: var(--theme-bg);

  @media (min-width: 42.15rem) {
    display: grid;
    /* grid-template-columns: 66% 33%; */
    grid-template-columns: auto 20.5rem;
    grid-template-rows: auto 2rem;
    gap: 0.5rem;

    padding: 1.5rem 2rem 1rem 2rem;

    ${ScContent} {
      grid-column: 1;
      grid-row: 1;
    }
    ${ScButtons} {
      grid-column: 1;
      grid-row: 2;
      justify-content: start;
    }
    ${ScGallery} {
      grid-column: 2;
      grid-row: 1 / span 1;
      margin-left: 1rem; // this helps it appear centered on the right
      /* max-width: 15rem; */
    }
    >h3 {
      grid-column: 2;
      grid-row: 2;
      text-align:center;
    }
  }

  /* big boy */
  @media (min-width: 81.25rem) {
    grid-template-columns: auto 30rem;
  }

  /* tablety */
  @media (max-width: 53rem) {
    grid-template-columns: auto 12.5rem;
  }

  /* mobile */
  @media (max-width: 42.15rem) {
    display: block;
    height: fit-content;
    padding: 1.5rem 1.5rem 1rem 1.5rem;

    ${ScGallery} {
      /* height: 25rem; */ // keep for active gallery view
      margin-left: 0; // reverts margin hack above
    }

    /* wide, taller buttons that can squish in pretty far */
    ${ScButtons} {
      a {
        width: 50%;
        font-size: 1.25rem;
        padding: 1rem 0;
      }
    }

    ${ScContentBlock} {
      position: relative;
    }
  }


  h1,
  h2,
  h3 {
    color: var(--theme-primary);
  }

  p,
  li {
    color: var(--theme-neutral);
  }
`;

interface Props {
  contentDef: ProjectDef;
  imageIdx?: number;
}
function ProjectContent({ contentDef, imageIdx = -1 }: Props) {

  return (
    <ScWrapper>
      <ProjectModal contentDef={contentDef} imageIdx={imageIdx} />
      <ScBodyContainer>
        <ScCard>
          <ScContent>
            <ScContentBlock>
              <h2>{contentDef.name}</h2>
              <div>{contentDef.titleComponent}</div>
            </ScContentBlock>
          </ScContent>
          <ScButtons>
            {contentDef.url && (
              <ScLaunchButton href={contentDef.url} target='_blank'>
                <Icon_RocketLaunch />
                <span>{'LAUNCH IT'}</span>
              </ScLaunchButton>
            )}
            {contentDef.repoUrl && (
              <ScLaunchButton href={contentDef.repoUrl} target='_blank'>
                <Icon_Code />
                <span>{'GITHUB'}</span>
              </ScLaunchButton>
            )}
          </ScButtons>
          {/* <GalleryActive contentDef={contentDef} /> */}
          <h3>{'gallery'}</h3>
          <ProjectGallery contentDef={contentDef} />
        </ScCard>
        {contentDef.bodyComponent && <div>{contentDef.bodyComponent}</div>}
      </ScBodyContainer>
    </ScWrapper>
  );
}

export default ProjectContent;
