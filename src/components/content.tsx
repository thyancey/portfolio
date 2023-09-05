import styled from 'styled-components';
const ScBody = styled.div`
  overflow: hidden;
  background-color: var(--theme-bg);
  color: var(--theme-neutral);
  position: relative;

  h2 {
    color: var(--theme-primary);
  }

  h3,
  h4 {
    color: var(--theme-secondary);
  }

  flex: 1;

  display: flex;
`;

const ScLeft = styled.div`
  position: relative;
  width: 66%;
  overflow: hidden;

  box-shadow: 5px 10px 20px 10px var(--color-black);
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
`;

const ScLaunchButton = styled.a`
  display: inline-block;

  cursor: pointer;
  text-decoration: none;

  text-align: center;

  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-family: var(--font-heading);

  margin: 0 1rem 1rem 0;

  background-color: var(--theme-bg);
  color: var(--theme-primary);
  border: 2px solid var(--theme-primary);
  border-radius: 1rem;

  max-width: 15rem;

  color: var(--theme-primary);
  &:visited {
    color: var(--theme-primary);
  }
  &:hover {
    color: var(--theme-bg);
    background-color: var(--theme-primary);
  }
`;

const ScRight = styled.div`
  margin-left: 1rem;
  width: 34%;
  padding: 6rem 2rem;
  padding-top: 4rem;

  h3 {
    margin-top: 2rem;
  }

  position: relative;
`;

interface ScImageProps {
  $rotation: number;
}
const ScImage = styled.div<ScImageProps>`
  img {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom;
  }

  filter: drop-shadow(2px 4px 6px var(--color-black));
  width: 5rem;
  height: 5rem;

  transition: transform 0.3s, filter 0.3s;

  &::before {
    content: 'see more!';
    font-size: 1rem;
    position: absolute;
    line-height: 1rem;
    text-align: center;

    bottom: 1rem;

    transition: opacity 0.3s, bottom 0.3s;
    opacity: 0;
  }

  &:hover {
    filter: drop-shadow(2px 4px 6px var(--theme-primary));
    transform: rotate(${p => p.$rotation}deg) translateY(-1rem);

    &::before {
      bottom: -1.1rem;
      opacity: 1;
    }
  }

  &.active {
    width: 100%;
    height: 15rem;

    &:hover {
      width: 100%;
      transform: rotate(${p => p.$rotation}deg);
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

export type ContentDef = {
  route: string;
  name: string;
  theme?: string;
  images: string[];
  url?: string;
  repoUrl?: string;
  bodyComponent: React.ReactNode;
};

interface Props {
  contentDef: ContentDef;
}
function Content({ contentDef }: Props) {
  return (
    <ScBody>
      {/* <ScScrollCover /> */}
      <ScLeft>
        <ScBodyCopy>{contentDef.bodyComponent}</ScBodyCopy>
      </ScLeft>
      <ScRight>
        <h3>{'Prototype'}</h3>
        {contentDef.url && (
          <ScLaunchButton href={contentDef.url} target='_blank'>
            {'LAUNCH IT'}
          </ScLaunchButton>
        )}
        {contentDef.repoUrl && (
          <ScLaunchButton href={contentDef.repoUrl} target='_blank'>
            {'GITHUB'}
          </ScLaunchButton>
        )}
        <h3>{'Gallery'}</h3>
        <ScImages>
          {contentDef.images.map((i, idx) => (
            <ScImage key={idx} className={''} $rotation={getRandomRotation()}>
              <img src={i} />
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
  return Math.random() > .5 ? val : -val;
}

export default Content;
