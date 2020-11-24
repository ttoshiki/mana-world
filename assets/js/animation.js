"use strict";
jQuery(function() {
  jQuery(window).on('load', function() {
    jQuery('.animation__inner').append('<video src="/wp-content/themes/jin-child/assets/images/pre/main.mp4" autoplay muted>')

    setTimeout(() => {
      jQuery('.animation__inner').append('<button class="animation__fadeout"></button>')
      jQuery('.animation__fadeout').on('click', function() {
        jQuery('.animation__wrapper').fadeOut('500')
      })
    }, 8200);

    setTimeout(() => {
      jQuery('.animation__inner').append('<video src="/wp-content/themes/jin-child/assets/images/pre/loop.mp4" id="loop-animation" autoplay muted loop>')
    }, 8500);
  })
})