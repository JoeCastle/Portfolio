import { createServerRenderer, RenderResult } from "aspnet-prerendering";
//import { createMemoryHistory } from "history";
import * as React from "react";
import { renderToString } from "react-dom/server";
import { Helmet } from "react-helmet";
import { StaticRouter } from "react-router-dom";
import { routes } from "./routes";
//import { connect } from "domain-wait";
//import './scss/site.scss';
//import 'bootstrap';

//https://github.com/hartmannr76/dotnet-cra-ssr
//https://github.com/Apak00/react-dotnet-ssr
//https://medium.com/@apakmahmud/server-side-rendering-react-with-net-core-1f3eaf8962fb
//https://gettoshare.com/2018/01/04/use-sass-with-asp-net-core-angular-and-webpack/
//https://weekly-geekly.github.io/articles/426147/index.html
//https://github.com/NickMaev/react-core-boilerplate/blob/master/RCB.TypeScript/Views/Main/Index.cshtml

function renderHelmet() {
    const helmetData: any = Helmet.renderStatic();
    let helmetStrings = "";
    const helmetDataKeys = Object.keys(helmetData);
    helmetDataKeys.forEach(key => {
        if (helmetData.hasOwnProperty(key)) {
            helmetStrings += helmetData[key].toString();
        }
    });
    return helmetStrings;
}

const createGlobals = (helmetStrings: any) => ({
    helmetStrings
});

export default createServerRenderer(params => {
    return new Promise<RenderResult>(resolve => {
        //  Prepare Redux store with in-memory history
        const basename = params.baseUrl.substring(0, params.baseUrl.length - 1); // Remove trailing slash.
        //const urlAfterBasename = params.url.substring(basename.length);
        const routerContext = {} as any;

        // Prepare an instance of the application
        const app = (
            <StaticRouter
                basename={basename}
                context={routerContext}
                location={params.location.path}
                children={routes}
            />
        );
        const renderApp = () => {
            return renderToString(app);
        };

        //  If there's a redirection, just send this information back to the host application.
        if (routerContext.url) {
            resolve({
                redirectUrl: routerContext.url,
                globals: createGlobals(renderHelmet())
            });

            return;
        }
        //  We also send the redux store state, so the client can continue execution where the server left off.
        resolve({
            html: renderApp(),
            globals: createGlobals(renderHelmet())
        });
    });
});