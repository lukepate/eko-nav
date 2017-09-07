$( document ).ready(function() {
	//DESKTOP DROPDOWN CONTENT
	$('ul').hover(function (e) {
		e.preventDefault();
		$('.dropdown-content').toggle()
	});

	// MOBILE BURGER CLICK HANDLE
	$('.ekocom-header-burger').click(function (e) {
		e.preventDefault();
		$('.mob-nav-container, .ekocom-header-burger').toggle()
	});

	// MOBILE X CLOSE CLICK HANDLE
	$('.mob-nav-close').click(function (e) {
		e.preventDefault();
		$('.mob-nav-container, .ekocom-header-burger').toggle()
	});

	//COLUMN ONE CLICK HANDLE
	$('.column-one').click(function (e) {
		e.preventDefault();
		$('.column-one-content').toggle()
			$('.column-two-content, .column-three-content, .column-four-content').hide()

		if( $('.column-one-content').css('display') == 'block' ){
			setTimeout(function() {
				$('.arrow-one').attr("src","image/arrow-up.png");
			}, 400);

		} else {
			setTimeout(function() {
				$('.arrow-one').attr("src","image/down-arrow.png");
			}, 400);
		};
	});

	//COLUMN TWO CLICK HANDLE
	$('.column-two').click(function (e) {
		e.preventDefault();
		$('.column-two-content').toggle()
			$('.column-one-content, .column-three-content, .column-four-content').hide()

		if( $('.column-two-content').css('display') == 'block' ){
			setTimeout(function() {
				$('.arrow-two').attr("src","image/arrow-up.png");
			}, 400);
		} else {
			setTimeout(function() {
				$('.arrow-two').attr("src","image/down-arrow.png");
			}, 400);
		};
	});

	//COLUMN THREE CLICK HANDLE
	$('.column-three').click(function (e) {
		e.preventDefault();
		$('.column-three-content').toggle()
			$('.column-one-content, .column-two-content, .column-four-content').hide()

		if( $('.column-three-content').css('display') == 'block' ){
			setTimeout(function() {
				$('.arrow-three').attr("src","image/arrow-up.png");
			}, 400);
		} else {
			setTimeout(function() {
				$('.arrow-three').attr("src","image/down-arrow.png");
			}, 400);
		};
	});

	//COLUMN FOUR CLICK HANDLE
	$('.column-four').click(function (e) {
		e.preventDefault();
		$('.column-four-content').toggle()
			$('.column-one-content, .column-two-content, .column-three-content').hide()

		if( $('.column-four-content').css('display') == 'block' ){
			setTimeout(function() {
				$('.arrow-four').attr("src","image/arrow-up.png");
			}, 400);
		} else {
			setTimeout(function() {
				$('.arrow-four').attr("src","image/down-arrow.png");
			}, 400);
		};
	});

	//MOBILE LINK HELPER (<a> tags for some reason don't like out in mobile, so I added this to help)
	$('.mob-link').on('click', function() {
    self.location = $(this).attr('href');
	});
})
