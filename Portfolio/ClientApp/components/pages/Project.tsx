import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import projects from '../../data/projects';

//Clicking on the summary tile will navigate to a seperate page.
//Should be able to navigate to the page directly using URL.
interface IProjectProps {
    projectName: string;
}

interface Props extends RouteComponentProps<any>, React.Props<any>, IProjectProps {
}

export class Project extends React.Component<Props> {

    public render() {

        let projName = typeof this.props.projectName != 'undefined' ? this.props.projectName : "default";
        let project = projects.find(project => project.projectName === projName);

        return <div className='project-summary-tile'>
            <div>{project!.attributes.img || 'test'}</div>
            <div>{project!.attributes.title}</div>
            <div>{project!.attributes.description}</div>
            <div>{project!.attributes.technologies}</div>
            <div>{project!.attributes.tags}</div>
        </div>;
    }
}