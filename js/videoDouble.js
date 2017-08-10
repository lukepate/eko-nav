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
		$(".nav-background").mouseover(function () {
				$(".dropdown-content").show();
				$('.nav-container-background').css({'background-color': '#223B90'});
				$('.ekocom-header .ekocom-header-nav a').css({'color': 'white'});
				$('.contact-buton').css({'color': 'black'});

				setTimeout(function(){
					$(".active-dot").show();
				}, 200);
				if ( $('.burger-icon:visible').css('display') == 'block' ){
					$('.nav-container-background').css({'background-color': 'transparent'});
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
					 $('.nav-container-background').css({'background-color': 'transparent'});
				 }
		 });

		 if ( $('.burger-icon:visible').css('display') == 'block' ){
			 $('.burger-icon').click(function (e) {
				 e.preventDefault();
				 $('.mob-nav-close').show();
				 $('.mobile-nav-content').show();
				 $('.nav-container-background-active').show();
				 $(".ekocom-logo-container").hide();
				 $('.nav-container-background').css({'opacity': '0'});
				 $(".ekocom-slide-pagination").hide();
			 });
			 $('.mob-nav-close').click(function () {
				$('.mobile-nav-content').hide();
				$('.nav-container-background-active').show();
				$(".ekocom-logo-container").show();
				$(".ekocom-slide-pagination").show();
				$('.mob-nav-close').hide();
			 });

			 $('.mob-4').click(function (e) {
				 e.preventDefault();
				$('.mobile-button-content-4').toggle();
					if ( $('.mobile-button-content-1:visible, .mobile-button-content-2:visible, .mobile-button-content-3:visible, .mobile-button-content-3:visible, .mobile-button-content-4:visible').css('display') == 'block' ){
						 $('.contact-btn-mobile, .mobile-button-content-1:visible, .mobile-button-content-2:visible, .mobile-button-content-3:visible').hide();
					} else {
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
			 $('.about').click(function (e) {
				 e.preventDefault();
					window.location.href = ("https://company.helloeko.com/");
			 });
			 $('.history').click(function (e) {
				 e.preventDefault();
					window.location.href =("https://company.helloeko.com/choice-moments");
			 });
			 $('.team-link').click(function (e) {
				 e.preventDefault();
					window.location.href = ("https://company.helloeko.com/our-team");
			 });
			 $('.blog').click(function (e) {
				 e.preventDefault();
					window.location.href = ("https://blog.helloeko.com/");
			 });
			 $('.press').click(function (e) {
				 e.preventDefault();
					window.location.href = ("https://company.helloeko.com/media/press-releases");
			 });
			 $('.jobs').click(function (e) {
				 e.preventDefault();
					window.location.href = ("https://company.helloeko.com/careers");
			 });

			 //stories links
			 $('.broken').click(function (e) {
				 e.preventDefault();
					window.location.href = ("https://helloeko.com/stories");
			 });
			 $('.possibilia').click(function (e) {
				 e.preventDefault();
					window.location.href = ("https://helloeko.com/stories#pro_hloizr");
			 });
			 $('.oneOnone').click(function (e) {
				 e.preventDefault();
					window.location.href = ("https://helloeko.com/stories#pro_9olx9y");
			 });
			 $('.more').click(function (e) {
				 e.preventDefault();
					window.location.href = ("https://helloeko.com/stories");
			 });
			 //brands links
			 $('.orginal').click(function (e) {
				 e.preventDefault();
					window.location.href = ("https://company.helloeko.com/brands#orginalcontent");
			 });

			 $('.sparks').click(function (e) {
				 e.preventDefault();
					window.location.href = ("https://company.helloeko.com/brands#sparks");
			 });

			 $('.continued').click(function (e) {
				 e.preventDefault();
					window.location.href = ("https://company.helloeko.com/brands#sparkscontinued");
			 });

			 $('.content').click(function (e) {
				 e.preventDefault();
					window.location.href = ("https://company.helloeko.com/brands#content");
			 });

			 $('.partners').click(function (e) {
				 e.preventDefault();
					window.location.href = ("https://company.helloeko.com/brands#partners");
			 });

			 //mobile nav links
			 $('.developers').click(function (e) {
				 e.preventDefault();
					window.location.href = ("https://developer.helloeko.com/");
			 });

			 $('.creative').click(function (e) {
				 e.preventDefault();
					window.location.href = ("https://studio.helloeko.com/guides");
			 });

			 $('.studio').click(function (e) {
				 e.preventDefault();
					window.location.href = ("https://studio.helloeko.com/");
			 });
		 	}
});
