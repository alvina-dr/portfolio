var html = 
`
<button id='left-project-button' class="next-project-button">◄</button>
<div style="width: 50%; height: 100%; display: flex; justify-content: center; align-items: center;">
    <p id="left-project" class="next-project-title">Project1</p>
</div>
<div style="width: 50%;  height: 100%; display: flex; justify-content: center; align-items: center;">
    <p id="right-project" class="next-project-title">Project2</p>
</div>
<button id='right-project-button' class="next-project-button next-project-button-right">►</button>
`

document.getElementById("other-projects").innerHTML = html;