import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import utils from '../utils/utils';
import skills from '../data/skills';
import { Link } from 'react-router-dom';
//import logo from '../images/HTML5_logo_512.png'

//import { icon } from '../images/HTML5_logo_512.png';

//import testimage from '../images/';

interface ISkillProps {
    skillName: string;
}

interface Props extends RouteComponentProps<any>, React.Props<any>, ISkillProps {
}

export class SkillsSummaryTile extends React.Component<Props> {
    public render() {
        //const pathToImages = require.context('../images/', true);
        //const url = 'HTML5_logo_512.png';

        let skillName = '';

        skillName = utils.verifyProjName(this.props.skillName);

        let skill = skills.find(skill => skill.skillName === skillName);

        //let img = skill!.img;

        return <div className='skill-summary-tile'>
            <Link to={'/Projects?Filter'}>
                <div>{skill!.skillName}</div>
                <img src={skill!.img} alt='Card image cap' />
                {/*<img src={`${require('../images/HTML5_Logo_512.png')}`} alt='Card image cap' />*/}
            </Link>
        </div>;
    }
}