$(document).ready(function(){

    // Scroll events

    $(window).scroll(function(){

        // Sticky navbar

        if(this.scrollY > 20){

            $('.navbar').addClass("sticky");

        }else{

            $('.navbar').removeClass("sticky");

        }


        // Show scroll-up button

        if(this.scrollY > 500){

            $('.scroll-up-btn').addClass("show");

        }else{

            $('.scroll-up-btn').removeClass("show");

        }

    });


    // Scroll-up button click

    $('.scroll-up-btn').click(function(){

        $('html').animate({

            scrollTop:0

        });

    });


    // toggle menu/navbar section

    $('.menu-btn').click(function(){

        $('.navbar .menu').toggleClass("active");

        $('.menu-btn i').toggleClass("active");

    });

    // close mobile menu after clicking a link

    $('.navbar .menu li a').click(function(){

        $('.navbar .menu').removeClass("active");

        $('.menu-btn i').removeClass("active");

    });
    // typing animation script

    var typed = new Typed(".typing", {

        strings: ["Software Engineer","Full Stack Developer","Java Developer","SQL Developer"],

        typeSpeed:100,

        backSpeed:60,

        loop:true

    });
    // Owl Carousel

    $('.carousel').owlCarousel({

        margin:20,

        loop:true,

        autoplay:true,

        autoplayTimeout:2000,

        autoplayHoverPause:true,

        dots:true,

        responsive:{

            0:{
                items:1
            },

            600:{
                items:2
            },

            1000:{
                items:3
            }

        }

    });

});