let mouseCursor = document.querySelector(".cursor-default");
let links = document.querySelectorAll("a, button");
window.addEventListener("mousemove", cursor);
console.log(links);

function cursor(e) {
    mouseCursor.style.top = e.clientY + 'px';
    mouseCursor.style.left = e.clientX + 'px';

}

links.forEach(link =>
    {
        link.addEventListener('mouseleave', () => {
            mouseCursor.classList.remove("cursor-pointer")
        })
        link.addEventListener('mouseover', () => {
            mouseCursor.classList.add("cursor-pointer")
        })
        document.addEventListener('mouseleave', () => {
            mouseCursor.classList.add("cursor-hidden");
        })
        document.addEventListener('mouseover', () => {
            mouseCursor.classList.remove("cursor-hidden");
        })
    })