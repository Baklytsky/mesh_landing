'use strict';

// ********************************************MENU*******************************************
$("#main-nav-menu").on("click","a", function (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
    if (parseInt($(window).width()) < 992) {
        setTimeout(function(){
                $(".burger-icon").toggleClass("burger-icon-active")
                $(".main-menu").toggleClass("mobile-menu-active")
                $("header").removeClass("show-menu")
             },
            400);
    }
});

// ******************************************** Footer - MENU *******************************************
$("#footer-menu").on("click","a", function (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
});
//------------- Header on Scroll --------------------------------------
window.addEventListener('scroll', ()=> {
    let header = document.querySelector('header');
    header.classList.toggle('sticky-header', window.scrollY > 750);
})

//-------------------------- burger btn action --------------------------------------

let header = document.querySelector('header'),
    burgerToggle = document.querySelector('.burger-icon'),
    mobileMenu = document.querySelector('.main-menu');
    burgerToggle.addEventListener("click", showOrCloseMenu);

function showOrCloseMenu() {
        burgerToggle.classList.toggle('burger-icon-active');
        mobileMenu.classList.toggle('mobile-menu-active');

        if (mobileMenu.classList.contains('mobile-menu-active')) {
            headerOverflow();
        } else {
            setTimeout(headerOverflow, 400);
        }
    }

function headerOverflow () {
    header.classList.toggle('show-menu')
}

//------------------------------- Digital sliders ---------------------------------------
//----------------------------------- Top slider ----------------------------------------

jQuery(function ($) {
    $(document).ready(function () {

        $('.top-slider').owlCarousel({
            lazyLoad: true,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            responsiveClass: true,
            loop: true,
            smartSpeed: 1500,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                800: {
                    items: 4
                }
            }
        });
//----------------------------------- Bottom slider ----------------------------------------
        $('.bottom-slider').owlCarousel({
            lazyLoad: true,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 6500,
            autoplayHoverPause: true,
            responsiveClass: true,
            loop: true,
            smartSpeed: 1500,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                800: {
                    items: 4
                }
            }
        });
        //----------------------------------- text slider ----------------------------------------
        $('.text-slider').owlCarousel({
            lazyLoad: true,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 1500,
            autoplayHoverPause: true,
            responsiveClass: true,
            loop: true,
            items: 1,
            animateOut: 'slideOutUp',
            animateIn: 'slideInUp',
        });
        //----------------------------------- jQuery Marquee Running line -------------------------

        if (parseInt($(window).width()) > 768) {
            $('.marquee').marquee({
                duration: 8000,
                duplicated: true,
                startVisible: true,
                pauseOnHover: true
            });
        }
        if (parseInt($(window).width()) < 768) {
            $('.marquee').marquee({
                duration: 5000,
                duplicated: true,
                startVisible: true,
                pauseOnHover: true
            });
        }
    });
});
