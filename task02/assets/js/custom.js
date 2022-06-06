(function ($) {
    "use strict";
    // for sticky navbar
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $(".navbar-area").addClass("sticky");
        } else {
            $(".navbar-area").removeClass("sticky");
        }
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $(".navbar-area .main-nav").addClass("sticky");
        } else {
            $(".navbar-area .main-nav").removeClass("sticky");
        }
    });

    // Mean Menu
    $(".mean-menu").meanmenu({
        meanScreenWidth: "1199",
    });

    $(".banner-slider-area").owlCarousel({
        autoplayHoverPause: true,
        autoplaySpeed: 1000,
        autoHeight: true,
        loop: true,
        autoplay: true,
        dots: true,
        items: 1,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    });
})(jQuery);