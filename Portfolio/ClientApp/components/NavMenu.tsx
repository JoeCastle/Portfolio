import * as React from 'react';
import { RouteComponentProps } from 'react-router';
//import { Link, NavLink } from 'react-router-dom';
import { NavHashLink as NavLink } from 'react-router-hash-link';
//import { HashLink as Link } from 'react-router-hash-link';
//const BrowserHistory = require('react-router/lib/BrowserHistory').default;



interface Props extends RouteComponentProps<any>, React.Props<any> {
}

export class NavMenu extends React.Component<Props> {

    public render() {

        return <nav id='main-nav' className='navmain'>

            {/*<nav className='navbar navbar-inverse'>
                <div className='nav-container'>
                    <div className='navbar-header'>
                        <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                            <span className='sr-only'>Toggle navigation</span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                        </button>
                        <Link className='navbar-brand' to={'/'}>Joseph Castle</Link>
                    </div>
                    <div className='clearfix'></div>
                    <div className='navbar-collapse collapse'>
                        <ul className='nav navbar-nav'>
                            <li>
                                <NavLink to={'/'} exact activeClassName='active'>
                                    <span className='glyphicon glyphicon-home'></span> Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/'} exact activeClassName='active'>
                                    <span className='glyphicon glyphicon-home'></span> Page 1
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/'} exact activeClassName='active'>
                                    <span className='glyphicon glyphicon-home'></span> Page 2
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>*/}

            {/*<nav className='navbar navbar-inverse'>
                <Link className='navbar-brand' to={'/'}>Joseph Castle</Link>
                <button type='button' className='navbar-toggle navbar-toggler' data-toggle='collapse' data-target='.navbar-collapse'>
                            <span className='sr-only'>Toggle navigation</span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                        </button>
                    <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                    <ul className='nav navbar-nav'>
                        <li>
                            <NavLink to={'/'} exact activeClassName='active'>
                                <span className='glyphicon glyphicon-home'></span> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/'} exact activeClassName='active'>
                                <span className='glyphicon glyphicon-home'></span> Page 1
                                </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/'} exact activeClassName='active'>
                                <span className='glyphicon glyphicon-home'></span> Page 2
                                </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>*/}


            <div className='navbar navbar-inverse'>
                <div className='nav-container'>
                    <div className='navbar-header'>
                        <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                            <span className='sr-only'>Toggle navigation</span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                        </button>
                        <NavLink className='navbar-brand' smooth to={'/#Home'}><h1>Joseph Castle</h1></NavLink>
                    </div>
                    <div className='clearfix'></div>
                    <div className='navbar-collapse collapse'>
                        <ul className='nav navbar-nav'>
                            <li>
                                <NavLink smooth to={'/#Home'} exact activeClassName='active'>
                                    <span className='glyphicon glyphicon-home'></span> Home
                                    </NavLink>
                            </li>
                            {/* https://css-tricks.com/snippets/jquery/smooth-scrolling/ */}
                            <li>
                                <NavLink smooth to='/#About' exact activeClassName='active'><i className='fas fa-info'></i> About</NavLink>
                            </li>
                            <li>
                                <NavLink smooth to='/#Projects' exact activeClassName='active'><i className='fas fa-laptop-code'></i> Projects</NavLink>
                            </li>
                            <li>
                                <NavLink smooth to='/#Skills' exact activeClassName='active'><i className='fas fa-code'></i> Skills</NavLink>
                            </li>
                            <li>
                                <NavLink smooth to='/#Contact' exact activeClassName='active'><i className='fas fa-envelope'></i> Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </nav>;
    }

    /*private goBack = (): boolean => {
        //debugger;

        //e.preventDefault();

        //this.props.history.goBack;


        console.log("test");
        console.log(this.props.history.length);

        return false;
    }*/

}