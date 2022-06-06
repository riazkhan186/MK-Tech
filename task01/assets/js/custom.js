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

    // popup button
    $('.popup-button').click(function () {
        $('.popup').css('visibility', 'visible');
        $('.popup-content').addClass('hi');
    })
    $('#popup-close').click(function () {
        $('.popup').css('visibility', 'hidden');
        $('.popup-content').removeClass('hi');
    })
    
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

    $(".partner-slider-area").owlCarousel({
    autoplayHoverPause: true,
    autoplaySpeed: 1500,
    autoplay: true,
    loop: true,
    dots: false,
    margin: 30,
    responsive: {
        0: {
        items: 3,
        margin: 20,
        },
        576: {
        items: 3,
        margin: 50,
        },
        768: {
            items: 4,
            margin: 80,
        },
        992: {
        items: 5,
        margin: 80,
        },
        1200: {
        items: 6,
        margin: 100,
        },
    },
    });





    // Go to Top
    $(function () {
        // Scroll Event
        $(window).on("scroll", function () {
            var scrolled = $(window).scrollTop();
            if (scrolled > 600) $(".go-top").addClass("active");
            if (scrolled < 600) $(".go-top").removeClass("active");
        });
        // Click Event
        $(".go-top").on("click", function () {
            $("html, body").animate({ scrollTop: "0" }, 500);
        });
    });


    $(".odometer").appear(function (e) {
        var odo = $(".odometer");
        odo.each(function () {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });

    // WOW Animation JS
    if ($(".wow").length) {
        var wow = new WOW({
            mobile: false,
        });
        wow.init();
    }

})(jQuery);