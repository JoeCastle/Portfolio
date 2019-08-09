import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import projects from '../../data/projects';
import utils from '../../utils/utils';
import { Helmet } from 'react-helmet';

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

        let isLive = project!.attributes.liveDemo == '' ? false : true;
        let hasSource = project!.attributes.sourceCode == '' ? false : true;

        return <div className='project-summary'>
            <Helmet>
                <title>{project!.attributes.title} | Project - Joseph Castle</title>
                <meta name="description" content={project!.attributes.summary} />
            </Helmet>
            <div className='content-container'>
                <div className='proj-content-wrapper project-title-section'>
                    <h1 className='project-title'>{project!.attributes.title}</h1>
                    <div className='project-links'>

                        <p className='project-subtitle'>Links:</p>

                        {
                            hasSource ? 
                            <a target='_blank' rel='noopener noreferrer' href={project!.attributes.sourceCode}><i className='fab fa-github'></i> Source</a> :
                                <a className='disabled-link' title='No source available'><i className='fab fa-github'></i> Source unavailable</a>
                        }

                        {
                            isLive ?
                                <a target='_blank' rel='noopener noreferrer' href={project!.attributes.liveDemo}><i className='fas fa-globe'></i> Live</a> :
                                <a className='disabled-link' title='No demo available'><i className='fas fa-globe'></i> Live unavailable</a>
                        }
                        
                        
                    </div>
                </div>
                <div className='proj-content-wrapper'>
                    <div className='project-image-container'>
                        <img className='project-image' src={project!.attributes.img} alt={project!.attributes.imgAlt} />
                    </div>
                    <div>
                        <ul><span className='project-subtitle'>Techs:</span> {project!.attributes.technologies.map((item, i) => (<li key={i}> {(i ? ', ' : '') + item}</li>))}</ul>
                        <ul><span className='project-subtitle'>Tags:</span> {project!.attributes.tags.map((item, i) => (<li key={i}> {(i ? ', ' : '') + item}</li>))}</ul>
                    </div>
                </div>
                <div className='project-desc'>{project!.attributes.description.map((item, i) => <p key={i}>{item}</p>)}</div>
            </div>
        </div>;
    }
}