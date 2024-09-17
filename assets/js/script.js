$(document).ready(function () {
    $('#toggleButton').click(function () {
        $('#menu').toggle();
    });

    // hero banner slider
    $('.slider').slick({
        dots: true,              // Show navigation dots
        infinite: true,           // Infinite scrolling
        speed: 500,               // Transition speed
        slidesToShow: 1,          // Number of slides to show
        slidesToScroll: 1,        // Number of slides to scroll
        autoplay: true,           // Autoplay the slider
        autoplaySpeed: 3000,      // Delay between slides in autoplay mode
        arrows: true,             // Show navigation arrows
        fade: false,               // Fade transition between slides
        cssEase: 'linear'
    });
});