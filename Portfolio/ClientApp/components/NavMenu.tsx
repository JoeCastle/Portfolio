import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

interface Props extends RouteComponentProps<any>, React.Props<any> {
}

export class NavMenu extends React.Component<Props> {
    public render() {
        return <nav className='navmain'>

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
                        <Link className='navbar-brand' to={'/'}><h1>Joseph Castle</h1></Link>
                    </div>
                    <div className='clearfix'></div>
                    <div className='navbar-collapse collapse'>
                        <ul className='nav navbar-nav'>
                            <li>
                                <NavLink to={'/'} exact activeClassName='active'>
                                    <span className='glyphicon glyphicon-home'></span> Home
                                </NavLink>
                                
                                
                            </li>
                            {/* https://css-tricks.com/snippets/jquery/smooth-scrolling/ */}
                            <li>
                                <a href="#About"><i className='fas fa-info'></i> About</a>
                            </li>
                            <li>
                                <a href="#Projects"><i className='fas fa-laptop-code'></i> Projects</a>
                            </li>
                            <li>
                                <a href="#Skills"><i className='fas fa-code'></i> Skills</a>
                            </li>
                            <li>
                                <a href="#Contact"><i className='fas fa-envelope'></i> Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </nav>;
    }
}
