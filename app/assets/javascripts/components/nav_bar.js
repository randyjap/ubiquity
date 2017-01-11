// Legal, Credits and Links
// Created and maintained by Piotr and @oskar.
// Hosted on DigitalOcean
//
// License
//
// All code belongs to the poster and no license is enforced.
//
// JSFiddle or its authors are not responsible or liable for any loss or damage of any kind during the usage of provided code.
//
// Links
//
// About JSFiddle
// Status page by updown.io
// http://jsfiddle.net/mariusc23/s6mLJ/31/

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.main-nav').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.main-nav').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.main-nav').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}
