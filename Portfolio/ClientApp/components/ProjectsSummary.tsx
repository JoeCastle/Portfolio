import * as React from 'react';
import { Fragment } from 'react'; //https://javascriptplayground.com/react-fragments/
import { RouteComponentProps } from 'react-router';
import { ProjectsSummaryTile } from './ProjectsSummaryTile';

interface Props extends RouteComponentProps<any>, React.Props<any> {
}

export class ProjectsSummary extends React.Component<Props> {
    public render() {
        return <div>
            <h2>Projects:</h2>
            <p>Below is a list of projects I have developed or collaborated on:</p>
            <div className='project-summary-tiles'>
                <ProjectsSummaryTile
                    title='title'
                    description='desc'
                    technologies={['tech1', 'tech2', 'tech3']}
                    tags={['tag1', 'tag2', 'tag3']}
                    img='img'
                    {...this.props}
                />
                <ProjectsSummaryTile
                    title='title'
                    description='desc'
                    technologies={['tech1', 'tech2', 'tech3']}
                    tags={['tag1', 'tag2', 'tag3']}
                    img='img'
                    {...this.props}
                />
                <ProjectsSummaryTile
                    title='title'
                    description='desc'
                    technologies={['tech1', 'tech2', 'tech3']}
                    tags={['tag1', 'tag2', 'tag3']}
                    img='img'
                    {...this.props}
                />
            </div>
        </div>;
    }
}
