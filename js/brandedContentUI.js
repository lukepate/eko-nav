define(function(){
	let brandedDisplays;
	function init(){
		brandedDisplays = document.getElementsByClassName('ekocom-type-display');
		addBrandDisplayHoverEvents();
	}
	function addBrandDisplayHoverEvents(){
		let elI;
		console.log('---brandedDisplays---');
		for(elI = 0; elI < brandedDisplays.length; elI++){
			brandedDisplays[elI].addEventListener('mouseenter', function(){
				if (this.parentElement.id === 'ekocom-branded-content-ui') {
					this.style.width = '36.8vw';
					this.firstElementChild.style.marginLeft = '-18vw';
					this.getElementsByClassName('ekocom-branded-display-icon-list')[0].style.marginLeft = '17vw';
				}				
			});
			brandedDisplays[elI].addEventListener('mouseleave', function(){				
				if (this.parentElement.id === 'ekocom-branded-content-ui') {
					this.style.width = '19vw';
					this.firstElementChild.style.marginLeft = '0';
					this.getElementsByClassName('ekocom-branded-display-icon-list')[0].style.marginLeft = '37vw';
				}				
			});
		}
	}
	return{
		init:init
	};
});