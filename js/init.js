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
        var lastTime = 0,
            scrollings = [];
        var elem = document.querySelector('.ekocom-slide');
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
                    if (isAccelerating) {
                        var direction = delta < 0 ? 'down' : 'up';
                        if (direction === 'down') {
                          if(navigation.getCurrentIndex() == 24) return;
                          // triggerClick('next');
                            navigation.goNext();

                        } else {
                          if(navigation.getCurrentIndex() == 0) return;
                          // triggerClick('prev');
                            navigation.goPrev();
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
