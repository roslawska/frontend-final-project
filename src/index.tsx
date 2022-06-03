import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

const app = (
  <Router>
    <App />
  </Router>
);

const root = document.getElementById('root');

render(app, root);

serviceWorker.unregister();
