jQuery(document).ready(function($) {
$('.products-carousel').owlCarousel({
    // center: true,
    loop: false,
    margin: 10,
    nav: true,
    dots: false,
    // autoHeight: false,
    // autoHeightClass: 'owl-height',
    // stagePadding:170,
    autoplay: false,
    autoplayTimeout: 2500,
    autoplaySpeed: 5000, // this seems to make it autoscroll
    autoplayHoverPause: false,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    // navText : ["<img src='/wp-content/uploads/2021/07/Arrow-Left-Blair-ITC.png' />","<img src='/wp-content/uploads/2021/07/Arrow-Right-Blair-ITC.png' />"],
    responsive: {
        0: {
            items: 2,
            // slideBy: 2
        },
        600: {
            items: 3,
            // slideBy: 3
        },
        1000: {
            items: 4,
            // slideBy: 4
        }
    }
});

$('.styku-scanner-carousel').owlCarousel({
    // center: true,
    loop: false,
    margin: 40,
    nav: true,
    dots: true,
    autoHeight: false,
    // autoHeightClass: 'owl-height',
    // stagePadding:170,
    autoplay: false,
    autoplayTimeout: 3500,
    autoplaySpeed: 2000, // this seems to make it autoscroll
    autoplayHoverPause: false,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    // navText : ["<img src='https://resources.latinowebstudio.com/wp-content/uploads/2024/10/Arrow-within-Circle-Left-Gray.png' />","<img src='https://resources.latinowebstudio.com/wp-content/uploads/2024/10/Arrow-within-Circle-Right-Gray.png' />"],
    responsive: {
        0: {
            items: 1,
            // slideBy: 2
        },
        600: {
            items: 2,
            // slideBy: 3
        },
        1000: {
            items: 2,
            slideBy: 1
        }
    }
});
$('.testimonials-carousel').owlCarousel({
    // center: true,
    loop: false,
    margin: 40,
    nav: true,
    dots: true,
    autoHeight: false,
    // autoHeightClass: 'owl-height',
    // stagePadding:170,
    autoplay: false,
    autoplayTimeout: 3500,
    autoplaySpeed: 2000, // this seems to make it autoscroll
    autoplayHoverPause: false,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    // navText : ["<img src='https://resources.latinowebstudio.com/wp-content/uploads/2024/10/Arrow-within-Circle-Left-Gray.png' />","<img src='https://resources.latinowebstudio.com/wp-content/uploads/2024/10/Arrow-within-Circle-Right-Gray.png' />"],
    responsive: {
        0: {
            items: 1,
            // slideBy: 2
        },
        600: {
            items: 2,
            // slideBy: 3
        },
        1000: {
            items: 4,
            slideBy: 1
        }
    }
});

});