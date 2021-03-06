﻿import * as React from 'react';
//import { Fragment } from 'react'; //https://javascriptplayground.com/react-fragments/
import { RouteComponentProps } from 'react-router';
import { ProjectsSummaryTile } from './ProjectsSummaryTile';
import projects from '../data/projects';

interface Props extends RouteComponentProps<any>, React.Props<any> {
}

//Personal, University, Placement, Job
export class ProjectsSummary extends React.Component<Props> {
    public render() {

        const numOfSummaryProjectsToDisplay = 8;

        let summaryProjects = projects
            .slice(0, numOfSummaryProjectsToDisplay + 1)
            .filter(item =>
                item.projectName != 'default')
            .map((item, i) =>
                <ProjectsSummaryTile
                    key={i}
                    projectName={item.projectName}
                    {...this.props}
                />
            )

        return <div className='section' id='Projects'>
            <div className='content-container'>
                <h2>Projects:</h2>
                <p>Below is a list of projects I have developed or collaborated on:</p>
                <div className='project-summary-tiles'>

                    

                    {summaryProjects}

                    {/*<ProjectsSummaryTile
                    projectName='shoothillWebsite'
                    {...this.props}
                />
                <ProjectsSummaryTile
                    projectName='arlaBob'
                    {...this.props}
                />
                <ProjectsSummaryTile
                    projectName=''
                    {...this.props}
                />*/}
                </div>
            </div>
        </div>;
    }
}
