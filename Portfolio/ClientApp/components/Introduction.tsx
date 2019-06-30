import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface Props extends RouteComponentProps<any>, React.Props<any> {
}

export class Introduction extends React.Component<Props> {
    public render() {
        return <div className='section about' id='About'>
            <div className='content-container'>
                <h2>About:</h2>
                {/*<p>Hey, my name is Joe and I'm a software developer.</p>*/}
                <p>Hey, my name is Joe and I've recently achieved a 1st class degree in BSc (Hons) Computer Science (Software Engineering) with Placement at the University of Wolverhampton. My aim is to become a Software Developer.</p>
                <p>I currently live in Wolverhampton, UK and I am looking for a job as a Software Developer.</p>
                <p>I mostly have front-end experience, however I'm looking to improved my back-end development skills.</p>
            </div>
        </div>;
    }
}
