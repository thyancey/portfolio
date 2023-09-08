import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getUrl } from '../assets';
import { ProjectDef } from '../store/data';
import Icon_Close from '@mui/icons-material/Close';
import Icon_KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import Icon_KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

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


interface Props {
  contentDef: ProjectDef;
  imageIdx?: number;
}
function ProjectModal({ contentDef, imageIdx = -1 }: Props) {
  const prevImageIdx = imageIdx <= 0 ? -1 : imageIdx - 1;
  const nextImageIdx = imageIdx >= contentDef.gallery.length - 1 ? -1 : imageIdx + 1;
  const galleryImage = (imageIdx > -1 && contentDef.gallery[imageIdx]) || null;

  return (
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
  );
}

export default ProjectModal;
