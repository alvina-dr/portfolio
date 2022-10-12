var textToCopy = document.getElementById('text-to-copy');
var string = textToCopy.innerHTML;
textToCopy.setAttribute("onclick", "CopyText()")

function CopyText() {
    navigator.clipboard.writeText(string);
    alert("Copied");
    copiedSign.style.display = "block";
    setTimeout(() => { copiedSign.style.display = "none"; }, 1000);

}