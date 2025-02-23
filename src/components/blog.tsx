import styled from 'styled-components';
const ScBody = styled.div`
  overflow: hidden;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 4s 1s;
  opacity: 0;

  .theme-blog & {
    opacity: 1;
  }
`;


function BlogContent() {
  return (
    <ScBody>
      <iframe src="https://tomyancey.tumblr.com/" width="100%" height="100%" frameBorder="0"/>
    </ScBody>
  );
}

export default BlogContent;