import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getUrl } from '../assets';
import { ProjectDef } from '../store/data';

interface ScImageProps {
  $rotation: number;
}

const ScImage = styled.div<ScImageProps>`
  width: 5rem;
  height: 5.5rem;
  position: relative;

    /* big boy */
  @media (min-width: 81.25rem) {
    width: 8.25rem;
    height: 5.5rem;
  }


  /* tablety */
  @media (max-width: 53rem) {
    width: 4rem;
    height: 4rem;
  }

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
  
  /*
  &::before {
    content: 'see more!';
    font-size: 1rem;
    position: absolute;
    line-height: 1rem;
    text-align: center;
    pointer-events: none;
    color: var(--theme-primary);

    opacity: 0;
    bottom: 1rem;
    
    transform: rotate(${(p) => p.$rotation}deg);
    transition: opacity 0.3s 0.1s, bottom 0.2s ease;
  }
  */

  &:hover {
    img {
      transform: rotate(${(p) => p.$rotation}deg) translateY(-0.5rem);
      border: 2px solid var(--theme-primary);
      box-shadow: 0px 0px 8px 2px var(--theme-primary), 8px 10px 5px var(--color-black);
    }
    /*
    &::before {
      opacity: 1;
      bottom: -1rem;
    }
    */
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

export const ScGallery = styled.div`
  display: flex;
  justify-content: start;
  align-content: start;
  flex-wrap: wrap;

  gap: 1rem;
  padding-bottom: 0rem;

  border: 2px dashed var(--theme-primary);
  border-radius: 1.5rem;
  padding: 1rem;

  transition: width 0.3s, height 0.3s;
`;

interface Props {
  contentDef: ProjectDef;
  imageIdx?: number;
}
function GalleryActive({ contentDef }: Props) {
  return (
    <ScGallery>
      {contentDef.gallery.map((i, idx) => (
        <ScImage key={idx} $rotation={getRandomRotation()}>
          <Link to={contentDef.route + '/' + idx}>
            <img src={getUrl(i.thumbnail || i.image)} />
          </Link>
        </ScImage>
      ))}
    </ScGallery>
  );
}

// TODO, this could be way better, but get a number between [-3 - -8] and [ 3 - 8 ]
const ROT_MIN = 3;
const ROT_MAX = 8;
const getRandomRotation = () => {
  const val = ROT_MIN + Math.random() * (ROT_MAX - ROT_MIN);
  return Math.random() > 0.5 ? val : -val;
};

export default GalleryActive;
