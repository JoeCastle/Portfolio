import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Home } from './components/pages/Home';
import { FourZeroFour } from './components/pages/FourZeroFour';
import { NavMenu } from './components/NavMenu';
import { RouteComponentProps } from 'react-router';
import { Project } from './components/pages/Project';
import projects from './data/projects';
import { Footer } from './components/Footer';
import * as ReactDOM from 'react-dom';
//import { HashLink as Link } from 'react-router-hash-link';

interface Props extends RouteComponentProps<any>, React.Props<any> {

}

export class RouteContainer extends React.Component<Props> {

    //Scroll to the top of the page.
    handleScrollToTop = () => {
        let element = document.getElementById('page-parent');

        element!.classList.add('smooth-scroll');

        element!.scrollTop = 0;

        element!.classList.remove('smooth-scroll');
    }

    //Only show the scroll to top button when scrolled.
    handleScrollToTopButtonVisibility = (e: any) => {
        let element = document.getElementById('scroll-to-top-btn');
        
        if (e.target.scrollTop >= 100) {
            element!.classList.add('show');
        } else {
            element!.classList.remove('show');
        }
    }

    componentWillReceiveProps() {
        const element = ReactDOM.findDOMNode(this);
        if (element != null) {
            //this.scrollPosition = window.scrollY;
            window.scrollTo(0, 0);
        }
    }

    public render() {
        const { match } = this.props;

        return <div id='page-parent' onScroll={this.handleScrollToTopButtonVisibility}>

            <NavMenu {...this.props} />
            
            <main id='Home'>
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

            <button
                id='scroll-to-top-btn'
                onClick={this.handleScrollToTop}
                title='Scroll to top'>
                <i className='fas fa-arrow-up'></i>
            </button>           
        </div>;
    }
}