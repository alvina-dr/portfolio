var textToCopy = document.getElementById('text-to-copy');
textToCopy.setAttribute("onclick", "CopyText()")

function CopyText() {
    navigator.clipboard.writeText(textToCopy.innerHTML);
    alert('Copied !');
}