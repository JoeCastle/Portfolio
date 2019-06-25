import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface ISkillProps {
    skillName: string;
    logoPath: string;
}

interface Props extends RouteComponentProps<any>, React.Props<any>, ISkillProps {
}

export class SkillsSummaryTile extends React.Component<Props> {
    public render() {

        return <div className='skill-summary-tile'>
            <div>{this.props.skillName}</div>
            <div>{this.props.logoPath}</div>
        </div>;
    }
}