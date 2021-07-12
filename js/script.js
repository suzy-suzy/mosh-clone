// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// header scroll
const header = document.querySelector(".header"),
    HEADER_BG = "js-header__bg";

function handleScroll() {
    // scrollY는 ie브라우저에서 지원을 하지 않기 때문에 pageYoffset으로 보완
    const currentScrollY = window.scrollY || window.pageYOffset;
    // console.log(currentScrollY);
    if (currentScrollY > 1) {
        header.classList.add(HEADER_BG);
    } else {
        header.classList.remove(HEADER_BG);
    }
}

function init() {
    window.addEventListener("scroll", handleScroll);
};
init();


// header dropdown
const dropdown = document.querySelectorAll(".header__column > li");
// console.log(dropdown.length);

for(let i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("mouseover", function(){
        currentSubmenu = this.querySelector(".submenu");
        // console.log(currentSubmenu);
        currentSubmenu.style.display = "block";
    });

    dropdown[i].addEventListener("mouseout", function(){
        currentSubmenu = this.querySelector(".submenu");
        currentSubmenu.style.display = "none";
    })
}

/*
// jquery-dropdown
$(document).ready(function(){
	// $('.submenu').hide();

	$('.dropdown').mouseover(function(){
        $(this).children(".submenu").stop().show();
	});
    $('.dropdown').mouseleave(function(){
        $(this).children(".submenu").stop().hide();
	});
});
*/




