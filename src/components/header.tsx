import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ScBlobBorder } from './blob-border';
import { useContext, useEffect, useRef, useState } from 'react';
import { StoreContext } from '../store/context';

const ScHeader = styled.header`
  background-color: var(--color-black);
  display: flex;

  padding: 0rem 1rem;
  margin-bottom: 1rem;

  position: relative;
  z-index: 10;

  h1 {
    margin-top: 0.5rem;
    margin-bottom: 0;
    font-size: 2rem;

    .MuiSvgIcon-root {
      margin-bottom: -0.25rem;
      margin-right: 0.5rem;
    }

    &.active {
      a {
        color: var(--color-blue);
      }
    }
  }

  transition: margin-top .3s ease-out;
  margin-top: 0rem;

  &.collapsed {
    margin-top: -2.5rem;
    transition: margin-top .3s ease;
  }
`;

const ScContent = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  padding-top: 0.25rem;
  justify-content: space-evenly;
  /* sit over the blob, so it can tuck under */
  z-index: 2;

  h2 {
    font-size: 1.5rem;
    display: inline-block;
    margin: 0 0rem;

    a {
      transition: color 0.3s;
    }

    &.active {
      a {
        color: var(--color-blue);
        text-decoration: underline;
      }
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
  const  { isHeaderCollapsed } = useContext(StoreContext);

  return (
    <ScHeader className={isHeaderCollapsed ? 'collapsed' : ''}>
      <ScContent>
        <Link to={'/'}>
          <h2 className={status === 'home' ? 'active' : ''}>{'home'}</h2>
        </Link>
        <Link to={'/blog'}>
          <h2 className={status === 'blog' ? 'active' : ''}>{'blog'}</h2>
        </Link>
        <Link to={'/projects'}>
          <h2 className={status === 'projects' ? 'active' : ''}>{'projects'}</h2>
        </Link>
      </ScContent>
      <ScBlobBorder $blobType='header' />
    </ScHeader>
  );
}

export default Header;
