import styled from 'styled-components';
const ScBody = styled.div`
  background-color: var(--theme-secondary);
  color: var(--theme-primary);
  
  flex: 1;

  overflow: auto;

  display: grid;
  padding: 2rem 0 2rem 1rem;

  grid-template-columns: 66% 34%;
  grid-template-rows: 66% 34%;
`;

const ScBodyCopy = styled.div`
  border-right: 0.25rem solid var(--color-black);

  grid-column: 1;
  grid-row: 1 / span 2;
`;

const ScBodyImage = styled.div`
  grid-column: 2;
  grid-row: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem;

  >img{
    background-size: contain;
    width: 100%;
  }
`;

const ScBodyThumbnails = styled.div`
  text-align: center;

  grid-column: 2;
  grid-row: 2;
  display: flex;

  justify-content: space-evenly;

  > * {
    width: 6rem;
    height: 6rem;
    background-size: contain;
  }
`;

export type ContentDef = {
  route: string,
  name: string,
  images: string[],
  url: string,
  bodyComponent: React.ReactNode
}

interface Props {
  contentDef: ContentDef;
}
function Content({ contentDef }: Props) {
  return (
    <ScBody>
      <ScBodyCopy>
        {contentDef.bodyComponent}
      </ScBodyCopy>
      <ScBodyImage>
        {contentDef.images[0] && <img src={contentDef.images[0]} />}
      </ScBodyImage>
      <ScBodyThumbnails>
        {contentDef.images.length > 1 && (
          contentDef.images.slice(1).map((i, idx) => (
            <img key={idx} src={i} />
          ))
        )}
      </ScBodyThumbnails>
    </ScBody>
  );
}

export default Content;
