const primaryNav = document.querySelector('.nav');
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');

mobileNavToggle.addEventListener('click', ()=> {
    const visibility = primaryNav.getAttribute('data-visible');



    if (visibility==="false") {
        primaryNav.setAttribute('data-visible', 'true');
        mobileNavToggle.setAttribute('aria-expanded', 'true');
    } else if (visibility==="true") {
        primaryNav.setAttribute('data-visible', 'false');
        mobileNavToggle.setAttribute('aria-expanded', 'false');
    }

    console.log(visibility);
})