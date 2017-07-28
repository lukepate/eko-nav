
//
// define(['text!../htmlTemplate/template0.html', 'text!../htmlTemplate/pagination0.html',
// 'text!../htmlTemplate/template1.html', 'text!../htmlTemplate/pagination1.html',
// 'text!../htmlTemplate/template2.html', 'text!../htmlTemplate/pagination2.html',
// 'js/navigation', 'js/updateVideoLink', 'js/galleryNavigation'
// ],

$( document ).ready(function (template0, pagination0, template1, pagination1, template2, pagination2, navigation, updateVideoLink, galleryNavigation) {
  const templates = [template0, template1, template2];
  const paginations = [pagination0, pagination1, pagination2];
  function loadHTMLTemplate(index) {
    document.getElementById('section_template').innerHTML = templates[index];
    // document.getElementById('pagination_template').innerHTML = paginations[index];
  }
  alert('this works')
  let currentCategory = 0;
  return {
    init: function () {
      var cmsHeaders = document.getElementsByClassName('cms-header-item');
      for (var i = 0; i < cmsHeaders.length; i++) {
        (function (i) {
          cmsHeaders[i].addEventListener('click', function () {
            if(this.classList.contains('select')) return;
            else {
              this.classList.add('select');
              this.parentElement.className = 'section-' + i;
              loadHTMLTemplate(i);
              navigation.resetNavigation();
              updateVideoLink.updateVideoListener();
              if(i == 0 || i == 1){
                galleryNavigation.init();
              }
              for (var j = 0; j < cmsHeaders.length; j++) {
                if(j != i){
                  cmsHeaders[j].classList.remove('select');
                }
              }
            }
          })
        }(i))
      }
    }
  };
});
