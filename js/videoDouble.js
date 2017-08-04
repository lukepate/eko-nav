// OLIVER

$( document ).ready(function() {

	// EVENT HANDLERS
	function addVideoOpenHandler() {
		$('.video-double-closed').click(function() {
	  	openVideo( $(this) );
	  	// Remove click event
	  	$(this).off();
		});
	}

	addVideoOpenHandler();

  function addVideoCloseHandler() {
  	// Click on close button
	  $('.closeVidBtn').on('click', function() {
	  	closeVideo( $(this).parent() );
		});
	}

	addVideoCloseHandler();

	function openVideo(vidDiv) {
		console.log('click')
  	var vid = $('video', vidDiv)[0];

  	if ( vidDiv.hasClass('video-double-closed') ) {
			// Hide description text and play btn
			if ( vidDiv.hasClass('video-double-right')){
				$('.video-double-left').hide();
			} else {
				$('.video-double-right').hide();
			}
			$('.video-double-left p, .video-double-right p').hide();
			$('.playVidBtn', vidDiv).hide();
			// Bring video div to front
			vidDiv.css('z-index', 10);
			// Enlarge video vid
			vidDiv.removeClass('video-double-closed');
			vidDiv.addClass('video-double-open');
			// Show close button
			setTimeout(function() {
				$('.closeVidBtn', vidDiv).show();
			}, 500);
			// Play video
			vid.play();
		}
	}

	function closeVideo(vidDiv) {
		var vid = $('video', vidDiv)[0];

		// Hide close button
		if ( vidDiv.hasClass('video-double-right')){
			$('.video-double-left').show();
		} else {
			$('.video-double-right').show();
		}
		$('.closeVidBtn', vidDiv).hide();
		// Stop video
		vid.load();
		// Minimize video div
		vidDiv.removeClass('video-double-open');
		vidDiv.addClass('video-double-closed');

		setTimeout(function() {
			// Remove z-index
			vidDiv.css('z-index', 0);
			// Show description text and play btn
			$('.video-double-left p, .video-double-right p').show();
			$('.playVidBtn', vidDiv).show();
			// Refresh open video click handler
			addVideoOpenHandler();
		}, 500);
	}

	$('.1-on-1-a').click(function (e) {
		e.preventDefault();
   	$('.playVidBtn').toggle();
		// $('.play-b').toggle();
		$('.1-on-1-b').hide();
		$('video').on('ended',function(){
	 	$('.1-on-1-b').show();
 		});
	});

	$('.1-on-1-b').click(function (e) {
		e.preventDefault();
		$('.playVidBtn').toggle()
		// $('.play-a').toggle();
		$('.1-on-1-a').hide();
		$('video').on('ended',function(){
		$('.1-on-1-a').show();
		});
	});

	$('.play-b ').click(function (e) {
		e.preventDefault();
		$('.play-b').show();
	});
	$('.play-a ').click(function (e) {
		e.preventDefault();
		$('.play-a').show();
	});



	$('.portfolio-carousel-mobile').on('swipe', function(event, slick, afterChange){
		// $(this).hide()
					// alert('this is 1')

	});

$('.portfolio-carousel-mobile').on('afterChange', function(event, slick, currentSlide){
    // $('.slick-active p').removeClass('hidden');
		$('.slick-active p').removeClass('hidden');

});

$('.portfolio-carousel-mobile').on('beforeChange', function(event, slick, currentSlide){
    // $('.slick-active p').addClass('hidden');

});





	$('video').on("ended", function() {
    closeVideo( $(this).parent() );
	});

	$('#one-slide').click(function (e) {
		e.preventDefault();
		$('.one').show()
		$(' .two').hide()
		// $('.mobile-one').show()
		$('#two-slide, #three-slide, #four-slide, #five-slide').removeClass('li-active')
		$('#one-slide').addClass('li-active')
	});

	$('#two-slide').click(function (e) {
		e.preventDefault();
   	$('.one').hide()
		$('.two').show()
		$('#one-slide, #three-slide, #four-slide, #five-slide').removeClass('li-active')
		$('#two-slide').addClass('li-active')
	});




	  if ( $('.mobile-li:visible').css('display') == 'block' ){
			$('#one-slide-mobile').click(function (e) {
				e.preventDefault();
				$('.mobile-one').show()
				$('.mobile-two, .mobile-four').hide()
				$('.mobile-five, .mobile-three').css("opacity", "0")
				$('#two-slide-mobile, #three-slide-mobile, #four-slide-mobile, #five-slide-mobile').removeClass('li-active')
				$('#one-slide-mobile').addClass('li-active')
			});

			$('#two-slide-mobile').click(function (e) {
				e.preventDefault();
				$('.mobile-one, .mobile-four').hide()
				$('.mobile-five, .mobile-three').css("opacity", "0")
				$('.mobile-two').show()

				$('#one-slide-mobile, #three-slide-mobile, #four-slide-mobile, #five-slide-mobile').removeClass('li-active')
				$('#two-slide-mobile').addClass('li-active')
			});

			$('#three-slide-mobile').click(function (e) {
				e.preventDefault();
				$('.mobile-two, .mobile-one, .mobile-four').hide()
				$('.mobile-five').css("opacity", "0")
				$('.mobile-five').hide()
				$('.mobile-three').css("opacity", "1")
				$('#one-slide-mobile, #two-slide-mobile, #five-slide-mobile, #four-slide-mobile').removeClass('li-active')
				$('#three-slide-mobile').addClass('li-active')
			});

			$('#four-slide-mobile').click(function (e) {
				e.preventDefault();
				$('.mobile-one, .mobile-two').hide()
				$('.mobile-five, .mobile-three').css("opacity", "0")

				$('.mobile-four').show()
				$('#one-slide-mobile, #two-slide-mobile, #three-slide-mobile, #five-slide-mobile').removeClass('li-active')
				$('#four-slide-mobile').addClass('li-active')
			});

			$('#five-slide-mobile').click(function (e) {
				e.preventDefault();
				$('.mobile-one, .mobile-two, .mobile-four').hide()
				$('.mobile-five').css("opacity", "1")
				$('.mobile-three').css("opacity", "0")
				$('.mobile-five').show()
				$('#one-slide-mobile, #two-slide-mobile, #three-slide-mobile, #four-slide-mobile').removeClass('li-active')
				$('#five-slide-mobile').addClass('li-active')
			});

 		 }


	//Firefox
	//  $('#body').bind('DOMMouseScroll', function(e){
	//      if(e.originalEvent.detail > 0) {
	 //
	// 			$('.one').show()
	// 		 $('.two').hide()
	// 		 $('#two-slide').removeClass('li-active')
	// 		 $('#one-slide').addClass('li-active')
	//      }else {
	// 			 $('.one').hide()
 // 				$('.two').show()
 // 			// 	$('#one-slide').removeClass('li-active')
 // 			// 	$('#two-slide').addClass('li-active')
	 //
	//      }
	 //
	//      //prevent page fom scrolling
	//      return false;
	//  });



	 //IE, Opera, Safari













		//  var iScrollPos = 0;
		 //
		//  $(window).scroll(function () {
		//      var iCurScrollPos = $(this).scrollTop();
		 //
		//      if (iCurScrollPos > iScrollPos) {
		// 			$('.one').hide()
		// 			$('.two').show()
		// 			$('#one-slide').removeClass('li-active');
 	// 				$('#two-slide').addClass('li-active')
		//      } else {
		// 			$('.one').show()
 	// 				$('.two').hide()
		// 			$('#two-slide').removeClass('li-active');
		// 			$('#one-slide').addClass('li-active')
		//      }
		//      iScrollPos = iCurScrollPos;
		//  });



	//
	//  			 //backup
	//  $('#body').bind('mousewheel', function(e){
	// 	 if(e.originalEvent.wheelDelta < 0) {
	// 	 // Down
	// 			$('#title').removeClass('animated fadeOutUp')
	// 			$('#title').addClass('animated fadeOutUp')
	// 			$('#sub-title').addClass('animated fadeInUp')
	// 			 $('.one').hide( 500, function() {
	// 				 $('.two').show(100, function() {
	// 				 })
	// 			 })
	// 		 //
	// 		 $('#one-slide').removeClass('li-active');
	// 		 $('#two-slide').addClass('li-active')
	//
	//
	// 		 if ($('#one-slide').hasClass('li-active')){
	// 			 $('#one-slide').removeClass('li-active');
	// 			 $('#two-slide').addClass('li-active')
	// 		 }
	//
	//
	// 		 if ( $('.mobile-li:visible').css('display') == 'block' ){
	// 			 if ($('.li-active').attr('value') == 0){
	// 				 $('#one-slide').removeClass('li-active')
	// 					 $('#two-slide').addClass('li-active')
	// 			 }
	// 			 else if ($('.li-active').attr('value') == 1){
	// 				 // $('#two-slide').removeClass('li-active')
	// 				 $('#two-slide').addClass('li-active')
	//
	// 			 }
	// 			 else if ($('.li-active').attr('value') == 2){
	// 				 // $('#two-slide').removeClass('li-active')
	// 				 $('#three-slide').addClass('li-active')
	//
	// 			 }
	// 		 }
	//
	// 		}else{
	// 		 // UP
	// 					// desktop version
	// 					$('#title-sparks').removeClass('animated fadeInUp')
	// 					$('#title-sparks').addClass('animated fadeInUp')
	// 					$('#sub-title-sparks').addClass('animated fadeInUp')
	//
	// 				 $('#title').removeClass('animated fadeOutUp')
	// 				 $('#title').addClass('animated fadeInUp')
	// 				 $('#sub-title').addClass('animated fadeInUp')
	//
	// 				 $('.two').hide(500, function() {
	// 				 $('.one').show(100, function() {
	// 				 })
	// 			 })
	// 			 $('#two-slide').removeClass('li-active')
	// 			 $('#one-slide').addClass('li-active')
	// 			}
	//
	// 	 //  if ( $('.mobile-li:visible').css('display') == 'block' ){
	// 	 // 	 if ($('.li-active').attr('value') == 0){
	// 		//
	// 	 // 	 }
	// 	 // 	 if ($('.li-active').attr('value') == 1){
	// 		//
	// 	 // 	 }
	// 	 // 	 if ($('.li-active').attr('value') == 2){
	// 	 // 		 $('#two-slide').removeClass('li-active')
	// 	 // 		 $('#three-slide').addClass('li-active')
	// 		//
	// 	 // 	 }
	// 	 // 	 if ($('.li-active').attr('value') == 3){
	// 		//
	// 	 // 	 }
	// 	 // 	 if ($('.li-active').attr('value') == 4){
	// 		//
	// 	 // 	 }
	// 	 // 	 if ($('.li-active').attr('value') == 5){
	// 		//
	// 	 // 	 }
	// 	 //  }
	//
	//
	// 		//prevent page fom scrolling
	// 		return false;
	// });

		$(".nav-background").mouseover(function () {
						$(".dropdown-content").show();
						$('.nav-container-background').css({'background-color': '#223B90'});
						$('.ekocom-header .ekocom-header-nav a').css({'color': 'white'});
						$('.contact-buton').css({'color': 'black'});

						setTimeout(function(){
							$(".active-dot").show();
						}, 200);
						// $('.active-nav').css({'background-image': 'url(../image/active-dot.png)'});
						if ( $('.burger-icon:visible').css('display') == 'block' ){
						 //  $('.nav-container-background').css({'background-color': 'transparent', 'height': '0%'});
							$('.nav-container-background').css({'background-color': 'transparent'});
						 //  $('.mobile-nav-content').hide();
						 //  $(".ekocom-logo-container").css('opacity', '1');
						}
				 }).mouseout(function () {
						 $('.nav-container-background').css({'background-color': 'transparent'});

						 $('.ekocom-header .ekocom-header-nav a').css({'color': 'transparent'});
						 $('.active-nav').css({'background-image': 'none'});
						 setTimeout(function(){
						 $(".active-dot").hide();
						 }, 200);
						$('.nav-about').removeClass('active-nav').delay(3000);
						 $('.contact-buton').css({'color': 'black'});
						 if ( $('.burger-icon:visible').css('display') == 'block' ){
							//  $('.nav-container-background').css({'background-color': 'transparent', 'height': '0%'});
							 $('.nav-container-background').css({'background-color': 'transparent'});
							//  $('.mobile-nav-content').hide();
							//  $(".ekocom-logo-container").css('opacity', '1');
						 }
				 });

				 if ( $('.burger-icon:visible').css('display') == 'block' ){
					 $('.burger-icon').click(function (e) {
						 e.preventDefault();
						 $('.mobile-nav-content').show();
						 $('.nav-container-background-active').show();
						 $(".ekocom-logo-container").hide();
						 $('.mob-nav-close').show();
						 $('.nav-container-background').css({'opacity': '0'});
						 $(".ekocom-slide-pagination").hide();
					 });
					 $('.mob-nav-close').click(function () {

						$('.mobile-nav-content').hide();
						$('.nav-container-background-active').show();
						$(".ekocom-logo-container").show();
						$(".ekocom-slide-pagination").show();
						$('.mob-nav-close').fadeOut();

					 });

					 $('.mob-4').click(function (e) {
						 e.preventDefault();
						$('.mobile-button-content-4').toggle();
							if ( $('.mobile-button-content-1:visible, .mobile-button-content-2:visible, .mobile-button-content-3:visible, .mobile-button-content-3:visible, .mobile-button-content-4:visible').css('display') == 'block' ){
								 $('.contact-btn-mobile, .mobile-button-content-1:visible, .mobile-button-content-2:visible, .mobile-button-content-3:visible').hide();

							}else {
								$('.contact-btn-mobile').show();
							}
						 });

					 $('.mob-3').click(function (e) {
						 e.preventDefault();
						$('.mobile-button-content-3').toggle();
							if ( $('.mobile-button-content-1:visible, .mobile-button-content-2:visible, .mobile-button-content-3:visible, .mobile-button-content-3:visible, .mobile-button-content-4:visible').css('display') == 'block' ){
								 $('.contact-btn-mobile, .mobile-button-content-1:visible, .mobile-button-content-2:visible, .mobile-button-content-4:visible').hide();

							}else {
								$('.contact-btn-mobile').show();
							}
					 });
					 $('.mob-2').click(function (e) {
						 e.preventDefault();
						$('.mobile-button-content-2').toggle();
							if ( $('.mobile-button-content-1:visible, .mobile-button-content-2:visible, .mobile-button-content-3:visible, .mobile-button-content-3:visible, .mobile-button-content-4:visible').css('display') == 'block' ){
								 $('.contact-btn-mobile, .mobile-button-content-1:visible, .mobile-button-content-3:visible, .mobile-button-content-4:visible').hide();

							}else {
								$('.contact-btn-mobile').show();
							}
					 });

					 $('.mob-1').click(function (e) {
						 e.preventDefault();
						$('.mobile-button-content-1').toggle();
							if ( $('.mobile-button-content-1:visible, .mobile-button-content-2:visible, .mobile-button-content-3:visible, .mobile-button-content-3:visible, .mobile-button-content-4:visible').css('display') == 'block' ){
								 $('.contact-btn-mobile, .mobile-button-content-2:visible, .mobile-button-content-3:visible, .mobile-button-content-4:visible').hide();
							}else {
								$('.contact-btn-mobile').show();
							}
					 });


				 	}



});
