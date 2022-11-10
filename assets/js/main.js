/* Change color header */
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header');
}

window.addEventListener('scroll', scrollHeader)

/* Rwiper */

var swiperPopular = new Swiper(".popular__container", {
    spaceBetween:32,
    grabCursor:true,
    centeredSlides:true,
    slidesPerView:'auto',
    loop:true,
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    }
});

/* Accordion */

const accordionItems = document.querySelectorAll('.value__accordion-item');

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.value__accordion-header');

    accordionHeader.addEventListener('click', () => {
        const openIten = document.querySelector('.accordion-open')
        toggleItem(item)

        if(openIten && openIten !== item){
            toggleItem(openIten)
        }
    })
})

const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.value__accordion-content');

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style');
        item.classList.remove('accordion-open');
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
}

/* Scroll section */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeigth = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeigth){
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.add('active-link');
        }else{
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);

/* Show scroll up */
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 350){
        scrollUp.classList.add('show-scroll');
    }else{
        scrollUp.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollUp);

/* Dark theme */

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

// Previously selected topic if user selected
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme taht tht interface
const getCurrectTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrectIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon':'bx bx-sun';

//We valid id the user previusly o topic

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add':'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add':'remove'](iconTheme);
}

// Active / desactive

themeButton.addEventListener('click', () =>{
    //Add or remove the dark
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    // We save the teme and the current icon
    localStorage.setItem('selected-theme', getCurrectTheme());
    localStorage.setItem('selected-icon', getCurrectIcon());
})

/* Scroll reveal */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay:400,
    reset:true,
})

sr.reveal('.home__title, .popular__container, .subscribe__container, .footer__container')
sr.reveal('.home__description, .footer__description', {delay:500});
sr.reveal('.home__search', {delay:600});
sr.reveal('.home__value', {delay:700});
sr.reveal('.home__images', {delay:800, origin: 'bottom'});
sr.reveal('.logos__img', {interval:100});
sr.reveal('.value__images, .contact__content', {origin:'left'});
sr.reveal('.value__content .contact__images', {origin:'right'});
