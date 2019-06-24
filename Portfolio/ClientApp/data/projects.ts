//https://www.codereadability.com/replacing-if-statements-with-object-lookups/

interface IAttributes {
    title: string;
    description: string;
    technologies: string[];
    tags: string[];
    img: string;
}

interface IProject {
    //[x: string]: any;
    projectName: string;
    attributes: IAttributes;
}

let projects: IProject[] = [
    {
        projectName: "default",
        attributes: {
            title: "No Project Selected",
            description: 'desc',
            technologies: ['tech1', 'tech2', 'tech3'],
            tags: ['tag1', 'tag2', 'tag3'],
            img: '/img/car.jpg'
        }
    },
    {
        projectName: "shoothillWebsite",
        attributes: {
            title: "Shoothill Website",
            description: 'desc',
            technologies: ['tech1', 'tech2', 'tech3'],
            tags: ['tag1', 'tag2', 'tag3'],
            img: '/img/car.jpg'
        },
    },
    {
        projectName: "bob",
        attributes: {
            title: "bob",
            description: 'desc',
            technologies: ['tech1', 'tech2', 'tech3'],
            tags: ['tag1', 'tag2', 'tag3'],
            img: '/img/car.jpg'
        }
    }
];

export default projects;