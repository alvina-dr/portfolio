let videoGameElements = [];
let videoGameContainer = document.getElementById("video-game-container");

for (let i = 0; i < videoGameDatas.length; i++) {
    var _videoGameProject = document.createElement("div");
    _videoGameProject.setAttribute('class', 'video-game-card')

    _videoGameProject.appendChild(Object.assign(document.createElement('div'), {classList: 'video-game-card-top'}));

    //images
    _videoGameProject.appendChild(Object.assign(document.createElement('img'), {classList: 'video-game-card-img1', src: videoGameDatas[i].image1}));
    _videoGameProject.appendChild(Object.assign(document.createElement('img'), {classList: 'video-game-card-img2', src: videoGameDatas[i].image2}));

    _videoGameProject.appendChild(Object.assign(document.createElement('h4'), {innerHTML: '//: ' + videoGameDatas[i].name}));
    _videoGameProject.appendChild(Object.assign(document.createElement('a'), {href: videoGameDatas[i].link, innerHTML: '►'}));


    _videoGameProject.appendChild(Object.assign(document.createElement('div'), {classList: 'video-game-card-bottom'}));

    //triangles
    _videoGameProject.appendChild(Object.assign(document.createElement('div'), {classList: 'triangle-topright'}));
    _videoGameProject.appendChild(Object.assign(document.createElement('div'), {classList: 'triangle-bottomleft'}));

    _videoGameProject.addEventListener("click", selectFile, false);
    videoGameContainer.appendChild(_videoGameProject);

    videoGameElements.push(_videoGameProject);
    
} 


function selectFile() {
    file = this;
    if (file.classList.contains("video-game-card-selected")) {
        videoGameElements.forEach(_file => {
            _file.classList.remove("video-game-card-selected")
        });
        file.classList.remove("video-game-card-selected")
    } else {
        videoGameElements.forEach(_file => {
            _file.classList.remove("video-game-card-selected")
        });
        file.classList.add("video-game-card-selected")
    }
}

