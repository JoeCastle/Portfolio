//Todo
//Check all libraries and packages are upto date
//Remove jquery
//Add mobx stores
//

import { Helmet } from 'react-helmet';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Introduction } from '../Introduction';
import { ProjectsSummary } from '../ProjectsSummary';
import { SkillsSummary } from '../SkillsSummary';
import { ContactForm } from '../ContactForm';

interface Props extends RouteComponentProps<any>, React.Props<any> {
}

export class Home extends React.Component<Props> {
    public render() {
        return <div>
            <Helmet>
                <title>Home - Joseph Castle</title>
                <meta name="description" content="Home page" />
            </Helmet>
            <Introduction {...this.props} />
            <ProjectsSummary {...this.props} />
            <SkillsSummary {...this.props} />
            <ContactForm {...this.props} />
        </div>;
    }
}
