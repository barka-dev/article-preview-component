const shareIcon = document.querySelector("#shareIcon");
const shareIconActive = document.querySelector("#shareIconActive");
const shareSection = document.querySelector("#shareSection");

shareIcon.addEventListener('click',(event)=>{
    shareSection.style.display = 'flex';
});

shareIconActive.addEventListener('click',(event)=>{
    shareSection.style.display = 'none';
});