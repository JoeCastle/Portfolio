import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface IProjectsSummaryTileProps {
    title: string;
    description: string;
    technologies: string[];
    tags: string[];
    img?: string;
}

interface Props extends RouteComponentProps<any>, React.Props<any>, IProjectsSummaryTileProps {
}

export class ProjectsSummaryTile extends React.Component<Props> {
    public render() {
        return <div className='project-summary-tile'>
            <div>{this.props.img || 'test'}</div>
            <div>{this.props.title}</div>
            <div>{this.props.description}</div>
            <div>{this.props.technologies}</div>
            <div>{this.props.tags}</div>
        </div>;
    }
}