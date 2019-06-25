import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from "react-router-dom";
import projects from '../data/projects';

//Clicking on the summary tile will navigate to a seperate page.
//Should be able to navigate to the page directly using URL.
interface IProjectProps {
    projectName: string;
}

interface Props extends RouteComponentProps<any>, React.Props<any>, IProjectProps {
}


export class ProjectsSummaryTile extends React.Component<Props> {
    public render() {

        let projName = typeof this.props.projectName != 'undefined' ? this.props.projectName : 'default'; //Move to seperate util/helper function
        projName = projName != '' ? projName : 'default';

        let project = projects.find(project => project.projectName === projName);

        return <div className='project-summary-tile'>
            <div>{project!.attributes.img || 'test'}</div>
            <div>{project!.attributes.title}</div>
            {/*<div>{replaceLineBreaksWithHTML(project!.attributes.description)}</div>*/}
            {project!.attributes.description.map((item, i) => <p key={i}>{item}</p>)}
            <div>{project!.attributes.technologies}</div>
            <div>{project!.attributes.tags}</div>
            <Link to={project!.attributes.readMoreLink}>Read More -></Link>
        </div>;
    }
}

/*
//Clicking on the summary tile will navigate to a seperate page.
//Should be able to navigate to the page directly using URL.
interface IProjectsSummaryTileProps {
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
    readMoreLink: string;
}*/