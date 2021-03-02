import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import LaTabacologieApp from './LaTabacologieApp';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <LaTabacologieApp />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);