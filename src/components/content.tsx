import styled from 'styled-components';
const ScBody = styled.div`
  overflow: hidden;
  background-color: var(--theme-bg);
  color: var(--theme-neutral);

  h2{
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

const ScScrollCover = styled.div`
  pointer-events: none;
  position: absolute;
  inset: 0;
  background: var(--theme-bg);
  background: linear-gradient(
    0deg,
    var(--theme-bg) 10%,
    var(--theme-bg-transparent) 20%,
    var(--theme-bg-transparent) 85%,
    var(--theme-bg) 95%
  );
`;

const ScBodyCopy = styled.div`
  border-right: 0.25rem solid var(--color-black);

  overflow: auto;
  height: 100%;

  padding: 6rem 2rem;
`;

const ScImages = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  > *:first-child {
    height: 66%;
  }
`;

const ScBodyImage = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;

  padding: 0.5rem;

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
      <ScLeft>
        <ScScrollCover />
        <ScBodyCopy>{contentDef.bodyComponent}</ScBodyCopy>
      </ScLeft>
      <ScImages>
        <ScBodyImage>{contentDef.images[0] && <img src={contentDef.images[0]} />}</ScBodyImage>
        <ScBodyThumbnails>
          {contentDef.images.length > 1 && contentDef.images.slice(1).map((i, idx) => <img key={idx} src={i} />)}
        </ScBodyThumbnails>
      </ScImages>
    </ScBody>
  );
}

export default Content;
