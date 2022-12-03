let mouseCursor = document.querySelector(".cursor-default");
let links = document.querySelectorAll("a, button");
let mailCursor = document.getElementById('mail-cursor');
let mailZone = document.getElementById("mail-zone");
window.addEventListener("mousemove", cursor);
if (mailCursor !== null) {
    mailCursor.classList.add("cursor-hidden");
}

function cursor(e) {
    mouseCursor.style.top = e.clientY + 'px';
    mouseCursor.style.left = e.clientX + 'px';
    if (mailCursor !== null) {
        mailCursor.style.top = e.clientY + 'px';
        mailCursor.style.left = e.clientX + 'px';
    }
}

links.forEach(link =>
    {
        link.addEventListener('mouseleave', () => {
            mouseCursor.classList.remove("cursor-pointer")
        })
        link.addEventListener('mouseover', () => {
            mouseCursor.classList.add("cursor-pointer")
        })

})
document.addEventListener('mouseleave', () => {
    mouseCursor.classList.add("cursor-hidden");
})
document.addEventListener('mouseover', () => {
    mouseCursor.classList.remove("cursor-hidden");
})

if (mailZone !== null) {
    mailZone.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove("cursor-hidden2");
        mailCursor.classList.add("cursor-hidden");
        
    })
    mailZone.addEventListener('mouseover', () => {
        mouseCursor.classList.add("cursor-hidden2");
        mailCursor.classList.remove("cursor-hidden");
    })
    mailZone.addEventListener('click', () => {
        console.log("click on mail zone");
        CopyText();
    })
}
