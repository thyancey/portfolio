import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { getUrl } from '../assets';
import { ProjectDef } from '../store/data';
import Icon_Close from '@mui/icons-material/Close';
import Icon_KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import Icon_KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

interface ScCarouselBtnProps {
  $type: 'prev' | 'next';
}
const ScCarouselRoundBtn = styled.div<ScCarouselBtnProps>`
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);

  background-color: var(--theme-bg);
  border-radius: 50%;
  box-shadow: 0 0 1rem 0.5rem var(--theme-primary);

  padding: 0.25rem;
  padding-bottom: 0;

  ${(p) =>
    p.$type === 'prev' &&
    css`
      right: auto;
      left: -2.25rem;
    `}
  ${(p) =>
    p.$type === 'next' &&
    css`
      left: auto;
      right: -2.25rem;
    `}
`;

const ScModalContainer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2.5rem;
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

const ScModal = styled.div`
  z-index: 1;
  position: relative;

  /* height: min-content; */
  /* max-height: 80%; */
  max-width: 50rem;

  background-color: var(--theme-bg);
  border-radius: 2rem;
  box-shadow: 0.3rem 0.4rem 0.3rem 0.1rem var(--color-black);
  text-align: left;
  padding: 1.5rem;
  padding-bottom: 1rem;

  /* for animating in/out */
  pointer-events: none;
  opacity: 0;
  min-height: 40%;
  width: 100%;
  transform: translateY(50%);
  transition: transform 0.5s, opacity 0.5s;

  &.active {
    /* bottom: 50%; */
    pointer-events: all;
    opacity: 1;
    transform: translateY(0%);
  }

  h2 {
    text-align: center;
    padding-right: 4rem;
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
    right: -2.25rem;
    top: -1rem;
    z-index: 1;

    background-color: var(--theme-bg);
    box-shadow: 0 0 1rem 0.5rem var(--theme-primary);
    border-radius: 50%;

    padding: 0.7rem;
    padding-bottom: 0.5rem;
  }

  @media (max-width: 42.15rem) {
    padding: 1rem;
  }
`;

const ScSubModal = styled.div`
  display: flex;
  flex-direction: column;

  /* this allows for some shadows */
  padding: 0.5rem;

  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: auto;


  img {
    flex: 1;
    object-fit: contain;
    filter: drop-shadow(2px 4px 6px var(--color-black));

    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;

    /* TODO: this isnt a good solution, but it makes regular desktop not show stupid large modals for tall images */
    max-height: 37rem;
  }

  > p {
    border-top: 2px dashed var(--theme-primary);
    padding-top: 0.75rem;
    color: var(--theme-primary);
    margin: 1rem 0 0 0;
    max-height: 30%;
  }
`;

interface Props {
  contentDef: ProjectDef;
  imageIdx?: number;
}
function ProjectModal({ contentDef, imageIdx = -1 }: Props) {
  const prevImageIdx = imageIdx <= 0 ? -1 : imageIdx - 1;
  const nextImageIdx = imageIdx >= contentDef.gallery.length - 1 ? -1 : imageIdx + 1;
  const galleryImage = (imageIdx > -1 && contentDef.gallery[imageIdx]) || null;

  const modalTitle = (imageIdx > -1 && contentDef.gallery[imageIdx].title) || null;
  return (
    <ScModalContainer>
      <ScModalFade className={imageIdx > -1 ? 'active' : ''} />

      <ScModal className={imageIdx > -1 ? 'active' : ''}>
        {/* X button */}
        <Link to={contentDef.route}>
          <Icon_Close className='icon-large' />
        </Link>
        {prevImageIdx > -1 && (
          <ScCarouselRoundBtn $type={'prev'}>
            <Link to={contentDef.route + '/' + prevImageIdx}>
              <Icon_KeyboardArrowLeft className='icon-xlarge' />
            </Link>
          </ScCarouselRoundBtn>
        )}
        {nextImageIdx > -1 && (
          <ScCarouselRoundBtn $type={'next'}>
            <Link to={contentDef.route + '/' + nextImageIdx}>
              <Icon_KeyboardArrowRight className='icon-xlarge' />
            </Link>
          </ScCarouselRoundBtn>
        )}

        <ScSubModal>
          {modalTitle && <h2>{modalTitle}</h2>}
          {galleryImage && <img src={getUrl(galleryImage.image)} />}
          <p>{(galleryImage && galleryImage.caption) || ''}</p>
        </ScSubModal>
      </ScModal>
    </ScModalContainer>
  );
}

export default ProjectModal;
