/*import htmlLogo from '../images/HTML5_logo_512.png';
import cssLogo from '../images/CSS3_logo.png';
import sassLogo from '../images/SASS_logo.png';*/

import images from '../images/imageImports'

enum skillType {
    language = 0,
    software = 1,
    operatingSystem = 2,
    other = 3
}

interface ISkill {
    //[x: string]: any;
    skillName: string;
    img: string;
    altTag: string;
    type: skillType;
}

let skills: ISkill[] = [
    {
        skillName: 'default',
        img: images.htmlLogo,
        altTag: 'default logo',
        type: skillType.other
    },
    {
        skillName: 'html',
        img: images.htmlLogo,
        altTag: 'html logo',
        type: skillType.language
    },
    {
        skillName: 'css',
        img: images.cssLogo,
        altTag: 'css logo',
        type: skillType.language
    },
    {
        skillName: 'sass',
        img: images.sassLogo,
        altTag: 'sass logo',
        type: skillType.language
    },
    {
        skillName: 'javascript',
        img: '',
        altTag: 'javascript logo',
        type: skillType.language
    },
    {
        skillName: 'typescript',
        img: '',
        altTag: 'typescript logo',
        type: skillType.language
    },
    {
        skillName: 'aspnetcore',
        img: '',
        altTag: 'aspnetcore logo',
        type: skillType.other
    },
    {
        skillName: 'csharp',
        img: '',
        altTag: 'c# logo',
        type: skillType.language
    },
    {
        skillName: 'visualstudio',
        img: '',
        altTag: 'visual studio logo',
        type: skillType.software
    },
    {
        skillName: 'visualstudiocode',
        img: '',
        altTag: 'visual studio code logo',
        type: skillType.software
    },
    {
        skillName: 'java',
        img: '',
        altTag: 'java logo',
        type: skillType.language
    },
    {
        skillName: 'eclipse',
        img: '',
        altTag: 'eclipse logo',
        type: skillType.software
    },
    {
        skillName: 'sql',
        img: '',
        altTag: 'sql logo',
        type: skillType.language
    },
    {
        skillName: 'mssqlserver',
        img: '',
        altTag: 'mssqlserver logo',
        type: skillType.software
    }
];

/*let skills2 = [
    {
        default: {
            skillName: 'default',
            img: '/img/car.jpg',
            altTag: 'default logo',
            type: skillType.other
        },
    },
    {
        html: {
            skillName: 'html',
            img: '/img/car.jpg',
            altTag: 'html logo',
            type: skillType.language
        },
    }
];*/



export default skills;