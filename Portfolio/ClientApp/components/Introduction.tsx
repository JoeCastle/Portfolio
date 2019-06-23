﻿import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface Props extends RouteComponentProps<any>, React.Props<any> {
}

export class Introduction extends React.Component<Props> {
    public render() {
        return <div>
            <h1>Joseph Castle</h1>
            <p>Hey, my name is Joe and I'm a software developer.</p>
            
        </div>;
    }
}
