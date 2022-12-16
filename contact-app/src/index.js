import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
/* font awesom */
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'

/* bootsrap */
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);


