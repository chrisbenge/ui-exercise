(function($){
    'use strict';

    var $mobile_trigger = $('.hamburger'),
        $main_nav = $('.main-navigation');

        $mobile_trigger.on('click', function(e){
          $(this).toggleClass('is-active');
          $main_nav.toggleClass('main-navigation--open');
        });

})(jQuery);
