(function($){
    'use strict';

    var $sidebar = $('.container__right'),
        $sidebar_nav = $('.main-navigation__item--sidebar');

        $sidebar_nav.on('click', function(e){
          $sidebar.toggleClass('container__right--open');
          e.preventDefault();
        });

})(jQuery);
