/*let isUndefined = (item: any): boolean => {
    return typeof item === 'undefined';
}*/

let verifyProjName = (projName: string): string => {
    if (projName) {
        return projName;
    } else {
        return 'default';
    }

    /*let projectName = !isUndefined(projName) ? projName : 'default';

    projectName = projectName != '' ? projectName : 'default';

    return projectName;*/
}

const utils = {
    verifyProjName
}

export default utils;