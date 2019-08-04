import * as React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export class FourZeroFour extends React.Component<any> {
    public render() {
        return <div className='page not-found-page'>
            <Helmet>
                <title>404 - Joseph Castle</title>
                <meta name="description" content="Error 404 page not found." />
                <meta name="robots" content="noindex" />
            </Helmet>
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
