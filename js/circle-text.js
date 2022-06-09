var textToCopy = document.getElementById('text-to-copy');
var copiedSign = document.getElementById('copied-sign');
textToCopy.innerHTML = textToCopy.textContent.replace(/\S/g,"<span>$&</span>");

const elements = document.querySelectorAll('span');
for (let i = 0; i < elements.length; i++) {
    elements[i].style.transform = 'rotate('+ i * 18 + 'deg)';
}

copiedSign.style.left = (getOffset(textToCopy).left - copiedSign.offsetWidth/2.5) + 'px';
copiedSign.style.top = (getOffset(textToCopy).top - copiedSign.offsetHeight/2.5) + 'px';
copiedSign.style.display = "none";





function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }