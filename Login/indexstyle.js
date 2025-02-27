$(document).ready(function() {
    // Smooth scrolling
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000); // Adjust animation duration as needed
          return false;
        }
      }
    });
  
    // Parallax effect (if needed)
    $(window).scroll(function() {
      var scrollPos = $(window).scrollTop();
      $('.parallax').css({
        top: scrollPos / 2 + "px",
        opacity: 1 - scrollPos / 200
      });
    });
  });