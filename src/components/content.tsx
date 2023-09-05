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
  flex: 1;
  padding: 6rem 1rem;

  position: relative;
`;

const ScDivider = styled.div`
  width: 2px;
  left:0;
  top: 6rem;
  bottom: 6rem;
  background-color: var(--theme-primary);
  position: absolute;
`

const ScImages = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  > *:first-child {
    height: 66%;
  }
`;

const ScBodyImage = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;

  padding: 0.5rem;

  /* box-shadow: 2px 2px 2px 2px var(--color-black); */
  filter: drop-shadow(2px 4px 6px var(--color-black));

  > img {
    background-size: contain;
    max-width: 100%;
    max-height: 100%;
  }
`;

const ScBodyThumbnails = styled.div`
  text-align: center;

  display: flex;
  gap: 1rem;
  padding-top: 1rem;
  align-items: start;
  justify-content: space-evenly;
  filter: drop-shadow(2px 4px 4px var(--color-black));

  > * {
    width: 6rem;
    max-width: calc(33% - 1rem);
    height: auto;
    background-size: contain;
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
          <ScBodyImage>{contentDef.images[0] && <img src={contentDef.images[0]} />}</ScBodyImage>
          <ScBodyThumbnails>
            {contentDef.images.length > 1 && contentDef.images.slice(1).map((i, idx) => <img key={idx} src={i} />)}
          </ScBodyThumbnails>
        </ScImages>
      </ScRight>
    </ScBody>
  );
}

export default Content;
