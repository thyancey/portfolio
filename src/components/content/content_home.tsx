import styled from 'styled-components';
const ScBody = styled.div`
  overflow: hidden;
  background-color: var(--theme-bg);
  color: var(--theme-neutral);
  position: relative;

  h2{
    color: var(--theme-primary);
  }
  
  h3,
  h4 {
    color: var(--theme-secondary);
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;

function HomeContent() {
  return (
    <ScBody>
      <h1>{'. . . this page is under construction . . .'}</h1>
    </ScBody>
  );
}

export default HomeContent;
