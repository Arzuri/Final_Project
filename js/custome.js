jQuery(document).ready(function($)
{


$(' #banner .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})


});