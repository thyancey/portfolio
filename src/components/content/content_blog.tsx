import styled from 'styled-components';
const ScBody = styled.div`
  overflow: hidden;
  background-color: var(--theme-bg);
  color: var(--theme-neutral);
  position: relative;


  display: flex;
  align-items: center;
  justify-content: center;
`;

function BlogContent() {
  return (
    <ScBody>
      <iframe src="https://tomyancey.tumblr.com/" width="100%" height="100%" frameBorder="0"/>
    </ScBody>
  );
}

export default BlogContent;