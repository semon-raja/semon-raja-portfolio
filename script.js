$(document).ready(function () {

    /* ===== STICKY NAVBAR + SCROLL-UP BUTTON ===== */
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }

        // Active nav link on scroll (single page only)
        if ($('.home').length) {
            var scrollPos = $(window).scrollTop() + 80;
            $('section').each(function () {
                var id     = $(this).attr('id');
                var top    = $(this).offset().top;
                var bottom = top + $(this).outerHeight();
                if (scrollPos >= top && scrollPos < bottom) {
                    $('.navbar .menu li a').removeClass('active');
                    $('.navbar .menu li a[href="#' + id + '"]').addClass('active');
                }
            });
        }
    });

    /* ===== SCROLL-UP BUTTON CLICK ===== */
    $('.scroll-up-btn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });

    /* ===== HAMBURGER MENU ===== */
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Close mobile menu after clicking a link
    $('.navbar .menu li a').click(function () {
        $('.navbar .menu').removeClass("active");
        $('.menu-btn i').removeClass("active");
    });

    /* ===== TYPING ANIMATION (index only) ===== */
    if ($('.typing').length) {
        new Typed(".typing", {
            strings: [
                "Software Engineer",
                "Full Stack Developer",
                "Java Developer",
                "SQL Developer"
            ],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    }

    /* ===== OWL CAROUSEL (projects) ===== */
    if ($('.carousel').length) {
        $('.carousel').owlCarousel({
            margin: 20,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2500,
            autoplayHoverPause: true,
            dots: true,
            responsive: {
                0:    { items: 1 },
                600:  { items: 2 },
                1000: { items: 3 }
            }
        });
    }

});