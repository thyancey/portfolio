import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ScBlobBorder } from './blob-border';
import { useContext } from 'react';
import { StoreContext } from '../store/context';

const ScHeader = styled.header`
  background-color: var(--color-black);
  display: flex;

  padding: 0rem 1rem;
  margin-bottom: 1rem;

  position: relative;
  z-index: 10;

  transition: margin-top 0.3s ease-out;
  margin-top: 0rem;

  &.collapsed {
    margin-top: -2.5rem;
    transition: margin-top 0.3s ease;
  }
`;

const ScHeaderLinks = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  padding-top: 0.25rem;
  justify-content: space-evenly;
  /* sit over the blob, so it can tuck under */
  z-index: 2;

  a {
    color: var(--site-link);
  }

  h2 {
    font-size: 1.5rem;
    display: inline-block;
    margin: 0 0rem;
    color: var(--site-link);

    &:hover {
      text-decoration: underline;
      color: var(--color-green);
    }

    a {
      transition: color 0.3s;
    }

    &.active {
      color: var(--color-green);
    }
  }

  padding-top: 0.75rem;
  @media (max-width: 42.15rem) {
    /* tuck the blob in more */
    margin-bottom: -0.75rem;
  }
`;

interface Props {
  status: string;
}
function Header({ status }: Props) {
  const { isHeaderCollapsed } = useContext(StoreContext);
  const blobGlow = 'var(--theme-blobglow, "")'; // Default value or CSS variable

  return (
    <ScHeader className={isHeaderCollapsed ? 'collapsed' : ''}>
      <ScHeaderLinks>
        <Link to={'/'}>
          <h2 className={status === 'home' ? 'active' : ''}>{'home'}</h2>
        </Link>
        <Link to={'/blog'}>
          <h2 className={status === 'blog' ? 'active' : ''}>{'blog'}</h2>
        </Link>
        <Link to={'/projects'}>
          <h2 className={status === 'projects' ? 'active' : ''}>{'projects'}</h2>
        </Link>
      </ScHeaderLinks>
      <ScBlobBorder $blobType='header' $blobGlow={blobGlow} className="animation"/>
    </ScHeader>
  );
}

export default Header;
