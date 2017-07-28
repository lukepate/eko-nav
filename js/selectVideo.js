// OLIVER

$( document ).ready(function() {

	var videoContentDesktop = $('.video-content-desktop');
	var slickDesktop = $('.slick-carousel-desktop');
	var slickDesktopImg = $('.slick-carousel-desktop img');
	var slickArrow = $('.slick-arrow');


	// On carousel image click
	slickDesktopImg.click(function() {
		var type = $(this).data('type');
		var src = $(this).data('src');
		var title = $(this).data('title');
		var desc = $(this).data('desc');
		// Find section (branded or sparks)
		if ( $(this).closest('section').hasClass('branded') ) {
			var section = 'section.branded';
		} else if ( $(this).closest('section').hasClass('sparks') ) {
			var section = 'section.sparks';
		}
		var activeWin = $( section + ' .active');

		if (type == 'single') {
			loadVideoData(type, src, title, desc, activeWin, section);
		}
		swapActiveWin(type, activeWin, section);

	});

	// On slick-arrow click
	$('body').on('click', '.slick-arrow', function() {
			var currentVidContainer = $(this).parent();

			if ( currentVidContainer.hasClass('portfolio-carousel-scroll-branded') ) {
				var currentVid = $('.slick-current img.brandedDeskThumb');
			} else if ( currentVidContainer.hasClass('portfolio-carousel-scroll-sparks') ) {
				var currentVid = $('.slick-current img.sparkDeskThumb');
			}

			var type = currentVid.data('type');
			var src = currentVid.data('src');
			var title = currentVid.data('title');
			var desc = currentVid.data('desc');
			// Find section (branded or sparks)
			if ( currentVid.closest('section').hasClass('branded') ) {
				var section = 'section.branded';
			} else if ( currentVid.closest('section').hasClass('sparks') ) {
				var section = 'section.sparks';
			}
			var activeWin = $( section + ' .active');

			// TODO: STOP IF TRYING TO PROCEED PAST END OR START OF PLAYLIST
			// var lastVid = $('.slick-track .slick-slide:last img');
			// var lastVidSrc = lastVid.data('src');

			if (type == 'single') {
				loadVideoData(type, src, title, desc, activeWin, section);
			}
			swapActiveWin(type, activeWin, section);
	});

	function destinationWin(type, activeWin, section) {
		if (type == 'double') {
			return $( section + ' .double-a' );
		} else if (type == 'single') {
			if (activeWin.hasClass('video-double')) {
				return $( section + ' .single-a' );
			} else if (activeWin.hasClass('video-single')) {
				return activeWin.hasClass('single-a') ? $( section + ' .single-b' ) : $( section +' .single-a' );
			}
		}
	}

	function loadVideoData(type, src, title, desc, activeWin, section) {
		// Load data into destination window
		destinationWin(type, activeWin, section).find('iframe').attr('src', src);
		destinationWin(type, activeWin, section).find('h5').text(title);
		destinationWin(type, activeWin, section).find('p').text(desc);
	}

	function swapActiveWin(type, activeWin, section) {
		// Stop current video
		activeWin.find('iframe').attr('src', '');
		activeWin.removeClass('active');
		destinationWin(type, activeWin, section).addClass('active');
	}

});
