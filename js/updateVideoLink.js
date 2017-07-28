define(function () {
  function addVideoThumbClickListener() {
    let videoButtons = document.getElementsByClassName('ekocms-video-button');
    for (var i = 0; i < videoButtons.length; i++) {
      (function (idx) {

        videoButtons[idx].addEventListener('click', function () {
          let videoUrl = this.dataset.url;
          let videoTitle = this.dataset.title;
          let videoDesc = this.dataset.desc;
          document.querySelector('.ekocms-video-overlay-iframe').setAttribute('src', videoUrl)
          document.querySelector('.ekocms-video-overlay-title').innerText = videoTitle || '';
          document.querySelector('.ekocms-video-overlay-description').innerText = videoDesc || '';
          document.querySelector('.ekocms-video-overlay-wrapper').style.display = 'block';

        })
      }(i))
    }
  }
  function closeVideoOverlay() {
    document.querySelector('.ekocms-video-overlay-wrapper').style.display = 'none';
    document.querySelector('.ekocms-video-overlay-iframe').setAttribute('src', '')
  }
  function addCloseListener() {
    document.querySelector('.ekocms-video-overlay-close').addEventListener('click', function () {
      closeVideoOverlay()
    });
    document.querySelector('.ekocms-video-overlay-bg').addEventListener('click', function () {
      closeVideoOverlay()
    });
    document.querySelector('.ekocms-video-overlay-inner').addEventListener('click', function (e) {
      if(e.target.className != 'ekocms-video-overlay-header' && e.target.className != 'ekocms-video-overlay-description'){
        closeVideoOverlay();
      }
    });
  }
  return {
    init: function () {
      // addVideoThumbClickListener();
      // addCloseListener();
    },
    updateVideoListener: function () {
      addVideoThumbClickListener();
    }
  };
});
