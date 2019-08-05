//https://www.codereadability.com/replacing-if-statements-with-object-lookups/

enum projType {
    personal = "Personal",
    university = "University",
    work = "Work",
    freelance = "Freelance",
    contract = "Contract"
}

interface IAttributes {
    title: string;
    description: string[]; //Array allows for multiple paragraphs to be included. Can map different index to a new element.
    summary?: string; //A short description, probably used on the home page.
    technologies: string[];
    tags: string[];
    img: string;
    carouselImages?: string[];
    readMoreLink: string;
    routeURL: string;
    sourceCode: string;
    liveDemo: string;
    projectType: projType; //University, Personal, Work, Freelance
    yearCompleted?: string; //2018, 2017* - Initially completed in 2017 at uni, but built my own web page once I left.
}

interface IProject {
    //[x: string]: any;
    projectName: string;
    attributes: IAttributes;
}

let projects: IProject[] = [
    {
        projectName: 'default',
        attributes: {
            title: 'No Project Selected',
            description: ['desc', 'test', 'test'],
            technologies: ['tech1', 'tech2', 'tech3'],
            tags: ['tag1', 'tag2', 'tag3'],
            img: '/img/car.jpg',
            readMoreLink: '/404',
            routeURL: '404',
            sourceCode: '',
            liveDemo: '',
            projectType: projType.personal
        }
    },
    {
        projectName: 'shoothillWebsite',
        attributes: {
            title: 'Shoothill Website',
            description: ['descdescdesc descdescdesc descdescdesc descdescdesc descdescdesc descdescdesc descdescdesc descdescdesc descdescdesc descdescdesc descdescdesc descdescdesc descdescdesc descdescdesc', 'test', 'test'],
            technologies: ['React', 'Redux', 'LESS', 'ASP.NET Core', 'Visual Studio'],
            tags: ['tag1', 'tag2', 'tag3'],
            img: '/img/car.jpg',
            readMoreLink: '/Projects/ShoothillWebsite',
            routeURL: 'Projects/ShoothillWebsite',
            sourceCode: '',
            liveDemo: 'https://www.shoothill.com',
            projectType: projType.work
        },
    },
    {
        projectName: 'arlaBob',
        attributes: {
            title: 'Arla B.O.B',
            description: ['desc', 'test', 'test'],
            technologies: ['React', 'Redux', 'LESS', 'ASP.NET Core', 'Visual Studio'],
            tags: ['tag1', 'tag2', 'tag3'],
            img: '/img/car.jpg',
            readMoreLink: '/Projects/ArlaBOB',
            routeURL: 'Projects/ArlaBOB',
            sourceCode: '',
            liveDemo: 'http://whoseroundisitanyway.co.uk',
            projectType: projType.work
        }
    },
    {
        projectName: 'portfolio',
        attributes: {
            title: 'Portfolio',
            description: ['desc', 'test', 'test'],
            technologies: ['React', 'SASS', 'ASP.NET Core', 'Visual Studio'],
            tags: ['tag1', 'tag2', 'tag3'],
            img: '/img/car.jpg',
            readMoreLink: '/Projects/Portfolio',
            routeURL: 'Projects/Portfolio',
            sourceCode: 'https://github.com/JoeCastle/Portfolio',
            liveDemo: '',
            projectType: projType.personal
        }
    },
    {
        projectName: 'trainingApp',
        attributes: {
            title: 'Training App',
            description: ['desc', 'test', 'test'],
            technologies: ['React', 'MobX', 'SASS', 'ASP.NET Core', 'Visual Studio', 'SQL', 'SQL Server Management Studio'],
            tags: ['tag1', 'tag2', 'tag3'],
            img: '/img/car.jpg',
            readMoreLink: '/Projects/TrainingApp',
            routeURL: 'Projects/TrainingApp',
            sourceCode: 'https://github.com/JoeCastle/WebAppProj',
            liveDemo: '',
            projectType: projType.university
        }
    },
    {
        projectName: 'arduinoTemperatureSensor',
        attributes: {
            title: 'Arduino Temperature Sensor',
            description: ['desc', 'test', 'test'],
            technologies: ['C/C++', 'Arduino', 'Arduino IDE'],
            tags: ['tag1', 'tag2', 'tag3'],
            img: '/img/car.jpg',
            readMoreLink: '/Projects/ArduinoTemperatureSensor',
            routeURL: 'Projects/ArduinoTemperatureSensor',
            sourceCode: '',
            liveDemo: '',
            projectType: projType.university
        }
    },
    {
        projectName: 'startPage',
        attributes: {
            title: 'Startpage',
            description: ['desc', 'test', 'test'],
            technologies: ['HTML', 'CSS', 'JavaScript', 'VS Code'], //Include skills.ts object where JS and JavaScript can be search characteristics for the same tech.
            tags: ['tag1', 'tag2', 'tag3'],
            img: '/img/car.jpg',
            readMoreLink: '/Projects/Startpage',
            routeURL: 'Projects/Startpage',
            sourceCode: 'https://github.com/RTCRhino/StartPage',
            liveDemo: '',
            projectType: projType.personal
        }
    },
    {
        projectName: 'sunWater',
        attributes: {
            title: 'Sunwater',
            description: ['desc', 'test', 'test'],
            technologies: ['React', 'MobX', 'SASS', 'Visual Studio', 'Azure Blob Storage'],
            tags: ['tag1', 'tag2', 'tag3'],
            img: '/img/car.jpg',
            readMoreLink: '/Projects/SunWater',
            routeURL: 'Projects/SunWater',
            sourceCode: '',
            liveDemo: '',
            projectType: projType.work
        }
    },
    {
        projectName: 'fizzBuzzEurofins',
        attributes: {
            title: 'FizzBuzzTask',
            description: ['desc', 'test', 'test'],
            technologies: ['HTML', 'CSS', 'JavaScript', 'ASP.NET Core', 'Entity Framework', 'SQL Server Management Studio', 'Visual Studio'],
            tags: ['tag1', 'tag2', 'tag3'],
            img: '/img/car.jpg',
            readMoreLink: '/Projects/FizzBuzzTask',
            routeURL: 'Projects/FizzBuzzTask',
            sourceCode: 'https://github.com/JoeCastle/FizzBuzzTask',
            liveDemo: '',
            projectType: projType.personal
        }
    }

];

/*export let projects2 = [
    {
        default: {
            projectName: 'default',
            attributes: {
                title: 'No Project Selected',
                description: ['desc', 'test', 'test'],
                technologies: ['tech1', 'tech2', 'tech3'],
                tags: ['tag1', 'tag2', 'tag3'],
                img: '/img/car.jpg',
                readMoreLink: '/404',
                routeURL: '404'
            }
        }
    },
    {
        shoothillWebsite: {
            projectName: 'shoothillWebsite',
            attributes: {
                title: 'Shoothill Website',
                description: ['desc', 'test', 'test'],
                technologies: ['tech1', 'tech2', 'tech3'],
                tags: ['tag1', 'tag2', 'tag3'],
                img: '/img/car.jpg',
                readMoreLink: '/Projects/ShoothillWebsite',
                routeURL: 'Projects/ShoothillWebsite'
            },
        }
    },
    {
        arlaBob: {
            projectName: 'arlaBob',
            attributes: {
                title: 'bob',
                description: ['desc', 'test', 'test'],
                technologies: ['tech1', 'tech2', 'tech3'],
                tags: ['tag1', 'tag2', 'tag3'],
                img: '/img/car.jpg',
                readMoreLink: '/Projects/ArlaBOB',
                routeURL: 'Projects/ArlaBOB'
            }
        }
    }
];*/

export default projects;