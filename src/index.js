import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './include/bootstrap'
import {InfoProvider} from './components/Context';

import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom';


ReactDOM.render(
      <InfoProvider>
          <Router>
              <App />
          </Router>
      </InfoProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
