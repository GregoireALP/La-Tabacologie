import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import LaTabacologieApp from './LaTabacologieApp';
import LaTabacologieWeb from './LaTabacologieWeb';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <LaTabacologieWeb />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);