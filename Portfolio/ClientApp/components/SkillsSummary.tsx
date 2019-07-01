import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { SkillsSummaryTile } from './SkillsSummaryTile';
import skills from '../data/skills';

interface Props extends RouteComponentProps<any>, React.Props<any> {
}

export class SkillsSummary extends React.Component<Props> {
    public render() {

        const numOfSummarySkillsToDisplay = 16;

        let summarySkills = skills
            .slice(0, numOfSummarySkillsToDisplay + 1)
            .filter(item =>
                item.skillName != 'default')
            .map((item, i) =>
                <SkillsSummaryTile
                    key={i}
                    skillName={item.skillName}
                    {...this.props}
                />
            )

        return <div className='section' id='Skills'>
            <div className='content-container'>
                <h2>Skills:</h2>
                <p>Below is a list of skills I have:</p>
                <div className='skill-summary-tiles'>

                    {summarySkills}

                    {/*<SkillsSummaryTile
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
                    <SkillsSummaryTile
                        skillName='Visual Studio Code'
                        logoPath=''
                        {...this.props}
                    />
                    <SkillsSummaryTile
                        skillName='Java'
                        logoPath=''
                        {...this.props}
                    />
                    <SkillsSummaryTile
                        skillName='Eclipse'
                        logoPath=''
                        {...this.props}
                    />
                    <SkillsSummaryTile
                        skillName='SQL'
                        logoPath=''
                        {...this.props}
                    />
                    <SkillsSummaryTile
                        skillName='MS SQL Server'
                        logoPath=''
                        {...this.props}
                    />*/}
                </div>
            </div>
        </div>;
    }
}