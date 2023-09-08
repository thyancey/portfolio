import styled, { css } from 'styled-components';
import { Route, Routes, useLocation } from 'react-router';
import { Navigate } from 'react-router-dom';

import { Projects } from './store/data';
import HomeContent from './components/home';
import Footer from './components/footer';
import Header from './components/header';
import BlogContent from './components/blog';
import ProjectContent from './components/project';

const TRANSITION_SPEED = '.5s';

interface ScContainerProps {
  $theme: string;
}
const ScContainer = styled.div<ScContainerProps>`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: min-content auto min-content;

  position: absolute;
  inset: 0;

  ${p => p.$theme && css`
    --theme-primary: var(--theme-${p.$theme}-primary);
    --theme-secondary: var(--theme-${p.$theme}-secondary);
    --theme-bg: var(--theme-${p.$theme}-bg);
    --theme-neutral: var(--theme-${p.$theme}-neutral);
  `}

  overflow: hidden;

  background-color: var(--theme-bg);
  color: var(--theme-neutral);
  transition: background-color ${TRANSITION_SPEED} ease-in-out, color ${TRANSITION_SPEED} ease-in-out;
`;

const getStatus = (pathname: string) => {
  if (pathname.indexOf('/projects') > -1) {
    return 'projects';
  }
  if (pathname.indexOf('/blog') > -1) {
    return 'blog';
  }
  return 'home';
}

function Layout() {
  const location = useLocation();
  const status = getStatus(location.pathname);

  const pageIdx = Projects.findIndex((p) => location.pathname.indexOf(p.route) > -1);
  let imageIdx = -1;

  let theme = 'default';
  if (pageIdx > -1) {
    theme = Projects[pageIdx].theme || 'default';
    const imagePath = location.pathname.split(`${Projects[pageIdx].route}/`)[1];
    imageIdx = imagePath !== undefined ? +imagePath : -1;
  } else {
    if (status.indexOf('blog') > -1){
      theme = 'blog';
    }
  }

  return (
    <ScContainer id='main' className={`theme-${theme}`}$theme={theme}>
      <Header status={status} />
      <>
        <Routes>
          <Route path='/' element={<HomeContent />} />
          <Route path='/blog' element={<BlogContent />} />
          {Projects.map((p) => (
            // "/*" allows for images after project path
            <Route key={p.route} path={`${p.route}/*`} element={<ProjectContent contentDef={p} imageIdx={imageIdx} />} />
          ))}
          <Route path='/projects/' element={<Navigate to={`${Projects[0].route}`} replace />} />
        </Routes>
      </>
      <Footer projects={Projects} pageIdx={pageIdx} />
    </ScContainer>
  );
}

export default Layout;
