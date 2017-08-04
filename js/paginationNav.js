define(function() {
    var sideMenuItems,
        categoryTitleItems,
        currentCategory = 'brands',
        isHoverOnMenu = false,
        sideMenu = document.getElementsByClassName('ekocom-slide-pagination')[0];
    function removeSubMenuActiveClass() {
        for (var i = 0; i < sideMenuItems.length; i++) {
            var item = sideMenuItems[i];
            if (item.classList.contains('active')) {
                item.classList.remove('active');
            }
        }
    }
    function removeAndAddCategoryTitleActiveClass(targetId, toClick, targetIndex) {
        for (var i = 0; i < categoryTitleItems.length; i++) {
            var item = categoryTitleItems[i];
            if (item.dataset.target.split('#')[1] === targetId) {
                if (currentCategory != targetId) {
                    currentCategory = targetId;
                    // document.getElementById('cms-side-title-bar').innerText = item.innerText.substr(2);
                    item.classList.add('active');
                    document.body.style.backgroundPosition = '0px '+targetIndex*(100/(categoryTitleItems.length-1))+'%';
                    // document.body.className = currentCategory;
                    sideMenu.className = 'ekocom-slide-pagination ekocom-rootslide ekocom-section-'+targetIndex;
                    if (item.classList.contains('collapsed')) {
                        $(item.dataset.target).collapse("show")
                        
                    }
                }
            } else {
                if (item.classList.contains('active')) {
                    item.classList.remove('active');
                }
                if(!item.classList.contains('active') && !isHoverOnMenu){
                  $(item.dataset.target).collapse("hide");

                }

            }
        }
    }
    function addMouseLeaveEventOnMenu() {
        var menu = document.querySelector('.nav-side-menu');
        menu.addEventListener('mouseenter', function(e) {
          isHoverOnMenu = true;
        });
        menu.addEventListener('mouseleave', function(e) {
            e.stopPropagation();
            e.preventDefault();
            e.cancelBubble = true;
            console.log('mouseleave');
            isHoverOnMenu = false;
            setTimeout(function() {
                for (var i = 0; i < categoryTitleItems.length; i++) {
                    (function(i) {
                        var category = categoryTitleItems[i];

                        if (category.classList.contains('active')) {
                            $(category.dataset.target).collapse("show")
                        } else {
                            $(category.dataset.target).collapse("hide")
                        }
                    }(i))
                }
            }, 300);

        })
    }
    function updatePagination(index) {
        let target = sideMenuItems[index];
        var target_id = target.dataset.tip.toLowerCase().replace(' ','_')
        removeSubMenuActiveClass();
        target.classList.add('active');
        removeAndAddCategoryTitleActiveClass(target_id, true, index)
    }

    function addPaginationListener(navigation) {
        sideMenu.addEventListener('click', function(e) {
            if (e.target.value === undefined || e.target.dataset.target)
                return;
            navigation.jumpToSection(e.target.value);
        })
    }
    function init(navigation) {
        addPaginationListener(navigation);
        sideMenuItems = document.getElementsByClassName('ekocom-slide-pagination')[0].getElementsByTagName('li');
        categoryTitleItems = document.getElementsByClassName('site-section');
        // addMouseLeaveEventOnMenu();
    }

    return {init: init, updatePagination: updatePagination, currentCategory: currentCategory};
});
