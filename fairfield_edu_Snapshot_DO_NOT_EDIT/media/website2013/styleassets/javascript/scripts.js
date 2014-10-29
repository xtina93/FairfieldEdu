$(document).ready(function() {

	//main navigation
	$activeNavItem = '';
	$('#main-nav a').click(function(e) {
		e.preventDefault();

		$('#main-nav a').removeClass('active');
		$(this).addClass('active');
		var $value = $(this).attr('href');

		//if all sub-menus are closed
		if ($activeNavItem === '') {
			$($value).css('opacity', 0).stop(true,false).slideDown(600).animate({ opacity: 1 }, { queue: false, duration: 600, easing: 'swing' });
			$activeNavItem = $value;
		}

		//if another sub-menu is open
		else if ($activeNavItem != $value) {
			$('.sub-menu').css('opacity', 1).stop(true,false).slideUp(400).animate({ opacity: 0 }, { queue: false, duration: 400, easing: 'swing', complete:
				function() {
					$($value).css('opacity', 0).slideDown(600).animate({ opacity: 1 }, { queue: false, duration: 600, easing: 'swing' });
				}
			});
			$activeNavItem = $value;
		}

		//if this sub-menu is open
		else if ($activeNavItem === $value) {
			$('.sub-menu').css('opacity', 1).stop(true,false).slideUp(400).animate({ opacity: 0 }, { queue: false, duration: 400, easing: 'swing' });
			$activeNavItem = '';
			$('#main-nav a').removeClass('active');
		}
	});

	//search animation
	$('#search-btn').click(function(e) {
		e.preventDefault();
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('#search-form').slideUp(400);
			$('.search-field').blur();
		}
		else {
			$(this).addClass('active');
			$('#search-form').slideDown(400);
			$('.search-field').focus();
		}
	});

	//mobile navigation
	$('#main-nav > .menu-toggle').click(function() {
		$(this).toggleClass('expanded');
		$('#main-nav ul, #nav-bar, #top-nav-container').toggleClass('expanded');
	});
	$('#left-sidebar-nav > .menu-toggle').click(function() {
		$(this).toggleClass('expanded');
		$('#left-sidebar-nav').toggleClass('expanded');
	});

	//home carousel
  $('#home-carousel .royalSlider').royalSlider({
	  autoScaleSlider: false,
	  imgHeight: 400,
	  imageAlignCenter: true,
	  keyboardNavEnabled: true,
	  navigateByClick: false,
	  imageScaleMode: 'fill',
	  slidesSpacing: 0,
	  arrowsNav: false,
	  controlsInside: false,
	  globalCaption: true,
	  controlNavigation: 'bullets',
	  transitionSpeed: 700,
  	autoPlay: {
  		enabled: true,
  		pauseOnHover: false,
  		delay: 5000
  	}
  });

	//hide nav-bars if only one image
	if ($('.rsBullet').length >= 2) {
		$('.rsBullets').show();
	}
	else {
		$('.rsBullets').hide();
	}

	//scale hero images
	$('#header-image').anystretch();

	//carousel galleries
	$('.carousel').carousel();

	//accordion menus
	$('.accordion').collapse();

	$('.accordion-body').on('show', function(e) {
    $(e.currentTarget).parent().find('.accordion-toggle').addClass('active');
  });
	$('.accordion-body').on('hide', function(e) {
		$(e.currentTarget).parent().find('.accordion-toggle').removeClass('active');
	});

	$('.nav-tabs a').click(function(e) {
	  e.preventDefault();
	  $(this).tab('show');
	});

	//instagram feed
	$("#instagram").instagram({
		accessToken: '196437183.24f597d.4d92f3635c074271aa88f884a6cf57e8',
		userId: '196437183',
		image_size: 'standard_resolution',
		show: 1,
		onLoad : function(photos, data) {
      $('#instagram').append('<span id="loading-img">Loading latest post...</span>');
    },
		onComplete : function(photos, data) {
      $('#loading-img').remove();
    }
	 });

	//responsive videos
	$("#main-content").fitVids();

	$('#scroll-link a').on('click',function(e) {
	    e.preventDefault();
	    var target = this.hash,
	    $target = $(target);
	    $('html, body').stop().animate({ 'scrollTop': $target.offset().top }, 800, 'swing');
	});

	// Mobile restructing
	if($(window).width() < 767){
		$('#right-sidebar').insertAfter('#main-content');
	}
        
        
        /* t4 addition to clean up generated tag listing  */
        if($(".tags").length){
    	 var str =  $('.tags li:last').html().slice(0, -1);
	$('.tags li:last').html(str);
 	}; //end existence check, end t4 addition

/*t4 addition for inside page carousel*/
	$('.carousel-indicators li').each(function(index) {
	$(this).attr('data-slide-to', index);
});
/*end t4 addition for inside page carousel*/
        
        
}); //onready


$(window).load(function() {

});