import * as React from 'react';
import { Link } from 'react-router-dom';

export class FourZeroFour extends React.Component<any> {
    public render() {
        return <div className='page not-found-page'>
            <div className='page-header'>
                <h1>Error 404 page not found!</h1>
            </div>
            <div className='page-content'>
                <h2>Oops!</h2>
                <p>Page not found, click here to get back to the homepage: <Link to={'/'}>Home</Link></p>
            </div>
        </div>;
    }
}
