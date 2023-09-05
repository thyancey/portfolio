import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ScBlobBorder } from './blob-border';

const ScHeader = styled.header`
  background-color: var(--color-black);

  display: flex;

  align-items: center;
  justify-content: space-between;

  padding: 0rem 1rem;

  position: relative;
  z-index: 10;

  h1 {
    margin-top: 1rem;
  }

  h2 {
    font-size: 1.5rem;
    margin: 1rem 2rem;
    display: inline;

    &.active {
      a {
        color: var(--color-grey-light);
        text-decoration: underline;
      }
    }
  }
`;

interface Props {
  status: string;
}
function Header({ status }: Props) {

  return (
    <ScHeader>
      <h1>
        <Link to={'/'}>{'thomasyancey.com'}</Link>
      </h1>
      <div>
        <h2 className={status === 'blog' ? 'active' : ''}>
          <Link to={'/blog'}>{'blog'}</Link>
        </h2>
        <h2 className={status === 'projects' ? 'active' : ''}>
          <Link to={'/projects'}>{'projects'}</Link>
        </h2>
      </div>
      <ScBlobBorder $blobType='header' />
    </ScHeader>
  );
}

export default Header;
