import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import createHashHistory from 'history/createHashHistory';
const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL })
ReactDOM.render(<Router history={hashHistory}><App /></Router>, document.getElementById('root'));
registerServiceWorker();
