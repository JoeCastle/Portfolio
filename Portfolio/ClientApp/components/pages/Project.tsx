import * as React from 'react';
import { RouteComponentProps } from 'react-router';

//Clicking on the summary tile will navigate to a seperate page.
//Should be able to navigate to the page directly using URL.
interface IProjectProps {
    title: string;
    description: string;
    technologies: string[]; //The technologies used to develop the project.
    tags: string[]; //Technologies or keywords assosiated with the project.
    img?: string;
    type?: string; //Website, web app, windows app, mobile app, arduino?
    url?: string; //Link to live version or demo of the application.
    source?: string; //Link to gitgub repo. Also could be codepen or similar.
    role?: string[]; //Developer or designer
    year?: number; //Year the project was completed.
    screenshots?: string[]; //List of all available screenshots, to be put into lightbox or carousel.
}

interface Props extends RouteComponentProps<any>, React.Props<any>, IProjectProps {
}

export class Project extends React.Component<Props> {
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