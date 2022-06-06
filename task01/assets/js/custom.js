(function ($) {
    "use strict";
    // Slider Area
    $(".slider-content").owlCarousel({
        autoplayHoverPause: true,
        autoplaySpeed: 1500,
        autoplay: true,
        loop: true,
        dots: true,
        margin: 30,
        nav: true,
        navText: ['<i class="fa-solid fa-angle-left"></i>`', '<i class="fa-solid fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            992: {
                items: 1.8,
            },
        },
    });

    // Odometer Area
    $(".odometer").appear(function (e) {
        var odo = $(".odometer");
        odo.each(function () {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });
})(jQuery);