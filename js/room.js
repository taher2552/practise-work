const linkSection = document.querySelector('.link')
const hoverOnMe = document.querySelector('.hover_on_me');
const hoverLink = document.querySelector('.hover_link');

linkSection.addEventListener('mouseover', ()=>{
    hoverLink.style.display="block";
    hoverOnMe.style.display="none";
    console.log("over")
})
linkSection.addEventListener('mouseout', ()=>{
    hoverLink.style.display="none";
    hoverOnMe.style.display="block";
})

function copyFunction(){
    textToCopy=hoverLink.innerText;
    navigator.clipboard.writeText(textToCopy);
}

