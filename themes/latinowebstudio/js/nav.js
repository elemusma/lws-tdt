let menuHeight = document.querySelector('ul#menu-main-menu');
let navMenu = document.querySelector('#navItems');
let navMenuToggle = document.querySelector('#navToggle');
let navMenuOverlay = document.querySelector('#navMenuOverlay');
let navMenuClose = document.querySelector('#navMenuClose');
let header = document.querySelector('header');
let blankSpace = document.querySelector('.blank-space');

let logoMain = document.querySelector('#logoMain');
let logoSecondary = document.querySelector('#logo-secondary');

let searchIcon = document.querySelector('[data-modal-id="searchMenu"]');

// searchIcon.addEventListener('click', function () {
//     document.querySelector('#searchMenu #s').focus();
// });

window.addEventListener("scroll", parallaxEffect);

function parallaxEffect() {
    // header.classList.add('position-fixed');
    // header.classList.remove('position-relative');

    if (scrollY < 99) {
        blankSpace.style.height = "0px";
        // logoMain.style.width = "100%"
        header.classList.add('inactive');
        header.classList.add('position-relative');
		header.classList.remove('active');
		header.classList.remove('position-fixed');
		// header.classList.remove('scroll');
        // blankSpace.style.height = (((header.offsetHeight)) + "px");
    } else if (scrollY > 100) {
        blankSpace.style.height = (((header.offsetHeight)) + "px");
        // logoMain.style.width = "65%"
        header.classList.add('position-fixed');
        header.classList.add('active');
    	header.classList.remove('position-relative');
    	header.classList.remove('inactive');
        // header.classList.add('scroll');
        // blankSpace.style.height = (((header.offsetHeight)) + "px");
    }

    // setTimeout(function() {
    // }, 2000); 
}

// closes menu on menu item clicked, for anchor links
let menuItems = document.querySelectorAll('.menu-item');

for (i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', closeMenu);
}
// ###################################################

// navMenuClose.addEventListener('click', closeMenu);
// navMenuOverlay.addEventListener('click', closeMenu);
// navMenuToggle.addEventListener('click', openMenu);

function openMenu() {
    setTimeout(function () {
        navMenu.classList.add('activate');
    }, 500);
    navMenuToggle.classList.add('activate');
    navMenuOverlay.classList.add('activate');
}

function closeMenu() {
    navMenu.classList.remove('activate');
    navMenuToggle.classList.remove('activate');
    setTimeout(function () {
        navMenuOverlay.classList.remove('activate');
    }, 500);
}

// $('#navToggle').click(function(event) {
// $('#navToggle').toggleClass('activate');
// $('#navItems').toggleClass('activate');
// if(navMenu.classList.contains('activate')){
// // navMenu.style.height = menuHeight.offsetHeight+"px";
// // navMenu.style.height = "100vh";
// } else {
// // navMenu.style.height = "0px";
// }
// });

// for dropdown menus on desktop
function variables() {
    menuItemHasChildren = document.querySelectorAll('.menu-item-has-children');
    menuItemHasChildrenMobile = document.querySelectorAll('#navItems .menu-item-has-children');
    desktopWidth = window.matchMedia('(min-width: 1200px)');
}
variables();

// Accessibility: Keyboard navigation (Tab + Enter/Space)

	const menuParents = document.querySelectorAll('.menu-item-has-children');

	menuParents.forEach(parent => {
		const link = parent.querySelector('a');
		const submenu = parent.querySelector('.sub-menu');

		if (!link || !submenu) return;

		// ARIA attributes for accessibility
		link.setAttribute('role', 'button');
		link.setAttribute('tabindex', '0');
		link.setAttribute('aria-haspopup', 'true');
		link.setAttribute('aria-expanded', 'false');

		// Keyboard: toggle submenu on Enter or Space
		link.addEventListener('keydown', function (e) {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();

				const isOpen = submenu.classList.contains('active-sub-menu');

				if (isOpen) {
					submenu.classList.remove('active-sub-menu');
					submenu.style.height = '0px';
					link.setAttribute('aria-expanded', 'false');
				} else {
					submenu.classList.add('active-sub-menu');

					let totalHeight = 0;
					for (let child of submenu.children) {
						totalHeight += child.offsetHeight;
					}
					submenu.style.height = totalHeight + 'px';
					link.setAttribute('aria-expanded', 'true');
				}
			}
		});

		// Optional: collapse on focusout
		parent.addEventListener('focusout', function (e) {
			if (!parent.contains(e.relatedTarget)) {
				submenu.classList.remove('active-sub-menu');
				submenu.style.height = '0px';
				link.setAttribute('aria-expanded', 'false');
			}
		});
	});


// if(desktopWidth.matches){

function mouseOver() {
    for (i = 0; i < menuItemHasChildren.length; i++) {
        arrow = document.createElement("div");
        if (window.matchMedia('(max-width: 1199px)').matches) {

        } else {
            arrow.className = "dropdown-arrow position-absolute bg-black inactive";
            menuItemHasChildren[i].append(arrow);
            menuItemHasChildren[i].addEventListener('mouseover', activeDropdown);
            menuItemHasChildren[i].addEventListener('mouseout', inActiveDropdown);
        }
    }
};
mouseOver();

function clickMobile() {
    for (i = 0; i < menuItemHasChildrenMobile.length; i++) {
        arrowMobile = document.createElement("div");
        arrowMobile.className = "dropdown-arrow position-absolute bg-light inactive arrow-mobile mobile-hidden";
        menuItemHasChildrenMobile[i].append(arrowMobile);
        console.log(arrowMobile);
        console.log(this.menuItemHasChildrenMobile[i]);
        console.log(this.menuItemHasChildrenMobile[i].querySelector('a'));
        specificLink = this.menuItemHasChildrenMobile[i].querySelector('a');
        this.menuItemHasChildrenMobile[i].addEventListener('click', activeDropdownClicked);
    }
    function inActiveDropdownClicked() {
        subMenuMobile = this.parentNode.childNodes[2];
        subMenuMobile.style.height = '0px!important';
    }
    function activeDropdownClicked() {
        subMenuMobile = this.querySelector('.sub-menu');
        if (!subMenuMobile.classList.contains('active-sub-menu')) {
            subMenuMobile.classList.add('active-sub-menu');
            subMenuMobile.style.height = (subMenuMobile.children[0].offsetHeight * subMenuMobile.children.length) + (50) + 'px';
        } else if (subMenuMobile.classList.contains('active-sub-menu')) {
            subMenuMobile.classList.remove('active-sub-menu');
            subMenuMobile.style.height = '0px';
        }
    }

};
clickMobile();

function activeDropdown() {
	subMenu = this.querySelector('.sub-menu');
	if (!subMenu.classList.contains('active-sub-menu')) {
		subMenu.classList.add('active-sub-menu');

		let totalHeight = 0;
		for (let child of subMenu.children) {
			totalHeight += child.offsetHeight;
		}

		subMenu.style.height = totalHeight + 'px';
	}

}
function inActiveDropdown() {
    subMenu = this.querySelector('.sub-menu');
    if (subMenu.classList.contains('active-sub-menu')) {
        subMenu.classList.remove('active-sub-menu');
        subMenu.style.height = '0px';
    }
}

