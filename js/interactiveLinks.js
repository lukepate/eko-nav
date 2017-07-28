define(function() {
	var interactiveLinkObj = {
		check_out_our_shows:{
			elementPage:'partners',
			elementText:'CHECK OUT OUR SHOWS',
			elementLink:'https://helloeko.com/stories/',
			elementClassSelectors:'.partners .ekocom-eko-button',
			openModifier:'_blank'
		},
		example_sparks:{
			elementPage:'sparks',
			elementText:'EXAMPLE SPARKS',
			elementLink:'https://company.helloeko.com/brands/portfolio',
			elementClassSelectors:'.sparks .ekocom-eko-button',
			openModifier:'_blank'
		},
		play_btn:{
			elementPage:'sparks',
			elementText:'',
			elementLink:'https://vimeo.com/218043492/e0de5a1996',
			elementClassSelectors:'.ekocom-video-img-play-btn',
			openModifier:'_blank'
		},
		portfolio:{
			elementPage:'industry',
			elementText:'VIEW PORTFOLIO',
			elementLink:'https://company.helloeko.com/brands/portfolio',
			elementClassSelectors:'.industry .ekocom-eko-button.firstBtn',
			openModifier:'_blank'
		},
		tech_details:{
			elementPage:'industry',
			elementText:'TECH DETAILS',
			elementLink:'https://helloeko.com/s/Tech_Resources/Eko_Services_Technical_Overview.pdf',
			elementClassSelectors:'.industry .ekocom-eko-button.secondBtn',
			openModifier:'_blank'
		},
		automotive:{
			elementPage:'industry',
			elementText:'Automotive',
			elementLink:'https://company.helloeko.com/brands/portfolio#Automotive',
			elementClassSelectors:'.ekocom-type-display.automotive',
			openModifier:'_blank'
		},
		lifestyle:{
			elementPage:'industry',
			elementText:'Lifestyle',
			elementLink:'https://company.helloeko.com/brands/portfolio#Lifestyle',
			elementClassSelectors:'.ekocom-type-display.lifestyle',
			openModifier:'_blank'
		},
		beverage:{
			elementPage:'industry',
			elementText:'Portfolioo',
			elementLink:'https://company.helloeko.com/brands/portfolio#Beverage',
			elementClassSelectors:'.ekocom-type-display.beverage',
			openModifier:'_blank'
		},
		entertainment:{
			elementPage:'industry',
			elementText:'Entertainment',
			elementLink:'https://company.helloeko.com/brands/portfolio#Entertainment',
			elementClassSelectors:'.ekocom-type-display.entertainment',
			openModifier:'_blank'
		},
		science_tech:{
			elementPage:'industry',
			elementText:'Science & Tech',
			elementLink:'https://company.helloeko.com/brands/portfolio#Science & Tech',
			elementClassSelectors:'.ekocom-type-display.science_tech',
			openModifier:'_blank'
		},
		other:{
			elementPage:'industry',
			elementText:'Other',
			elementLink:'https://company.helloeko.com/brands/portfolio#Other',
			elementClassSelectors:'.ekocom-type-display.other',
			openModifier:'_blank'
		},
		lets_talk:{
			elementPage:'portfolio',
			elementText:'LETS TALK',
			elementLink:'https://company.helloeko.com/contact',
			elementClassSelectors:'.portfolio .ekocom-eko-button',
			openModifier:'_blank'
		}
	}
	return{
		linkObj: interactiveLinkObj
	};
});
