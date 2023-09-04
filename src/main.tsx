import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './layout.tsx';
import './theme/index.css';
import { StoreProvider } from './store/context.tsx';
import { HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider>
      <HashRouter>
        <Layout />
      </HashRouter>
    </StoreProvider>
  </React.StrictMode>
);
