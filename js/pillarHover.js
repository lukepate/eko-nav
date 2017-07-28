define(function () {
  var pillars;
  function initTutorialPillars2(){
    var tutorialPillars = document.getElementsByClassName('vertical-pillars-container expand-on-hover')[0].getElementsByClassName('vertical-pillars-container-item');
    tutorialPillars[0].classList.add('story_hover');
    for (var i = 0; i < tutorialPillars.length; i++) {
      (function (i) {

        var pillar = tutorialPillars[i];
        pillar.addEventListener('mouseover', function (e) {
          for (var j = 0; j < tutorialPillars.length; j++) {
            if(tutorialPillars[j].classList.contains('story_hover')){
              tutorialPillars[j].classList.remove('story_hover');
            }
            pillar.classList.add('story_hover')
          }
        })
      }(i))
    }
  }
  function init() {
    pillars = document.getElementsByClassName('vertical-pillars-container-item pillar-hover');
    for (var i = 0; i < pillars.length; i++) {
      (function (i) {

        var pillar = pillars[i];
        pillar.addEventListener('mouseover', function (e) {
          var slideTarget = document.getElementById('vertical-pillars-' + (i+1));
          for (var j = 0; j < pillars.length; j++) {
            if(j != i){
              pillars[j].style.width = "12.3%";
            }
          }
          slideTarget.classList.add('hover');
        })
        pillar.addEventListener('mouseleave', function (e) {
          var slideTarget = document.getElementById('vertical-pillars-' + (i+1));
          slideTarget.classList.remove('hover');
          for (var j = 0; j < pillars.length; j++) {
              pillars[j].style.width = "13.5%";
          }
        })
      }(i))
    }
    initTutorialPillars2();
  }
  return {
    init: init
  };
});
