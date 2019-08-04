//import './css/site.css';
//require('core-js/modules/es6.symbol');
//import 'babel-polyfill';
//import 'core-js/es/map';
//import 'core-js/es/set';

/*import 'react-app-polyfill/ie11';
import 'core-js/features/array/find';
import 'core-js/features/array/includes';
import 'core-js/features/number/is-nan';*/

//import 'core-js/es6/symbol';

//SSR
//https://medium.com/@apakmahmud/server-side-rendering-react-with-net-core-1f3eaf8962fb
//https://github.com/Apak00/react-dotnet-ssr
//https://alanocoder.com/react-with-server-side-rendering-get-started-with-asp-net-core/
//https://github.com/NickMaev/react-core-boilerplate
//https://github.com/antonybudianto/cra-universal
//https://www.robertcooper.me/react-server-side-rendering
//https://mac-blog.org.ua/ssr-dotnet-core/
//React todo - SSR and authentication

import './scss/site.scss';
//import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import * as RoutesModule from './routes';

let routes = RoutesModule.routes;

function renderApp() {
    // This code starts up the React app when it runs in a browser. It sets up the routing
    // configuration and injects the app into a DOM element.
    const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')!;
    ReactDOM.hydrate(
        <AppContainer>
            <BrowserRouter children={ routes } basename={ baseUrl } />
        </AppContainer>,
        document.getElementById('react-app')
    );
}

renderApp();

// Allow Hot Module Replacement
if (module.hot) {
    module.hot.accept('./routes', () => {
        routes = require<typeof RoutesModule>('./routes').routes;
        renderApp();
    });
}
