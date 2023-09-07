import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ScBody = styled.div`
  overflow: hidden;
  background-color: var(--color-purple);
  /* color: var(--theme-neutral); */
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 3rem;

  h2 {
    font-size: 10rem;
    color: var(--color-black);
    opacity: 0.1;
  }

  h3 {
    font-size: 5rem;
  }
  

  
  @media (max-width: 39.15rem) {
    h2 {
      font-size: 5rem;
    }
    h3 {
      font-size: 3rem;
    }
  }
`;

const ScMessage = styled.div`
  display: flex;
  /* justify-content: space-around; */
  /* align-items: center; */
  justify-content: center;
  gap: 1rem;
  width: 100%;
  text-align: center;

  h3 {
    /* font-size: 5rem; */
    color: var(--color-blue);
    position: relative;

    a {
      transition: color 0.3s;
      color: var(--color-white);
      &:hover {
        color: var(--color-blue);
      }
    }

    
    &:first-child a {
      &:before {
        content: '<';
        position: absolute;
        right:100%;
        margin-right: 1rem;
        opacity: 0;
        transition: opacity .5s;
      }
    }
    &:last-child a {
      &:after {
        content: '>';
        position: absolute;
        left:100%;
        margin-left: 1rem;
        opacity: 0;
        transition: opacity .5s;
      }
    }
    a:hover {
      &:after {
        opacity: 1;
      }
      &:before {
        opacity: 1;
      }
    }
  }
`;

function HomeContent() {
  return (
    <ScBody>
      <h2>{'HOWDY'}</h2>
      <ScMessage>
        <h3>
          <Link to={'/blog'}>{'BLOG'}</Link>
        </h3>
        <h3>{' / '}</h3>
        <h3>
          <Link to={'/projects'}>{`PROJECTS`}</Link>
        </h3>
      </ScMessage>
      <h2>{'PARTNER'}</h2>
    </ScBody>
  );
}

export default HomeContent;
