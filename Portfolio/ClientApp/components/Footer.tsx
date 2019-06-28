import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface Props extends RouteComponentProps<any>, React.Props<any> {
}

export class Footer extends React.Component<Props> {
    public render() {
        return <div>
            <h2>Footer</h2>
            <p>This is the footer</p>
        </div>;
    }
}
