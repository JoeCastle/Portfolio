//Todo
//Check all libraries and packages are upto date
//Remove jquery
//Add mobx stores
//

import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Introduction } from '../Introduction';
import { ProjectsSummary } from '../ProjectsSummary';
import { SkillsSummary } from '../SkillsSummary';

interface Props extends RouteComponentProps<any>, React.Props<any> {
}

export class Home extends React.Component<Props> {
    public render() {
        return <div>
            <Introduction {...this.props} />
            <ProjectsSummary {...this.props} />
            <SkillsSummary {...this.props} />
        </div>;
    }
}
