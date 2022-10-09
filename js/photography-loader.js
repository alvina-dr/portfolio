var container1 = document.getElementById("photography-container1");
var container2 = document.getElementById("photography-container2");
var container3 = document.getElementById("photography-container3");

LoadPhoto();

function LoadPhoto() {
    for (var i = 0; i < 26; i++) {
        var _photography = document.createElement("img");
        _photography.src = "../../img/photography/" + i + ".jpg";
        _photography.style.width = "100%";
        if (i < 9) {
            container1.appendChild(_photography);
        }else if (i < 18){
            container2.appendChild(_photography);
        }else {
            container3.appendChild(_photography);
        }
    }
    
}