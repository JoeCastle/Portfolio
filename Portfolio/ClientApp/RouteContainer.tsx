import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Home } from './components/pages/Home';
import { FourZeroFour } from './components/pages/FourZeroFour';
import { NavMenu } from './components/NavMenu';
import { RouteComponentProps } from 'react-router';
import { Project } from './components/pages/Project';
import projects from './data/projects';
import { Footer } from './components/Footer';

interface Props extends RouteComponentProps<any>, React.Props<any> {

}

export class RouteContainer extends React.Component<Props> {

    public render() {
        const { match } = this.props;

        return <div className='page-parent'>
            
            <NavMenu {...this.props} />
            
            <main>
                <Switch>
                    <Route exact path={`${match.url}`} render={(props: any) => <Home {...props} />} />

                    {/*https://www.codereadability.com/replacing-if-statements-with-object-lookups/ */}
                    {projects
                        .filter(item =>
                            item.projectName != 'default')
                        .map((item, i) =>
                            <Route
                                key={i}
                                exact
                                path={`${match.url}${item.attributes.routeURL}`}
                                render={(props: any) =>
                                    <Project
                                        key={item}
                                        projectName={item.projectName}
                                        {...props}
                                    />
                                }
                            />
                        )}

                    {/* Will catch any route not defined and redirect to the 404 page. */}
                    <Route path={`${match.url}404`} component={FourZeroFour} />
                    <Redirect from='*' to='/404' />
                </Switch>
            </main>
            <footer>
                <Footer {...this.props} /> {/* Eventually move to RouteContainer outside of main, figure out where scrolling and backgrounds will be. */}
            </footer>
        </div>;
    }
}