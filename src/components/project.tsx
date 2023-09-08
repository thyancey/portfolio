import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getUrl } from '../assets';
import { ContentDef } from '../store/data';
import Icon_Close from '@mui/icons-material/Close';
import Icon_KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import Icon_KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Icon_RocketLaunch from '@mui/icons-material/RocketLaunch';
import Icon_Code from '@mui/icons-material/Code';
import { useEffect, useState } from 'react';

interface ScImageProps {
  $rotation: number;
}

const ScImage = styled.div<ScImageProps>`
  width: 5rem;
  height: 4rem;
  position: relative;

  img {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom;

    border-radius: 0.5rem;
    box-shadow: 4px 4px 6px var(--color-black);
    transition: box-shadow 0.3s, transform 0.3s;
  }

  &:hover {
    img {
      transform: rotate(${(p) => p.$rotation}deg) translateY(-.5rem);
      border: 2px solid var(--theme-primary);
      box-shadow: 0px 0px 8px 2px var(--theme-primary), 8px 10px 5px var(--color-black);
    }
  }

  &.active {
    width: 100%;
    height: 15rem;

    &:hover {
      width: 100%;
      img {
        transform: rotate(${(p) => p.$rotation}deg);
      }
    }
  }
`;

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

const ScGallery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-bottom: 0rem;
`;
const ScSelectedImage = styled.div`
  width: 100%;
  max-width: 30rem;

  /* height: 15rem; */
  flex: 1;
  position: relative;

  img {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;

    transition: filter 0.3s, transform 0.3s;

    filter: drop-shadow(4px 4px 6px var(--color-black));
  }

  a:hover img {
    filter: drop-shadow(0 0 1rem var(--theme-primary));
    transform: rotate(-0.5deg) translateY(-0.25rem);
  }
`;

const ScImages = styled.div`
  height: 5rem;

  display: flex;
  flex-wrap: wrap;
  column-gap: 0.75rem;
  row-gap: 1.5rem;
  justify-content: start;
  align-content: start;
  cursor: pointer;

  transition: width 0.3s, height 0.3s;
`;

const ScCarouselBtn = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  left: auto;
  right: 0rem;
  z-index: 1;

  &:first-child {
    right: auto;
    left: 0rem;
  }
`;

const ScModalContainer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  /* overflow: hidden; */
`;

const ScWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  position: relative;
`;

const ScModalFade = styled.div`
  position: absolute;
  inset: 0;
  background-color: var(--theme-primary);
  opacity: 0;
  transition: opacity 0.3s ease-in;
  z-index: 1;
  pointer-events: none;

  &.active {
    opacity: 0.9;
    pointer-events: all;
    transition: opacity 0.6s ease-out;
  }
`;

const ScModalImg = styled.div`
  position: relative;

  img {
    inset: 0;
    position: absolute;
    width: 100%;
    height: 100%;

    object-fit: contain;
    filter: drop-shadow(2px 4px 6px var(--color-black));
  }
`;

const ScModal = styled.div`
  position: absolute;
  bottom: 0%;
  height: 80%;
  left: 10rem;
  right: 10rem;

  max-width: 50rem;
  margin: auto;
  z-index: 1;

  background-color: var(--theme-bg);
  border-radius: 1rem;

  box-shadow: 0.3rem 0.4rem 0.3rem 0.1rem var(--color-black);

  text-align: left;
  padding: 2rem;

  display: flex;
  flex-direction: column;

  pointer-events: none;
  opacity: 0;

  transition: bottom 0.5s, opacity 0.5s;
  &.active {
    bottom: 10%;
    pointer-events: all;
    opacity: 1;
  }

  a {
    color: var(--theme-primary);
    cursor: pointer;

    &:hover {
      color: var(--theme-neutral);
    }
  }

  /*  x button */
  > a {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
  }

  > ${ScModalImg} {
    flex: 1;
  }

  > p {
    border-top: 2px dashed var(--theme-primary);
    padding-top: 0.5rem;
    color: var(--theme-primary);
    margin: 1rem 0 0 0;
    max-height: 30%;
    overflow-y: auto;
  }

  @media (max-width: 42.15rem) {
    inset: 1rem;
    padding: 1rem;

    /*  x button */
    > a {
      position: absolute;
      right: -1.25rem;
      top: -1.25rem;
      background-color: var(--theme-bg);
      border-radius: 50%;
      padding: 0.25rem;
      padding-bottom: 0.1rem;
    }
  }
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
    grid-template-columns: 66% 33%;
    grid-template-rows: auto 3.5rem;
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
      grid-row: 1 / span 2;
      margin-left: 1rem; // this helps it appear centered on the right
      /* max-width: 15rem; */
    }
  }

  @media (max-width: 42.15rem) {
    display: block;
    height: fit-content;
    padding: 1.5rem 1.5rem 1rem 1.5rem;

    ${ScGallery} {
      height: 25rem;
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
  @media (min-width: 81.25rem) {
    grid-template-columns: 50% 50%;
    ${ScGallery} {
      /* justify-self: center; */
      /* max-width: 25rem; */
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
  contentDef: ContentDef;
  imageIdx?: number;
}
function ProjectContent({ contentDef, imageIdx = -1 }: Props) {
  const prevImageIdx = imageIdx <= 0 ? -1 : imageIdx - 1;
  const nextImageIdx = imageIdx >= contentDef.gallery.length - 1 ? -1 : imageIdx + 1;
  const galleryImage = (imageIdx > -1 && contentDef.gallery[imageIdx]) || null;

  const [selectedImageIdx, setSelectedImageIdx] = useState(-1);

  // reset junk when the content changes
  useEffect(() => {
    if (contentDef.gallery[0]) {
      setSelectedImageIdx(0);
    } else {
      setSelectedImageIdx(-1);
    }
  }, [contentDef]);

  // TODO: this shouldn't be necessary, but the useEffect above isn't getting triggered on the first render when it changes for some reason
  const validImageIdx = contentDef.gallery.length === 0 ? -1 : selectedImageIdx;

  return (
    <ScWrapper>
      <ScModalContainer>
        <ScModalFade className={imageIdx > -1 ? 'active' : ''} />

        <ScModal className={imageIdx > -1 ? 'active' : ''}>
          <ScCarouselBtn>
            {prevImageIdx > -1 && (
              <Link to={contentDef.route + '/' + prevImageIdx}>
                <Icon_KeyboardArrowLeft className='icon-xlarge' />
              </Link>
            )}
          </ScCarouselBtn>
          <ScCarouselBtn>
            {nextImageIdx > -1 && (
              <Link to={contentDef.route + '/' + nextImageIdx}>
                <Icon_KeyboardArrowRight className='icon-xlarge' />
              </Link>
            )}
          </ScCarouselBtn>
          <ScModalImg>{galleryImage && <img src={getUrl(galleryImage.image)} />}</ScModalImg>

          <Link to={contentDef.route}>
            <Icon_Close className='icon-large' />
          </Link>
          {/* <Link to={contentDef.route}><IconButton size="large"><Icon_Close /></IconButton></Link> */}

          <p>{(galleryImage && galleryImage.caption) || ''}</p>
        </ScModal>
      </ScModalContainer>
      <ScBodyContainer>
        <ScCard>
          <ScContent>
            {contentDef.titleComponent ? (
              <ScContentBlock>
                <h2>{contentDef.name}</h2>
                <div>
                  {/*
                    // TODO, this really shouldnt be necessary, fix the types
                    cloneElement(
                      contentDef.titleComponent as ReactElement<{
                        contentDef: ContentDef;
                      }>,
                      { contentDef: contentDef }
                    )
                    */}
                  {contentDef.titleComponent}
                </div>
              </ScContentBlock>
            ) : (
              <>
                <h2>{contentDef.name}</h2>
                <p>{contentDef.description}</p>
              </>
            )}
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
          <ScGallery>
            <ScSelectedImage>
              {validImageIdx > -1 && (
                <Link to={contentDef.route + '/' + validImageIdx}>
                  <img src={getUrl(contentDef.gallery[validImageIdx].image)} />
                </Link>
              )}
            </ScSelectedImage>
            <ScImages>
              {contentDef.gallery.map((i, idx) => (
                <ScImage key={idx} $rotation={getRandomRotation()}>
                  <a onClick={() => setSelectedImageIdx(idx)}>
                    <img src={getUrl(i.image)} />
                  </a>
                </ScImage>
              ))}
            </ScImages>
          </ScGallery>
        </ScCard>
        <div>{contentDef.bodyComponent}</div>
      </ScBodyContainer>
    </ScWrapper>
  );
}

// TODO, this could be way better, but get a number between [-3 - -8] and [ 3 - 8 ]
const ROT_MIN = 3;
const ROT_MAX = 8;
const getRandomRotation = () => {
  const val = ROT_MIN + Math.random() * (ROT_MAX - ROT_MIN);
  return Math.random() > 0.5 ? val : -val;
};

export default ProjectContent;
