import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { getUrl } from '../assets';
import { ProjectDef } from '../store/data';
import Icon_Close from '@mui/icons-material/Close';
import Icon_KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import Icon_KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

interface ScCarouselBtnProps {
  $type: 'prev' | 'next' | 'close';
}
const ScCarouselRoundBtn = styled.div<ScCarouselBtnProps>`
  position: absolute;
  z-index: 1;
  display: flex;

  border-radius: 50%;
  border: 0.25rem solid var(--theme-primary);

  padding: 0.25rem;

  border-radius: 1rem;
  cursor: pointer;

  color: var(--theme-bg);
  background-color: var(--theme-primary);
  box-shadow: 0.1rem 0.1rem 0.15rem 0.15rem var(--color-black);

  --rot-start: 0deg;

  ${(p) =>
    p.$type === 'prev' &&
    css`
      right: auto;
      left: -2.25rem;
      top: 50%;
      transform: translateY(-50%);
      --rot-start: 3deg;
    `}
  ${(p) =>
    p.$type === 'next' &&
    css`
      left: auto;
      right: -2.25rem;
      top: 50%;
      transform: translateY(-50%);
      --rot-start: -3deg;
    `}
  ${(p) =>
    p.$type === 'close' &&
    css`
      left: auto;
      right: -2.25rem;
      top: -2rem;
      --rot-start: 10deg;
    `}

  transform: rotate(var(--rot-start));

  @media (hover: hover) {
    &:hover {
      /* 
      color: var(--theme-bg);
      background-color: var(--theme-primary);
      box-shadow: -0.15rem 0.15rem 0.5rem 0.25rem var(--color-black); */
      color: var(--theme-primary);
      background-color: var(--theme-bg);
      box-shadow: 0.15rem 0.15rem 0.25rem 0.15rem var(--color-black);

      ${(p) =>
        p.$type === 'prev' &&
        css`
          transform: rotate(-3deg) scale(1.2);
        `}
      ${(p) =>
        p.$type === 'next' &&
        css`
          transform: rotate(3deg) scale(1.2);
        `}
      ${(p) =>
        p.$type === 'close' &&
        css`
          transform: rotate(14deg) scale(1.2);
        `}
    }
  }

  transition: transform 0.3s ease-out, background-color 0.3s, color 0.3s, box-shadow 0.3s;
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
  /* position: relative; */

  /* height: min-content; */
  /* max-height: 80%; */
  max-width: 50rem;

  background-color: var(--theme-bg);
  border-radius: 2rem;
  box-shadow: 0.15rem 0.15rem 0.5rem 0.25rem var(--color-black);
  border: 0.25rem solid var(--theme-primary);
  text-align: left;
  padding: 1.5rem;
  padding-bottom: 2rem;

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
    padding-right: 1rem;
  }

  @media (max-width: 42.15rem) {
    padding: 1rem;
    padding-bottom: 2rem;
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
    filter: drop-shadow(2px 4px 6px var(--theme-primary));

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
    padding-bottom: 0.75rem;
    color: var(--theme-neutral);
    margin: 1rem 0 0 0;
    max-height: 30%;
    border-bottom: 2px dashed var(--theme-primary);
  }

  @media (max-width: 42.15rem) {
    h2 {
      font-size: 1.25rem;
    }
    p {
      font-size: 0.75rem;
    }
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
          <ScCarouselRoundBtn $type={'close'}>
            <Icon_Close className='icon-med' />
          </ScCarouselRoundBtn>
        </Link>
        {prevImageIdx > -1 && (
          <Link to={contentDef.route + '/' + prevImageIdx}>
            <ScCarouselRoundBtn $type={'prev'}>
              <Icon_KeyboardArrowLeft className='icon-med' />
            </ScCarouselRoundBtn>
          </Link>
        )}
        {nextImageIdx > -1 && (
          <Link to={contentDef.route + '/' + nextImageIdx}>
            <ScCarouselRoundBtn $type={'next'}>
              <Icon_KeyboardArrowRight className='icon-med' />
            </ScCarouselRoundBtn>
          </Link>
        )}

        <ScSubModal>
          {modalTitle && <h2>{modalTitle}</h2>}
          {galleryImage && <img src={getUrl(galleryImage.image)} />}
          {galleryImage && galleryImage.caption && <p>{galleryImage.caption}</p>}
        </ScSubModal>
      </ScModal>
    </ScModalContainer>
  );
}

export default ProjectModal;
