var textToCopy = document.getElementById('text-to-copy');
textToCopy.innerHTML = textToCopy.textContent.replace(/\S/g,"<span>$&</span>");

const elements = document.querySelectorAll('span');
for (let i = 0; i < elements.length; i++) {
    elements[i].style.transform = 'rotate('+ i * 18 + 'deg)';
}