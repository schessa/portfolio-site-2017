/* global $ */

// Smooth scroll for inter-page links, pt 1
if (window.location.hash) scroll(0,0);
setTimeout(() => scroll(0,0), 1);

// Initialize Isotope
// external js: isotope.pkgd.js
$(() => {
  $('.grid').isotope({
    layoutMode: 'packery',
    itemSelector: '.grid-item'
  });

  // Smooth scroll for same-page links
  $('.navbar a').smoothScroll();

  // Smooth scroll for inter-page links, pt 2
  if(window.location.hash) {
    $('html, body').animate({
      scrollTop: $(window.location.hash).offset().top + 'px'
    }, 1000, 'swing');
  }
});
