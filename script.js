const shareIcon = document.querySelector("#shareIcon");
const activeIcon = document.querySelector("#activeIcon");
const sectionContent = document.querySelector("#sectionContent");
const shareSection = document.querySelector("#shareSection");
const imgPathRegex = /.\/images\/icon-share\.svg$/;



shareIcon.addEventListener('click',(event)=>{
    sectionContent.classList.toggle('activePosition');
    shareSection.classList.toggle('active');
    shareIcon.classList.toggle('activeShareButton');

    if (window.innerWidth >= 768) {
        sectionContent.classList.remove('activePosition');
    }

    if(imgPathRegex.test(activeIcon.src)){
        activeIcon.src = './images/icon-share-active.svg';
    }else{
        activeIcon.src = './images/icon-share.svg';
    }

    

});
