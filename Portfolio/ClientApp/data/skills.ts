/*import htmlLogo from '../images/HTML5_logo_512.png';
import cssLogo from '../images/CSS3_logo.png';
import sassLogo from '../images/SASS_logo.png';*/

import images from '../images/skills/imageImports'

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
    imgSource?: string;
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
        img: images.javascriptLogo,
        altTag: 'javascript logo',
        type: skillType.language
    },
    {
        skillName: 'typescript',
        img: images.typescriptLogo,
        altTag: 'typescript logo',
        type: skillType.language
    },
    {
        skillName: 'aspnetcore',
        img: images.aspnetcoreLogo,
        imgSource: 'https://github.com/campusMVP/dotnetCoreLogoPack',
        altTag: 'aspnetcore logo',
        type: skillType.other
    },
    {
        skillName: 'csharp',
        img: images.csharpLogo,
        altTag: 'c# logo',
        type: skillType.language
    },
    {
        skillName: 'visualstudio',
        img: images.visualstudio2017Logo,
        imgSource: 'https://logos.fandom.com/wiki/Microsoft_Visual_Studio',
        altTag: 'visual studio logo',
        type: skillType.software
    },
    {
        skillName: 'visualstudiocode',
        img: images.visualstudiocodeLogo,
        altTag: 'visual studio code logo',
        type: skillType.software
    },
    {
        skillName: 'java',
        img: images.javaLogo,
        altTag: 'java logo',
        type: skillType.language
    },
    {
        skillName: 'eclipse',
        img: images.eclipseLogo,
        altTag: 'eclipse logo',
        type: skillType.software
    },
    {
        skillName: 'sql',
        img: images.DatabaseLogo,
        imgSource: 'https://www.kisspng.com/png-oracle-database-computer-icons-logo-encapsulated-p-852860/download-png.html',
        altTag: 'sql logo',
        type: skillType.language
    },
    {
        skillName: 'mssqlserver',
        img: images.MssqlserverLogo,
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