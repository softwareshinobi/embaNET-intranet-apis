apiURLBase="https://apis.valorantsoftware.digital"

function setProject(projectID, projectName) {

    console.log("enter > setProject");

    console.log("projectID / ", projectID);

    console.log("projectName / ", projectName);

    console.log("apiProjectID / before / ", Cookies.get('apiProjectID') );

    console.log("apiProjectName / before / ", Cookies.get('apiProjectName') );

    Cookies.set('apiProjectID', projectID);

    Cookies.set('apiProjectName', projectName);

    console.log("apiProjectID / after / ", Cookies.get('apiProjectID') );

    console.log("apiProjectName / after / ", Cookies.get('apiProjectName') );

}

function projectID() {

    console.log("FETCH / projectID");

    console.log("apiProjectID / before / ", Cookies.get('apiProjectID') );

    currentProjectID=Cookies.get('apiProjectID');

    console.log("currentProjectID / ", currentProjectID);

    return currentProjectID;

}

function projectName() {

    console.log("FETCH / projectName");

    console.log("apiProjectName / ", Cookies.get('apiProjectName') );

    apiProjectName=Cookies.get('apiProjectName');

    console.log("apiProjectName / ", apiProjectName);

    return apiProjectName;

}
