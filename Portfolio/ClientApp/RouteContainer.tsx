import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Home } from './components/pages/Home';
import { FourZeroFour } from './components/pages/FourZeroFour';
import { NavMenu } from './components/NavMenu';
import { RouteComponentProps } from 'react-router';
import { Project } from './components/pages/Project';

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
                    <Route
                        exact
                        path={`${match.url}Projects/ShoothillWebsite`}
                        render={(props: any) =>
                            <Project
                                projectName='shoothillWebsite'
                                {...props}
                            />
                        }
                    />

                    <Route
                        exact
                        path={`${match.url}Projects/ArlaBOB`}
                        render={(props: any) =>
                            <Project
                                title='ArlaBOB'
                                description='desc'
                                technologies={['tech1', 'tech2', 'tech3']}
                                tags={['tag1', 'tag2', 'tag3']}
                                img='img'
                                {...props}
                            />
                        }
                    />

                    {/* Will catch any route not defined and redirect to the 404 page. */}
                    <Route path={`${match.url}404`} component={FourZeroFour} />
                    <Redirect from='*' to='/404' />
                </Switch>
            </main>
        </div>;
    }
}