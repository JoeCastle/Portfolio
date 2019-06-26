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
            description: ['desc', 'test', 'test'],
            technologies: ['tech1', 'tech2', 'tech3'],
            tags: ['tag1', 'tag2', 'tag3'],
            img: '/img/car.jpg',
            readMoreLink: '/Projects/ShoothillWebsite',
            routeURL: 'Projects/ShoothillWebsite'
        },
    },
    {
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