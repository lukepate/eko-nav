define(['js/navigation', 'js/updateVideoLink',
'js/galleryNavigation','js/paginationNav', 'js/pillarHover', 'js/brandedContentUI', 'js/interactiveLinks'],
function(navigation, updateVideoLink, galleryNavigation, paginationNav, pillarHover, brandedContentUI, interactiveLinks) {

    var MAX_TOUCH_TIME = 800;
    var SLIDE_THRESHOLD = 50;

    function getAvarage(array) {
        if (!array.length) return 0;
        var sum = Array.prototype.reduce.call(array, function(last, item) {
            return last + item;
        });
        return sum / array.length;
    }

    function addCMSNextNavListener() {
        document.getElementById('cms-nav-arrow-prev').addEventListener('click', function() {
            navigation.goPrev();
        })
        document.getElementById('cms-nav-arrow-next').addEventListener('click', function() {
            navigation.goNext();
        })

    }

    function addMouseScrollListener() {
        var isStopPropFn = arguments.length <= 2 || arguments[2] === undefined ? function() {
            return false;
        } : arguments[2];
        // var lastTime = 0;
        var x = 0;
        var y = 0;
        var lastTime = 0,
            scrollings = [];
        var elem = document.querySelector('.ekocom-slide');
        var vid = document.getElementById("myVideo");
         ['DOMMouseScroll', 'mousewheel'].map(function(mouseWheel) {

            elem.addEventListener(mouseWheel, function(event) {
                event.preventDefault();

                if (isStopPropFn()) event.stopPropagation();
                var delta = event.detail ? -event.detail : event.wheelDelta;


                if (delta) {
                    if (Date.now() - lastTime > 200) {
                        scrollings = [];
                    }
                    lastTime = Date.now();
                    scrollings.push(Math.abs(delta));
                    if (scrollings.length > 150) {
                        scrollings.shift();
                    }
                    var avgEnd = ~~getAvarage(scrollings.slice(-10));
                    var avgMiddle = ~~getAvarage(scrollings.slice(-70));
                    var isAccelerating = avgEnd >= avgMiddle;
                    var vidR = document.getElementById("video-right");
                    var vidL = document.getElementById("video-left");

                    var mobT = document.getElementById("mobT");
                    var mobB = document.getElementById("mobB");
                    var iVid = document.getElementById("iVid");

                    if (isAccelerating) {
                        var direction = delta < 0 ? 'down' : 'up';
                        if (direction === 'down') {
                          if(navigation.getCurrentIndex() == 24) return;
                          // triggerClick('next');
                          // document.getElementById("video-right").style.visibility = "hidden";

                            navigation.goNext();
                            let a = navigation.getCurrentIndex();

                            if(!vidR.paused){                               // vidR.pause();
                              x = 1;
                              vidR.pause();
                            }
                            if(!vidL.paused){                               // vidR.pause();
                              y = 1;
                              vidL.pause();
                            }
                            if(!mobB.paused){                               // vidR.pause();
                              q = 1;
                              mobB.pause();
                            }
                            if(!mobT.paused){                               // vidR.pause();
                              g = 1;
                              mobT.pause();
                            }


                              // vidR.pause()
                              // vidL.pause()
                              // vidR.removeClass('video-double-open');
                              // vidR.classList.remove("video-double-open");
                              // vidR.classList.remove("video-double-closed");
                              // document.getElementById("video-right").remove("video-double-open");
                              // document.getElementById("video-right").remove("video-double-closed");
                              //
                              // document.getElementById("video-double-right ").style.visibility = "visible";

                              // $('.video-double-left p, .video-double-right p').show();
                              // $('.playVidBtn', vidDiv).show();
                              //



                        } else {
                          if(navigation.getCurrentIndex() == 0) return;
                          // triggerClick('prev');


                            navigation.goPrev();
                            let a = navigation.getCurrentIndex();

                            // right video pause when scroll
                            if(vidR.paused && x > 0 && a == 0){
                            x = 0;
                            setTimeout(function () {
                              vidR.play();
                            }, 1000);

                            // left video pause when scroll
                            };
                            if(vidL.paused && y > 0 && a == 0){
                              y = 0;
                              setTimeout(function () {
                                vidL.play();
                              }, 1000);
                            };
                            if(mobT.paused && g > 0 && a == 1){
                              g = 0;
                              setTimeout(function () {
                                mobT.play();
                              }, 800);
                            };
                            if(mobB.paused && q > 0 && a == 1){
                              q = 0;
                              setTimeout(function () {
                                mobB.play();
                              }, 800);
                            };


                            // if(mobB.paused && l > 0 && a == 1){
                            //   l = 0;
                            //   setTimeout(function () {
                            //     mobB.play();
                            //   }, 800);
                            // };

                        }
                    }
                }
            }, false);
        });
    }
    function addKeyboardListener() {
      document.addEventListener('keydown', function(e) {
        /*if(document.querySelector('.ekocms-video-overlay-wrapper').style.display === 'block'){
          return;
        }*/
        if(e.keyCode === 40 || e.keyCode === 32){ //ArrowDown
          if(navigation.getCurrentIndex() == 24) return;
          // triggerClick('next');
          navigation.goNext();
        }
        else if(e.keyCode === 38){ //ArrowUp
          if(navigation.getCurrentIndex() == 0) return;
          // triggerClick('prev');
          navigation.goPrev();
        }
      });
    }
    function triggerClick(direction) {
      var elem = document.getElementById('cms-nav-arrow-' + direction);
      elem.classList.add('active')
      setTimeout(function () {
        elem.classList.remove('active');
      }, 200);

    }
    function handleSwipe(direction) {
      var vid = document.querySelector('.video-frame');

        if (direction === "up") {
            navigation.goNext();
        }
        if (direction === "down") {
            navigation.goPrev();
        }
    }
    function addSwipeListener(elem, callback) {
        var isStopPropFn = arguments.length <= 2 || arguments[2] === undefined ? function() {
            return false;
        } : arguments[2];

        if (!elem || !callback) return;
        var startX = undefined,
            startY = undefined,
            startTime = undefined,
            endX = undefined,
            endY = undefined;
        elem.addEventListener('touchstart', function(event) {
            if (isStopPropFn()) event.stopPropagation();
            var touch = event.changedTouches[0];
            startX = touch.clientX;
            startY = touch.clientY;
            endX = touch.clientX;
            endY = touch.clientY;
            startTime = Date.now();
        }, false);
        elem.addEventListener('touchmove', function(event) {
            if (isStopPropFn()) event.stopPropagation();
            event.preventDefault();
            if (!(event.scale && event.scale !== 1) && event.changedTouches.length === 1) {
                var touch = event.changedTouches[0];
                endX = touch.clientX;
                endY = touch.clientY;
            }
        }, false);
        elem.addEventListener('touchend', function(event) {
            if (isStopPropFn()) event.stopPropagation();
            if (Date.now() - startTime < MAX_TOUCH_TIME) {
                var diffX = endX - startX,
                    diffY = endY - startY;
                var absDiffX = Math.abs(diffX),
                    absDiffY = Math.abs(diffY);
                var direction = undefined;
                if (Math.max(absDiffX, absDiffY) > SLIDE_THRESHOLD) {
                    if (absDiffX > absDiffY) {
                        direction = diffX > 0 ? 'right' : 'left';
                    } else {
                        direction = diffY > 0 ? 'down' : 'up';
                    }
                    handleSwipe(direction);
                }
            }
        }, false);
    }
    function addLinkOutsToButtons(){
        console.log(interactiveLinks.linkObj);
        for(element in interactiveLinks.linkObj){
            (function(obj){
                $(obj.elementClassSelectors).click(function(){
                    window.open(obj.elementLink, obj.openModifier);
                });
            })(interactiveLinks.linkObj[element])
        }
    }
    function checkEnvironment(argument) {
        // body...
    }
    return {
        init: function() {
            console.log('initFunctions')
            // addCMSNextNavListener();
            addMouseScrollListener();
            addKeyboardListener();
            navigation.init();
            updateVideoLink.init();
            galleryNavigation.init();
            brandedContentUI.init();
            addLinkOutsToButtons();
            addSwipeListener(document.getElementsByClassName('ekocom-slide')[0], handleSwipe);
            // pillarHover.init();
        }
    };
});
