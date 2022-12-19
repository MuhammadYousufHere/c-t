import React from 'react';
import ReactDOM from 'react-dom/client';
import './custom.scss';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter as Router } from 'react-router-dom';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN || 'myauth-app.us.auth0.com'}
      clientId={
        process.env.REACT_APP_AUTH0_CLIENT_ID ||
        'v6rL9hyCO1FnoRSc9YIMupxRDcnH1OjB'
      }
      redirectUri={window.location.origin + '/visualise'}
    >
      <Router>
        <App />
      </Router>
    </Auth0Provider>
  </React.StrictMode>
);
