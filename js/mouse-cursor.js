let mouseCursor = document.querySelector(".cursor-default");
let links = document.querySelectorAll("a, button");
let mailCursor = document.getElementById('mail-cursor');
let mailZone = document.getElementById("mail-zone");
let textCursor = document.getElementById("text-cursor");
let textZones = document.getElementsByClassName("text-zone");
window.addEventListener("mousemove", cursor);
if (mailCursor !== null) {
    mailCursor.classList.add("cursor-hidden");
}
if (textCursor !== null) {
    textCursor.classList.add("cursor-hidden");
}


function cursor(e) {
    mouseCursor.style.top = e.clientY + 'px';
    mouseCursor.style.left = e.clientX + 'px';
    if (mailCursor !== null) {
        mailCursor.style.top = e.clientY + 'px';
        mailCursor.style.left = e.clientX + 'px';
    }
    if (textCursor !== null) {
        textCursor.style.top = e.clientY + 'px';
        textCursor.style.left = e.clientX + 'px';
    }
}

links.forEach(link =>
    {
        link.addEventListener('mouseleave', () => {
            mouseCursor.classList.remove("cursor-pointer");
        })
        link.addEventListener('mouseover', () => {
            mouseCursor.classList.add("cursor-pointer");
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
        mailCursor.animate([
            {transform: 'scale(1)'},
            {transform: 'scale(1.2) rotate(360deg)'},
            {transform: 'scale(1) rotate(360deg)'}
          ], {
            duration: 500,
          });
        CopyText();
    })
}


if (textZones.length > 0) {
    for (let i = 0; i < textZones.length; i++) {
        textZones[i].addEventListener('mouseleave', () => {
            mouseCursor.classList.remove("cursor-hidden2");
            textCursor.classList.add("cursor-hidden");
            
        })
        textZones[i].addEventListener('mouseover', () => {
            mouseCursor.classList.add("cursor-hidden2");
            textCursor.classList.remove("cursor-hidden");
        })
        textZones[i].addEventListener('click', () => {
            textCursor.animate([
                {transform: 'scale(1)'},
                {transform: 'scale(1.2) rotate(360deg)'},
                {transform: 'scale(1) rotate(360deg)'}
              ], {
                duration: 500,
              });
              GoToLink();
        })
    }

}