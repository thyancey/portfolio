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

  /* padding: 2rem 0 2rem 1rem; */
  display: flex;
`;

const ScLeft = styled.div`
  position: relative;
  width: 66%;
  overflow: hidden;
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

const ScRight = styled.div`
  margin-left: 1rem;
  width: 34%;
  padding: 6rem 2rem;

  position: relative;
`;

const ScDivider = styled.div`
  width: 2px;
  top: 6rem;
  right: 100%;
  bottom: 6rem;
  background-color: var(--theme-primary);
  position: absolute;
`;

const ScImage = styled.div`
  img {
    position:absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom;
  }
`;


// TODO: these images are gross
const ScImages = styled.div`
  height: 100%;
  max-width: 20rem;

  display: flex;
  flex-wrap: wrap;
  column-gap: 0.75rem;
  row-gap: 1.25rem;
  justify-content: start;
  align-content: start;
  cursor: pointer;

  transition: width .3s, height .3s;

  ${ScImage} {
    filter: drop-shadow(2px 4px 6px var(--color-black));
    width: 5rem;
    height: 5rem;

    transition: transform .3s, filter .3s;

    &:hover{
      filter: drop-shadow(2px 4px 6px var(--theme-primary));
      transform: rotate(-6deg);
    }

    &.active {
      width: 100%;
      height: 15rem;

      &:hover{
        width: 100%;
        transform: rotate(3deg);
      }
    }
  }
`;

export type ContentDef = {
  route: string;
  name: string;
  theme?: string;
  images: string[];
  url: string;
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
        <ScDivider />
        <ScImages>
          {contentDef.images.map((i, idx) => (
            <ScImage key={idx} className={idx === 0 ? 'active' : ''}>
              <img src={i} />
            </ScImage>
          ))}
        </ScImages>
      </ScRight>
    </ScBody>
  );
}

export default Content;
