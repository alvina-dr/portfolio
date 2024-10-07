var MainTitle = document.getElementById("main-title");
var hashtags = document.getElementById("hashtags");

FillTemplate(0);

function FillTemplate(index) {
    console.log("fill template");
    MainTitle.innerText = videoGameDatas[index].name;
    for(var i = 0;  i < videoGameDatas[index].tags.length; i++) {
        hashtags.appendChild(Object.assign(document.createElement('b'), {innerHTML: videoGameDatas[index].tags[i]}));
        hashtags.innerHTML += " ";
    }
}