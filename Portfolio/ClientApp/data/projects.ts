//https://www.codereadability.com/replacing-if-statements-with-object-lookups/

interface IAttributes {
    title: string;
    description: string[]; //Allows for multiple paragraphs to be included. Can map different index to a new element.
    technologies: string[];
    tags: string[];
    img: string;
    readMoreLink: string;
    routeURL: string;
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
            routeURL: '404'
        }
    },
    {
        projectName: 'shoothillWebsite',
        attributes: {
            title: 'Shoothill Website',
            description: ['descdescdesc descdescdesc descdescdesc descdescdesc descdescdesc descdescdesc descdescdesc descdescdesc descdescdesc descdescdesc descdescdesc descdescdesc descdescdesc descdescdesc', 'test', 'test'],
            technologies: ['React', 'Redux', 'Less'],
            tags: ['tag1', 'tag2', 'tag3'],
            img: '/img/car.jpg',
            readMoreLink: '/Projects/ShoothillWebsite',
            routeURL: 'Projects/ShoothillWebsite'
        },
    },
    {
        projectName: 'arlaBob',
        attributes: {
            title: 'Arla Bob',
            description: ['desc', 'test', 'test'],
            technologies: ['React', 'Redux', 'Less'],
            tags: ['tag1', 'tag2', 'tag3'],
            img: '/img/car.jpg',
            readMoreLink: '/Projects/ArlaBOB',
            routeURL: 'Projects/ArlaBOB'
        }
    },
    {
        projectName: 'portfolio',
        attributes: {
            title: 'Portfolio',
            description: ['desc', 'test', 'test'],
            technologies: ['React', 'SASS', 'tech3'],
            tags: ['tag1', 'tag2', 'tag3'],
            img: '/img/car.jpg',
            readMoreLink: '/Projects/Portfolio',
            routeURL: 'Projects/Portfolio'
        }
    },
    {
        projectName: 'trainingApp',
        attributes: {
            title: 'Training App',
            description: ['desc', 'test', 'test'],
            technologies: ['React', 'MobX', 'SASS'],
            tags: ['tag1', 'tag2', 'tag3'],
            img: '/img/car.jpg',
            readMoreLink: '/Projects/TrainingApp',
            routeURL: 'Projects/TrainingApp'
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
            routeURL: 'Projects/ArduinoTemperatureSensor'
        }
    },
    {
        projectName: 'startPage',
        attributes: {
            title: 'Startpage',
            description: ['desc', 'test', 'test'],
            technologies: ['HTML', 'CSS', 'JavaScript'], //Include skills.ts object where JS and JavaScript can be search characteristics for the same tech.
            tags: ['tag1', 'tag2', 'tag3'],
            img: '/img/car.jpg',
            readMoreLink: '/Projects/Startpage',
            routeURL: 'Projects/Startpage'
        }
    },
    {
        projectName: 'sunWater',
        attributes: {
            title: 'Sunwater',
            description: ['desc', 'test', 'test'],
            technologies: ['tech1', 'tech2', 'tech3'],
            tags: ['tag1', 'tag2', 'tag3'],
            img: '/img/car.jpg',
            readMoreLink: '/Projects/SunWater',
            routeURL: 'Projects/SunWater'
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