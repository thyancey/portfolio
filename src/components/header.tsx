import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ScBlobBorder } from './blob-border';
import Icon_Home from '@mui/icons-material/Home';

const ScHeader = styled.header`
  background-color: var(--color-black);

  display: flex;

  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  padding: 0rem 1rem;
  margin-bottom: 1rem;

  position: relative;
  z-index: 10;

  h1 {
    margin-top: 1rem;
    margin-bottom: 0;

    .MuiSvgIcon-root {
      margin-bottom: -.25rem;
      margin-right: .5rem;
    }
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

  /* @media (max-width: 40.15rem) { */
  @media (max-width: 42.15rem) {
    justify-content: center;
  }
`;

interface Props {
  status: string;
}
function Header({ status }: Props) {
  return (
    <ScHeader>
      <h1>
        <Link to={'/'}>
          <Icon_Home fontSize="large" />
          {'thomasyancey.com'}
        </Link>
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
