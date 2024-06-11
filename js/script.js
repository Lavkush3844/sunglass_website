$(document).ready(function () {
    // sidebar open and close
    //jquery for toggle sub menus
    $('.sub-btn').click(function () {
        $(this).next('.sub-menu').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate');
    });
    //jquery for expand and collapse the sidebar
    $('.bar').click(function () {
        $('.side-bar').addClass('active');
        $('.menu-btn').css("visibility", "hidden");
    });
    $('.close-btn').click(function () {
        $('.side-bar').removeClass('active');
        $('.menu-btn').css("visibility", "visible");
    });



    $('.center-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        centerMode: false,
        arrows: true,
        dots: false,
        centerPadding: '0px',
        infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                }
            }
        ]
    });

    $('.award-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        centerMode: false,
        arrows: true,
        dots: false,
        centerPadding: '0px',
        infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    dots: true,
                }
            }
        ]
    });

    //   <!-- back button  -->
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            $(".back").fadeIn("");
        } else {
            $(".back").fadeOut("");
        }
    });
    $(".back").on("click", function () {
        $("html, body").animate(
            {
                scrollTop: 0,
            },
            200
        );
    });
});