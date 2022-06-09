var projectNavTitle = document.getElementById("project-nav-title");
var projectTitle = document.getElementById("project-title");
var projectText = document.getElementById("project-text");
var projectId = document.getElementById("project-id");
var projectLink = document.getElementById("project-link");
var projectImage = document.getElementById("project-image");
var newTag = document.getElementById("new-tag");
var buttonArray = [];
var projectMenu = document.getElementById("project-menu");


projects.forEach( project =>  {
    var projectButton = projectMenu.appendChild(document.createElement('button'))
    projectButton.setAttribute('id', project.projectID);
    projectButton.setAttribute("onclick", "ShowProject('"+projectButton.id+"');")
    buttonArray.push(projectButton);
});

function ShowProject (id) {
    buttonArray.forEach (button => {
        button.setAttribute("class", "");
    })
    document.getElementById(id).setAttribute("class", "active");
    projectTitle.innerText = projects[id].projectTitle; 
    projectNavTitle.innerText = projects[id].projectTitle; 
    projectText.innerText = projects[id].projectText; 
    projectId.innerText = "[00" + projects[id].projectID + "]"; 
    projectLink.setAttribute("href", projects[id].projectLink);
    projectImage.src = projects[id].image;
    if (projects[id].new) {
        newTag.classList.remove("new-tag-hidden");
    } else {
        newTag.classList.add("new-tag-hidden");
    }

};

ShowProject(0);
