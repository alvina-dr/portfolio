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
        button.animate([
            {height: '10px'},
            { height : '10px' }
          ], {
            duration: 2000,
            iterations: Infinity,
            delay: parseInt(button.getAttribute('id')) * 150
          });
    })
    document.getElementById(id).setAttribute("class", "active");
    buttonArray.forEach(button => {
        if (!button.classList.contains('active')) {
            button.animate([
                {height: '10px'},
                { height : 30 + 'px'},
                { height : '10px' }
              ], {
                duration: 2000,
                iterations: Infinity,
                delay: parseInt(button.getAttribute('id')) * 2000/4
              });
        } else {
            button.animate([
                {height: '10px'},
                { height : '10px' }
              ], {
                duration: 2000,
                iterations: Infinity,
                delay: parseInt(button.getAttribute('id')) * 150
              });
        }
    })
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
    if (parseInt(id) === 0) {
      document.getElementById('left-button').setAttribute("onclick", "ShowProject('"+(projects.length-1)+"');")
    } else {
      document.getElementById('left-button').setAttribute("onclick", "ShowProject('"+(parseInt(id)-1)+"');")
    }
    var length = projects.length - 1;
    if (parseInt(id) === length) {
      document.getElementById('right-button').setAttribute("onclick", "ShowProject('"+0+"');")
    } else {
      document.getElementById('right-button').setAttribute("onclick", "ShowProject('"+(parseInt(id)+1)+"');")
    }
};

ShowProject(0);
