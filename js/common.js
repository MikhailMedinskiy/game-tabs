;(function ($) {
    // Scripts that will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute.
    $(document).ready(function () {

    	$('.tabs-title__link').on('click', function(e){
    		e.preventDefault();
    		var showTab = $(this).attr('href');
    		$('.tabs-content').not(showTab).hide();
    		$('.tabs-title__link').removeClass('tabs-title__link--active');
    		$(showTab).fadeIn();
    		$(this).addClass('tabs-title__link--active');
    	})

    });

    // Scripts that will run after the whole page is loaded (images, videos, iframes. etc)
    $(window).on('load', function () {

    });

    // Scripts that will run on window resize
    $(window).on('resize', function () {

    });
})(jQuery);
