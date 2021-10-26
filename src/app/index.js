import React from 'react';
import { render } from 'react-dom';

import { Auth0Provider } from '@auth0/auth0-react';

import App from './App';

render(
    <Auth0Provider 
        domain="dev-ier0jj2j.us.auth0.com" 
        clientId="ihY4Y2J9vTsC4t4MNqDQL99THmd33CHB" 
        redirectUri={window.location.origin}>
        <App/>
    </Auth0Provider>,
    document.getElementById('app')
);