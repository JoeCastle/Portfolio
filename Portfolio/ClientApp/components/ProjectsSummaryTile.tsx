import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from "react-router-dom";
import projects from '../data/projects';
import utils from '../utils/utils';
//import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, CardImgOverlay } from 'reactstrap';
//import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.css';

//Clicking on the summary tile will navigate to a seperate page.
//Should be able to navigate to the page directly using URL.
interface IProjectProps {
    projectName: string;
}

interface Props extends RouteComponentProps<any>, React.Props<any>, IProjectProps {
}

//TODO: Create lists for what projects should be included in each section. (in js object)
//Summary will have latest or best.
//All projects will have all, then filtered.

export class ProjectsSummaryTile extends React.Component<Props> {
    public render() {

        let projName = '';

        projName = utils.verifyProjName(this.props.projectName);

        let project = projects.find(project => project.projectName === projName);

        return <div className='project-summary-tile'>
            <img src={project!.attributes.img} alt={project!.attributes.imgAlt} />
            <div className='project-summary-tile-content'>
            <div className='project-summary-tile-title'>{project!.attributes.title}</div>
            {/*{project!.attributes.description.map((item, i) => <p key={i}>{item}</p>)}*/}
                <div className='project-summary-tile-desc'>{project!.attributes.description[0]}</div>
                </div>
            <Link to={project!.attributes.readMoreLink}>Read More -></Link>
            {/*<Link className='project-tile-overlay' to={project!.attributes.readMoreLink}>
                <div className='overlay-text'>Hello World</div>
                <div className='overlay-text'>{project!.attributes.title}</div>
                <div className='overlay-text'>{project!.attributes.description[0]}</div>
            </Link>*/}
            {/* https://reactstrap.github.io/components/card/ */}
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
    dateCompleted: string;
}*/

/*
 * Others to include:
    Colour attribute incase there is no available image.
    Role/position - Junior Developer, Developer, Senior? Maybe not

*/