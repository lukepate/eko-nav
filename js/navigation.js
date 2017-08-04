define(['js/paginationNav'], function(paginationNav) {
    let currentIndex;
    let isChanging = false;
    let ekocomSections;
    function init() {
      ekocomSections = document.getElementById('section_template').children;
      paginationNav.init(this);
      currentIndex = 0;
    }
    function getCurrentIndex() {
      return currentIndex;
    }

    function goNext() {
        if ( $('.desktop:visible').css('display') == 'block' ){
          var ekocomSections = 3;
        }
        if ( $('.mobile:visible').css('display') == 'block' ){
          var ekocomSections = 5;
        }
        if (isChanging || currentIndex == ekocomSections - 1 ) return;
        isChanging = true;
        currentIndex++;
        setTimeout(function() {
            isChanging = false;
        }, 550);

        jumpToSection(currentIndex, 'down');
      }


    function goPrev() {
        if (isChanging || currentIndex === 0) return;
        isChanging = true;
        currentIndex--;
        setTimeout(function() {
            isChanging = false;
        }, 550);

        jumpToSection(currentIndex, 'up');
    }
    function getTobeRemoved(classList) {
      let posibilities = ['ekocom-above', 'ekocom-active', 'ekocom-below']
      for (var i = 0; i < classList.length; i++) {
        if(posibilities.indexOf(classList[i]) > -1){
          return classList[i];
        }
      }
    }
    function jumpToSection(jumpToIndex, direction) {
        for (var i = 0; i < ekocomSections.length; i++) {
            let classList = ekocomSections[i].className.split(' ');
            let toBeRemoved = getTobeRemoved(classList);
            let ekocomSection = ekocomSections[i];
            let animeTime = 900;
            if(ekocomSections[i].classList.contains('prev-1')){
              ekocomSections[i].classList.remove('prev-1')
            } else if(ekocomSections[i].classList.contains('next-1')){
              ekocomSections[i].classList.remove('next-1')
            }
            if (i < jumpToIndex) {
                ekocomSections[i].classList.remove(toBeRemoved);
                ekocomSections[i].classList.add('ekocom-above');

                if (jumpToIndex - i == 1 ) {
                    ekocomSections[i].classList.add('prev-1');
                    if(direction=='down'){
                      ekocomSections[i].classList.add('ekocom-transition-out');
                      setTimeout(function() {
                          ekocomSection.classList.remove('ekocom-transition-out')
                      }, animeTime);
                    }

                }


            } else if (i == jumpToIndex) {
                ekocomSections[i].classList.remove(toBeRemoved);
                ekocomSections[i].classList.add('ekocom-active');
                ekocomSections[i].classList.add('ekocom-transition-in');
                setTimeout(function() {
                    ekocomSection.classList.remove('ekocom-transition-in')
                }, animeTime);

            } else if (i > jumpToIndex) {
                ekocomSections[i].classList.remove(toBeRemoved);
                ekocomSections[i].classList.add('ekocom-below');
                if (i - jumpToIndex == 1 ) {
                  ekocomSections[i].classList.add('next-1');
                  if(direction=='up'){

                      ekocomSections[i].classList.add('ekocom-transition-out');
                      setTimeout(function() {
                          ekocomSection.classList.remove('ekocom-transition-out')
                      }, animeTime);
                  }
                }
            }
            currentIndex = jumpToIndex;
        }
        paginationNav.updatePagination(currentIndex);
        // updateNavigationArrows();
    }

    function resetNavigation() { // Called when switching category
        currentIndex = 0;
        ekocomSections = document.getElementById('section_template').children;
        document.getElementById('cms-nav-next').style.visibility = 'visible';
    }

    function updateNavigationArrows() {
        if(currentIndex == 0){

          document.getElementById('cms-nav-arrow-prev').classList.add('zeroOpacity');
          document.getElementById('cms-nav-arrow-next').classList.remove('zeroOpacity');
        } else if(currentIndex == 24){
          document.getElementById('cms-nav-arrow-prev').classList.remove('zeroOpacity');
          document.getElementById('cms-nav-arrow-next').classList.add('zeroOpacity');
          document.getElementById('cms-block-bg-2').style.opacity = 0;
        } else{
          document.getElementById('cms-nav-arrow-prev').classList.remove('zeroOpacity');
          document.getElementById('cms-nav-arrow-next').classList.remove('zeroOpacity');
          // document.getElementById('cms-block-bg-2').style.opacity = 1;
        }
    }

    return {
        init: init,
        goNext: goNext,
        goPrev: goPrev,
        jumpToSection: jumpToSection,
        resetNavigation: resetNavigation,
        getCurrentIndex: getCurrentIndex
    };
});
