"use strict";
jQuery(function() {
  jQuery(window).on('load', function() {
    jQuery('.pre__wrapper').append('<video src="/wp-content/themes/jin-child/assets/images/pre/main.mp4" autoplay muted>')

    setTimeout(() => {
      jQuery('.pre__wrapper').append('<button class="fadeout"></button>')
      jQuery('.fadeout').on('click', function() {
        console.log('a')
      })
    }, 8200);

    setTimeout(() => {
      jQuery('.pre__wrapper').append('<video src="/wp-content/themes/jin-child/assets/images/pre/loop.mp4" id="loop-animation" autoplay muted loop>')
    }, 8500);
  })
})