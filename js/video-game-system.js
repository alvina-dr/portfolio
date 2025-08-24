let videoGameElements = [];
let videoGameLinks = [];
let videoGameContainer = document.getElementById("video-game-container");
var videoGameTemplate = document.getElementById("video-game-row");

for (let i = 0; i < videoGameDatas.length; i++) {
  
  var clone = document.importNode(videoGameTemplate.content, true);
  clone.querySelectorAll("h3")[0].textContent = videoGameDatas[i].name; 
  clone.querySelectorAll("p")[0].textContent = videoGameDatas[i].description; 
  clone.querySelectorAll("img")[0].src = videoGameDatas[i].image1; 
  clone.querySelectorAll("a")[0].href = videoGameDatas[i].link; 
  clone.children[0].setAttribute("class", "div-row video-game-row object-to-filter text-zone " + videoGameDatas[i]["filter-type"]);
  if (videoGameDatas[i]["tags"] != "") 
  {
    for (let j = 0; j < videoGameDatas[i].tags.length; j++) 
    {
      tag = document.createElement("b");
      tag.innerHTML = videoGameDatas[i].tags[j];
      if (tag.innerHTML == "Technical") tag.setAttribute("class", "technical-tag");
      if (tag.innerHTML == "Steam 🤖") tag.setAttribute("class", "steam-tag");
      clone.querySelectorAll(".tag-list")[0].appendChild(tag);
    }
  }
  videoGameContainer.appendChild(clone);

  continue;

  var _videoGameCardContainer = document.createElement("div");
  _videoGameCardContainer.setAttribute(
    "class",
    "video-game-card-container object-to-filter " +
      videoGameDatas[i]["filter-type"]
  );
  var _videoGameProject = _videoGameCardContainer.appendChild(
    document.createElement("div")
  );
  _videoGameProject.setAttribute("class", "video-game-card");

  _videoGameProject.appendChild(
    Object.assign(document.createElement("img"), {
      classList: "video-game-card-img text-zone",
      src: videoGameDatas[i].image1,
      id: i,
    })
  );
  // var scrollDiv = _videoGameProject.appendChild(Object.assign(document.createElement('div'), {classList: 'video-game-scroll-div'}));
  // var scrollContainer = scrollDiv.appendChild(Object.assign(document.createElement('div'), {classList: 'video-game-scroll-container'}));
  // scrollContainer.appendChild(Object.assign(document.createElement('h4'), {classList: 'video-game-scroll-text1'}, {innerHTML: videoGameDatas[i].name + ' • '}));
  // scrollContainer.appendChild(Object.assign(document.createElement('h4'), {classList: 'video-game-scroll-text2'}, {innerHTML: videoGameDatas[i].name + ' • '}));
  var _videoGameCardDiv = _videoGameCardContainer.appendChild(
    Object.assign(document.createElement("div"), {
      classList: "video-game-card-bottom",
    })
  );
  _videoGameCardDiv.appendChild(
    Object.assign(document.createElement("b"), {
      innerHTML: videoGameDatas[i].name,
    })
  );
  if (videoGameDatas[i]["tags"] != "") {
    var _tagDiv = _videoGameProject.appendChild(
      Object.assign(
        document.createElement("div"),
        { classList: "video-game-tag-div" }
      )
    );
    var _scrollDiv = _tagDiv.appendChild(
      Object.assign(
        document.createElement("div"),
        { classList: "video-game-tag-scroll-text-div" }
      )
    );
    var _sizeDiv =_scrollDiv.appendChild(
      Object.assign(
        document.createElement("div"),
        { style: "width: 1000px;" }
      )
    );
    var _textDivA =_sizeDiv.appendChild(
      Object.assign(
        document.createElement("div"),
        { classList: "scroll-text-new" }
      )
    );
    _textDivA.appendChild(
      Object.assign(
        document.createElement("h5"),
        { innerHTML: videoGameDatas[i]["tags"] + " • " + videoGameDatas[i]["tags"] + " • " +  videoGameDatas[i]["tags"] + " • " +  videoGameDatas[i]["tags"] + " • " + videoGameDatas[i]["tags"] + " • " + videoGameDatas[i]["tags"] + " • " + videoGameDatas[i]["tags"] + " • " + videoGameDatas[i]["tags"] + " • "}
      )
    );
    var _textDivB =_sizeDiv.appendChild(
      Object.assign(
        document.createElement("div"),
        { classList: "scroll-text-new" }
      )
    );
    _textDivB.appendChild(
      Object.assign(
        document.createElement("h5"),
        { innerHTML: videoGameDatas[i]["tags"] + " • " + videoGameDatas[i]["tags"] + " • " +  videoGameDatas[i]["tags"] + " • " +  videoGameDatas[i]["tags"] + " • " + videoGameDatas[i]["tags"] + " • " + videoGameDatas[i]["tags"] + " • " + videoGameDatas[i]["tags"] + " • " + videoGameDatas[i]["tags"] + " • "}
      )
    );
  }

  var videoGameLink = _videoGameProject.appendChild(
    Object.assign(document.createElement("a"), {
      href: videoGameDatas[i].link,
      style: "display:none",
    })
  );

  videoGameContainer.appendChild(_videoGameCardContainer);

  videoGameElements.push(_videoGameProject);
  videoGameLinks.push(videoGameLink);
}

function CreateVideoGameCard() {


}