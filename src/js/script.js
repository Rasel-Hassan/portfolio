

// Owl Carousel Setup

$(document).ready(function(){
    $(".testimonial-slider").owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        smartSpeed: 2000,
        margin: 30,
        autoplayHoverPause: true,
        autoplay: true,
        responsive: { 0: { items: 1 }, 576: { items: 1 }, 768: { items: 3 }, 1024: { items: 4 }, 1200: { items: 5 } },
    });
})



// Scroll Menu Toggle


window.addEventListener('scroll', function(){
    const header = document.querySelector('.navigation');
    header.classList.toggle('active', scrollY > 200);
})

// Mobile Menu Toggle

function menuToggle(){
    const menu = document.querySelector('.menuToggle');
    const mobileMenu = document.querySelector('.menu-items-wrapper')
    menu.classList.toggle('active');
    mobileMenu.classList.toggle('active')
}

// Count Up

$('.count').countUp();


AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});





















































































//# sourceMappingURL=script.js.map
