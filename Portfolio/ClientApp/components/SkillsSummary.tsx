import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { SkillsSummaryTile } from './SkillsSummaryTile';

interface Props extends RouteComponentProps<any>, React.Props<any> {
}

export class SkillsSummary extends React.Component<Props> {
    public render() {
        return <div>
            <h2>Skills:</h2>
            <p>Below is a list of skills I have:</p>
            <div className='skill-summary-tiles'>

                <SkillsSummaryTile
                    skillName='HTML5'
                    logoPath=''
                    {...this.props}
                />
                <SkillsSummaryTile
                    skillName='CSS3'
                    logoPath=''
                    {...this.props}
                />
                <SkillsSummaryTile
                    skillName='SASS'
                    logoPath=''
                    {...this.props}
                />
                <SkillsSummaryTile
                    skillName='JavaScript'
                    logoPath=''
                    {...this.props}
                />
                <SkillsSummaryTile
                    skillName='TypeScript'
                    logoPath=''
                    {...this.props}
                />
                <SkillsSummaryTile
                    skillName='ASP.NET Core'
                    logoPath=''
                    {...this.props}
                />
                <SkillsSummaryTile
                    skillName='C#'
                    logoPath=''
                    {...this.props}
                />
                <SkillsSummaryTile
                    skillName='Visual Studio'
                    logoPath=''
                    {...this.props}
                />

            </div>
        </div>;
    }
}