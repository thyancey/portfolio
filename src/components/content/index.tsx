import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AssetMap, { getUrl } from '../../assets';
import { ContentDef } from './data';
import Icon_Close from '@mui/icons-material/Close';
import Icon_KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import Icon_KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Icon_RocketLaunch from '@mui/icons-material/RocketLaunch';
import Icon_Code from '@mui/icons-material/Code';

const ScBody = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;

  background-color: var(--theme-bg);
  color: var(--theme-neutral);

  h2 {
    color: var(--theme-primary);
  }

  h3,
  h4 {
    color: var(--theme-secondary);
  }
`;

interface ScNoiseProps {
  $blur?: number;
}
const ScNoise = styled.div<ScNoiseProps>`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: url(${AssetMap.noise_01});
  opacity: 0.1;
  filter: blur(${(p) => p.$blur || 0}px);
`;

const ScLeft = styled.div`
  position: relative;
  width: 66%;
  overflow: hidden;

  /* box-shadow: 1px 1px 20px 5px var(--color-black); */
`;

// const ScScrollCover = styled.div`
//   pointer-events: none;
//   position: absolute;
//   inset: -1rem;
//   background: var(--color-transparent);
//   background: linear-gradient(
//     0deg,
//     var(--color-black) 0%,
//     var(--color-transparent) 5%,
//     var(--color-transparent) 95%,
//     var(--color-black) 100%
//   );
// `;

const ScBodyCopy = styled.div`
  overflow: auto;
  height: 100%;

  padding: 6rem 2rem;

  >div{
    max-width: 40rem;
  }
`;

const ScLaunchButton = styled.a`
  display: inline-block;

  text-decoration: none;
  text-align: center;

  padding: 0.25rem 1rem 0.25rem 0.75rem;
  font-size: 1rem;
  font-family: var(--font-heading);

  margin: 0 1rem 1rem 0;

  background-color: var(--theme-bg);
  color: var(--theme-primary);
  border: 2px solid var(--theme-primary);
  border-radius: 1rem;

  max-width: 15rem;

  cursor: pointer;

  transition: background-color 0.5s ease, color 0.3s ease, box-shadow 0.3s ease;

  /* color: var(--theme-primary); */
  color: var(--theme-bg);
  background-color: var(--theme-primary);
  &:visited {
    /* color: var(--theme-primary); */
    color: var(--theme-bg);
  }
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

const ScRight = styled.div`
  margin-left: 1rem;
  width: 34%;
  padding: 4rem 2rem 6rem 3rem;
  /* box-shadow: -1px 0px 20px 5px var(--color-black); */
  /* background: linear-gradient(90deg, var(--color-black) -15%, var(--theme-bg) 10%); */

  h3 {
    margin-top: 2rem;
  }

  position: relative;
`;

interface ScImageProps {
  $rotation: number;
}
const ScImage = styled.div<ScImageProps>`
  width: 5rem;
  height: 5rem;
  position: relative;

  img {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom;

    border-radius: 1rem;
    box-shadow: 4px 4px 6px var(--color-black);
    transition: box-shadow 0.3s, transform 0.3s;
  }

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

  &:hover {
    img {
      transform: rotate(${(p) => p.$rotation}deg) translateY(-1rem);
      border: 2px solid var(--theme-primary);
      box-shadow: 0px 0px 8px 2px var(--theme-primary), 10px 12px 10px var(--color-black);
    }

    &::before {
      opacity: 1;
      bottom: -0.75rem;
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

const ScImages = styled.div`
  height: 100%;

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
  right: 2rem;
  z-index: 1;

  &:first-child {
    right: auto;
    left: 2rem;
  }
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
  }
`;

interface Props {
  contentDef: ContentDef;
  imageIdx?: number;
}
function Content({ contentDef, imageIdx = -1 }: Props) {
  const prevImageIdx = imageIdx <= 0 ? -1 : imageIdx - 1;
  const nextImageIdx = imageIdx >= contentDef.gallery.length - 1 ? -1 : imageIdx + 1;
  const galleryImage = (imageIdx > -1 && contentDef.gallery[imageIdx]) || null;

  return (
    <ScBody>
      {/* <ScScrollCover /> */}
      <ScNoise $blur={1} />
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
        <ScNoise $blur={1} />

        <ScModalImg>{galleryImage && <img src={getUrl(galleryImage.image)} />}</ScModalImg>

        <Link to={contentDef.route}>
          <Icon_Close className='icon-large' />
        </Link>
        {/* <Link to={contentDef.route}><IconButton size="large"><Icon_Close /></IconButton></Link> */}

        <p>{(galleryImage && galleryImage.caption) || ''}</p>
      </ScModal>
      <ScLeft>
        <ScBodyCopy><div>{contentDef.bodyComponent}</div></ScBodyCopy>
      </ScLeft>
      <ScRight>
        <h3>{'CHECK IT OUT'}</h3>
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
        <h3>{'Gallery'}</h3>
        <ScImages>
          {contentDef.gallery.map((i, idx) => (
            <ScImage key={idx} $rotation={getRandomRotation()}>
              <Link to={contentDef.route + '/' + idx}>
                <img src={getUrl(i.image)} />
              </Link>
            </ScImage>
          ))}
        </ScImages>
      </ScRight>
    </ScBody>
  );
}

// TODO, this could be way better, but get a number between [-3 - -8] and [ 3 - 8 ]
const ROT_MIN = 3;
const ROT_MAX = 8;
const getRandomRotation = () => {
  const val = ROT_MIN + Math.random() * (ROT_MAX - ROT_MIN);
  return Math.random() > 0.5 ? val : -val;
};

export default Content;
