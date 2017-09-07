
$( document ).ready(function() {

	$('#one-slide').click(function (e) {
		e.preventDefault();
		$('.one').show()
		$('.two').hide()
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
				$('.nav-container-background').css({'border-color': '#223B90'});
				$('.nav-container-background').css({'box-shadow': '0px 10px 35px 0px rgba(0, 0, 0, 0.13)'});
				$('.nav-container-background').css({'backgroud-image': 'linear-gradient(180deg, #2D50FF 0%, #223B90 100%)'});
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
				 $('.nav-container-background').css({'box-shadow': 'none'});
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
				 $('.contactBtn-view').hide();
				 $('.mobile-nav-content').show();
				 $('.nav-container-background-active').show();
				 $(".ekocom-logo-container").hide();
				$('.nav-container-background').css({'box-shadow': '0px 10px 35px 0px rgba(0, 0, 0, 0)'});
				 $('.nav-container-background').css({'opacity': '0'});
				 $(".ekocom-slide-pagination").hide();

			 });
			 $('.mob-nav-close').click(function () {
				$('.contactBtn-view').show();
				$('.mobile-nav-content').hide();
				$('.nav-container-background-active').show();
				$(".ekocom-logo-container").show();
				$(".ekocom-slide-pagination").show();
				$('.mob-nav-close').hide();
			 });

			 $('.mob-4').click(function (e) {
				 e.preventDefault();
				$('.mobile-button-content-4').toggle();
				$('.arrow-img-2, .arrow-img-3, .arrow-img-1').attr("src","image/down-arrow.png");
					if ( $('.mobile-button-content-1:visible, .mobile-button-content-2:visible, .mobile-button-content-3:visible, .mobile-button-content-3:visible, .mobile-button-content-4:visible').css('display') == 'block' ){
						$('.contact-btn-mobile, .mobile-button-content-1:visible, .mobile-button-content-2:visible, .mobile-button-content-3:visible').hide();
						setTimeout(function() {
							$('.arrow-img-4').attr("src","image/arrow-up.png")
						}, 400);
					} else {
						$('.contact-btn-mobile').show();
						setTimeout(function() {
							$('.arrow-img-4').attr("src","image/down-arrow.png");
						}, 400);
					}
				 });

			 $('.mob-3').click(function (e) {
				 e.preventDefault();
				$('.mobile-button-content-3').toggle();
				$('.arrow-img-2, .arrow-img-1, .arrow-img-4 ').attr("src","image/down-arrow.png");
					if ( $('.mobile-button-content-1:visible, .mobile-button-content-2:visible, .mobile-button-content-3:visible, .mobile-button-content-3:visible, .mobile-button-content-4:visible').css('display') == 'block' ){
						$('.contact-btn-mobile, .mobile-button-content-1:visible, .mobile-button-content-2:visible, .mobile-button-content-4:visible').hide();
						setTimeout(function() {
							$('.arrow-img-3').attr("src","image/arrow-up.png");
						}, 400);
					}else {
						$('.contact-btn-mobile').show();
						setTimeout(function() {
							$('.arrow-img-3').attr("src","image/down-arrow.png");
						}, 400);
					}
			 });
			 $('.mob-2').click(function (e) {
				 e.preventDefault();
				$('.mobile-button-content-2').toggle();
				$('.arrow-img-1, .arrow-img-3, .arrow-img-4 ').attr("src","image/down-arrow.png");
					if ( $('.mobile-button-content-1:visible, .mobile-button-content-2:visible, .mobile-button-content-3:visible, .mobile-button-content-3:visible, .mobile-button-content-4:visible').css('display') == 'block' ){
						$('.contact-btn-mobile, .mobile-button-content-1:visible, .mobile-button-content-3:visible, .mobile-button-content-4:visible').hide();
						setTimeout(function() {
							$('.arrow-img-2').attr("src","image/arrow-up.png");
						}, 400);
					}else {
						$('.contact-btn-mobile').show();
						setTimeout(function() {
							$('.arrow-img-2').attr("src","image/down-arrow.png");
						}, 400);
					}
			 });

			 $('.mob-1').click(function (e) {
				 e.preventDefault();
				$('.mobile-button-content-1').toggle();
				$('.arrow-img-2, .arrow-img-3, .arrow-img-4 ').attr("src","image/down-arrow.png");
					if ( $('.mobile-button-content-1:visible, .mobile-button-content-2:visible, .mobile-button-content-3:visible, .mobile-button-content-3:visible, .mobile-button-content-4:visible').css('display') == 'block' ){
						$('.contact-btn-mobile, .mobile-button-content-2:visible, .mobile-button-content-3:visible, .mobile-button-content-4:visible').hide();
						setTimeout(function() {
							$('.arrow-img-1').attr("src","image/arrow-up.png");
						}, 400);
					}else {
						$('.contact-btn-mobile').show();
						setTimeout(function() {
							$('.arrow-img-1').attr("src","image/down-arrow.png");
						}, 400);
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
