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
            <div>{project!.attributes.img || 'test'}</div>
            <div>{project!.attributes.title}</div>
            {project!.attributes.description.map((item, i) => <p key={i}>{item}</p>)}
            <div>{project!.attributes.technologies}</div>
            <div>{project!.attributes.tags}</div>
            <Link to={project!.attributes.readMoreLink}>Read More -></Link>

            {/* https://reactstrap.github.io/components/card/ */}

            {/*<Card>
                <CardImg top width="100%" src="http://placekitten.com/300/200" alt="Card image cap" />
                <CardBody>
                    <CardTitle>{project!.attributes.title}</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>{project!.attributes.description[0]}...</CardText>
                    <Link to={project!.attributes.readMoreLink}>Read More -></Link>
                </CardBody>
            </Card>

            <Card inverse>
                <CardImg width="100%" src="http://placekitten.com/300/200" alt="Card image cap" />
                <CardImgOverlay>
                    <CardTitle>Card Title</CardTitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    <CardText>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </CardText>
                </CardImgOverlay>
            </Card>*/}
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