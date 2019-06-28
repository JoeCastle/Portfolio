//Todo
//Check all libraries and packages are upto date
//Remove jquery
//Add mobx stores
//

import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Introduction } from '../Introduction';
import { ProjectsSummary } from '../ProjectsSummary';
import { SkillsSummary } from '../SkillsSummary';
import { ContactForm } from '../ContactForm';
import { Footer } from '../Footer';

interface Props extends RouteComponentProps<any>, React.Props<any> {
}

export class Home extends React.Component<Props> {
    public render() {
        return <div>
            <Introduction {...this.props} />
            <ProjectsSummary {...this.props} />
            <SkillsSummary {...this.props} />
            <ContactForm {...this.props} />
            <footer>
                <Footer {...this.props} /> {/* Eventually move to RouteContainer outside of main, figure out where scrolling and backgrounds will be. */}
            </footer>
        </div>;
    }
}
