const faBars = document.querySelector('.fa-bars');
const faTimes = document.querySelector('.fa-times');
const navLinksContainer = document.querySelector('.navLinksContainer');
const faSearch = document.querySelector('.fa-search')
const searchContainer = document.querySelector('.searchContainer');
const closeSearch = document.querySelector('#closeSearch');
const faArrowLeft = document.querySelector('.fa-arrow-left');
const faArrowRight = document.querySelector('.fa-arrow-right');
const sliderContainer = document.querySelector('.sliderContainer');


faBars.addEventListener('click', showMobileMenu);
faTimes.addEventListener('click', hideMobileMenu);
faSearch.addEventListener('click', showSearchContainer);
closeSearch.addEventListener('click', hideSearchContainer);
faArrowRight.addEventListener('click', showNextSlide);



function showMobileMenu(){
    navLinksContainer.classList.add('showNavLinksContainer');
    faBars.style.display = 'none';
    faTimes.style.display = 'block';

}

function hideMobileMenu(){
    navLinksContainer.classList.remove('showNavLinksContainer');
    faBars.style.display = 'block';
    faTimes.style.display = 'none';
}

function showSearchContainer() {
    searchContainer.classList.add('displaySearchContainer');
    closeSearch.style.display = 'block';
    faSearch.style.display = 'none';

}

function hideSearchContainer(){
    searchContainer.classList.remove('displaySearchContainer');
    closeSearch.style.display = 'none';
    faSearch.style.display = 'block';
}


function showNextSlide(){
    let firstImageSlide = sliderContainer.firstElementChild;
    firstImageSlide.style.marginRight = '100%';
    let nextImageSlide = sliderContainer.firstElementChild.nextElementSibling;
    console.log(sliderContainer.appendChild(nextImageSlide));
}