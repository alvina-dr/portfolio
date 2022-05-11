let mouseCursor = document.querySelector(".cursor-default");
let links = document.querySelectorAll("a");
window.addEventListener("mousemove", cursor);

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
            console.log("leave window");
        })
        document.addEventListener('mouseover', () => {
            mouseCursor.classList.remove("cursor-hidden");
            console.log("enter window");

        })
    })