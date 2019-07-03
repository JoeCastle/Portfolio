import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import projects from '../../data/projects';
import utils from '../../utils/utils';

//Clicking on the summary tile will navigate to a seperate page.
//Should be able to navigate to the page directly using URL.
interface IProjectProps {
    projectName: string;
}

interface Props extends RouteComponentProps<any>, React.Props<any>, IProjectProps {
}

export class Project extends React.Component<Props> {

    componentDidMount() {
        this.handleScrollReset();
    }

    handleScrollReset = () => {
        let element = document.getElementById('page-parent');
        element!.scrollTop = 0;
    }

    public render() {

        //Move to state.
        let projName = '';

        projName = utils.verifyProjName(this.props.projectName);

        let project = projects.find(project => project.projectName === projName);

        return <div className='project-summary-tile'>
            <h1>{project!.attributes.title}</h1>
            <div>{project!.attributes.img || 'test'}</div>
            {project!.attributes.description.map((item, i) => <p key={i}>{item}</p>)}
            <div>{project!.attributes.technologies}</div>
            <div>{project!.attributes.tags}</div>
        </div>;
    }
}