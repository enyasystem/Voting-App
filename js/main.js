(function ($) {
    "use strict";
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    // stats counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 6,
        time: 1000
    });
    
})(jQuery);
