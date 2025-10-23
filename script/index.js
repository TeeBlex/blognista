
// header section scripting begins 
const faBars = document.querySelector('.fa-bars');
const navLinksContainer = document.querySelector('.navLinksContainer');
const faTimes = document.querySelector('.fa-times');
const faSearch = document.querySelector('.fa-search');
const searchContainer = document.querySelector('.searchContainer');
const closeSearch = document.querySelector('#closeSearch');


faBars.addEventListener('click', function(){
    navLinksContainer.classList.add('showNavLinksContainer');
    faBars.style.display = 'none';
    faTimes.style.display = 'block';
})

faTimes.addEventListener('click', function(){
    navLinksContainer.classList.remove('showNavLinksContainer');
    faTimes.style.display = 'none';
    faBars.style.display = 'block';
})

faSearch.addEventListener('click', function(){
    searchContainer.classList.add('displaySearchContainer');
    faSearch.style.display = 'none';
    closeSearch.style.display = 'block';
})


closeSearch.addEventListener('click', function(){
    searchContainer.classList.remove('displaySearchContainer');
    faSearch.style.display = 'block';
    closeSearch.style.display = 'none';
})

// header section ends--


// slider section begins
const prev = document.querySelector('.fa-arrow-left');
const next = document.querySelector('.fa-arrow-right');
const sliderContainer = document.querySelector('.sliderContainer');
const images = document.querySelectorAll('.sliderContainer img');

let i = 0;
next.addEventListener('click', function(){
    
     i++;

     if (i == images.length){
        i = 0;
    }
   

    updateSlide();
        
})

prev.addEventListener('click', function(){
    i--;

    if (i < 0){
        i = images.length - 1;
    }
    
   updateSlide();

})

setInterval(function(){
    i++;
    if (i == images.length){
        i = 0;
    }

    updateSlide();

}, 5000);


function updateSlide(){
    sliderContainer.style.transform = `translate(${-i * 100}%)`;
    sliderContainer.style.transition = '.9s';
}

// console.log(setInterval(myName, 3000));

// slider section ends here



// popular blog button tabs begins

const overlayForMoreBlogQuickLinks = document.querySelector('.overlayForMoreBlogQuickLinks')
const showMoreArrow = document.querySelector('.showMoreArrow');
const moreBlogQuickLinks = document.querySelector('.moreBlogQuickLinks');
const blogQuickLinksBtn = document.querySelectorAll('.blogQuickLinks button');
const popularBlogImageAndContentOverallWrapper = document.querySelector('.popularBlogImageAndContentOverallWrapper');


for(let i = 0; i < blogQuickLinksBtn.length; i++){
    
    blogQuickLinksBtn[i].addEventListener('focus', function(){

        blogQuickLinksBtn[0].classList.remove('allBtn');
        
        blogQuickLinksBtn[i].classList.add('hover-state');
        
        popularBlogImageAndContentOverallWrapper.style.transform = `translate(${-i * 100}%)`;
        popularBlogImageAndContentOverallWrapper.style.transition = '.8s';

       
    });

    blogQuickLinksBtn[i].addEventListener('blur', function(){
        blogQuickLinksBtn[i].classList.remove('hover-state');
    })
}


showMoreArrow.addEventListener('click', function(){
overlayForMoreBlogQuickLinks.classList.add('showOverlayForMoreBlogQuickLinks'); 
    
})

overlayForMoreBlogQuickLinks.addEventListener('click', function(){
    overlayForMoreBlogQuickLinks.classList.remove('showOverlayForMoreBlogQuickLinks'); 
    moreBlogQuickLinks.style.transition = '.5s';
})

// popular blog button scripting ends here



