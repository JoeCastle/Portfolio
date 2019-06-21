import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Home } from './components/Home';
import { FourZeroFour } from './components/FourZeroFour';
import { NavMenu } from './components/NavMenu';
import { RouteComponentProps } from 'react-router';

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

                    {/* Will catch any route not defined and redirect to the 404 page. */}
                    <Route path={`${match.url}404`} component={FourZeroFour} />
                    <Redirect from='*' to='/404' />
                </Switch>
            </main>
        </div>;
    }
}