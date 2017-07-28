define(function () {
  function init() {
    addPaginationListener();
  }
  function addPaginationListener(){
    let galleryUL = document.querySelectorAll('.moments-pagination');
    for (var i = 0; i < galleryUL.length; i++) {
      let galleryLI = galleryUL[i].children;
      galleryUL[i].addEventListener('click', function (e) {
        if(e.target.value === undefined) return;
        let jumpToIndex = e.target.value;
        galleryLI[jumpToIndex].classList.add('active')
        jumpToSection(jumpToIndex);
        for (var j = 0; j < galleryLI.length; j++) {
          if(j != jumpToIndex){
            galleryLI[j].className = '';
          }
        }
      })
    }
  }

  function getTobeRemoved(classList) {
    let posibilities = ['ekocom-above', 'ekocom-active', 'ekocom-below']
    for (var i = 0; i < classList.length; i++) {
      if(posibilities.indexOf(classList[i]) > -1){
        return classList[i];
      }
    }
  }
  function jumpToSection(jumpToIndex) {
    let ekocomSections = document.querySelector('.moments-slide').children;
    for (var i = 0; i < ekocomSections.length; i++) {
      let classList = ekocomSections[i].className.split(' ');
      let toBeRemoved = getTobeRemoved(classList);// classList[2];
      if(i < jumpToIndex){
        ekocomSections[i].classList.remove(toBeRemoved);
        ekocomSections[i].classList.add('ekocom-above');

      }else if(i > jumpToIndex){
        ekocomSections[i].classList.remove(toBeRemoved);
        ekocomSections[i].classList.add('ekocom-below');
      }else {
          ekocomSections[i].classList.remove(toBeRemoved);
          ekocomSections[i].classList.add('ekocom-active');
      }
    }
  }
  return {
    init: init
  };
});
