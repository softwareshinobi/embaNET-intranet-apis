apiURLBase="http://softwareshinobi.digital:8888"

function setProject(projectID) {
    alert("set project");
    console.log("enter > setProject");

    console.log("projectID / ", projectID);

    console.log("apiProject / before / ", Cookies.get('apiProject') );

    Cookies.set('apiProject', projectID);

    console.log("apiProject / after / ", Cookies.get('apiProject') );

}

function getProject() {

    alert("update project");

    console.log("update project");

//    return Cookies.get('apiProject');

}
