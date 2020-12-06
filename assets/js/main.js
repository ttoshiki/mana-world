"use strict";
jQuery(function() {
  jQuery('a[href^="#"]').on('click', function(){
    var speed = 300;
    var href= jQuery(this).attr("href");
    var target = jQuery(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    jQuery("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });

  // タブレットの時はPC版縮小表示
  let ua = navigator.userAgent;
  if((ua.indexOf('iPhone') > 0) || ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0)){
      jQuery('head').prepend('<meta name="viewport" content="width=device-width,initial-scale=1">');
  } else {
      jQuery('head').prepend('<meta name="viewport" content="width=1000">');
  }

  // spメニューOPEN
  jQuery(".header__trigger").on('click', function() {
    if ((jQuery(this)).hasClass("-opened")) {
      jQuery(".header__hammenuWrapper").fadeOut(300);
    } else {
      jQuery(".header__hammenuWrapper").fadeIn(300);
    }
    if (!(jQuery("#header").hasClass("-fixed"))) {
      jQuery(".header").addClass('-fixed');
    } else {
      jQuery("header").removeClass("-fixed");
    }
    jQuery(this).toggleClass('-opened')
    jQuery(".header__trigger").toggleClass('active');
  });


  jQuery(".wpcf7-submit").on('click', function() {
    const submitText = jQuery("#stripe-submit").val();
    console.log(submitText)
  });
  console.log(submitText)
  jQuery("#stripe-submit").on('click', function() {
    jQuery("#stripe-submit").val(submitText);
  });
})