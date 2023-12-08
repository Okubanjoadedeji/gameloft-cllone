


const sideMenu = document.getElementById("side-menu");
const toggleSideMenu = document.getElementById("menu__bar");
const closeSideMenu = document.querySelector(".side-header__burger");
const overlayOn = document.querySelector(".side-menu__overlay");
const togglecomDropDown = document.querySelectorAll(".com-gallery__dropdown");
const comDropDown = document.querySelectorAll(".com-dropdown-multi__dropdown");
const arrowDropDown = document.querySelectorAll(".com-dropdown-multi__arrow");
const stickyMenu = document.querySelector(".sticky-icons__group");
const toggleStickyMenu = document.querySelector(".sticky-icons__center");
const readMore = document.querySelectorAll(".com-game-card__read-more");
const footerElement = document.querySelector(".com-footer");
const topButton = document.querySelector(".Button_button-top");
const toggleStudio = document.querySelector("side-link__item");
const studioDropdown = document.querySelector("side-link__item-group");


toggleSideMenu.addEventListener('click', ()=>{
  sideMenu.style.display = "flex";
  overlayOn.classList.toggle("overlay-on");
});

closeSideMenu.addEventListener("click", () => {
  sideMenu.style.display = "";
  overlayOn.classList.remove("overlay-on");
});

function hideAllDropdownsExcept(clickedIndex) {
  for (let i = 0; i < comDropDown.length; i++) {
    if (i !== clickedIndex) {
      comDropDown[i].classList.remove("show");
      arrowDropDown[i].classList.remove("arrow-flip");
    }
  }
}

for (let i = 0; i < togglecomDropDown.length; i++) {
  togglecomDropDown[i].addEventListener("click", () => {
    const isDropdownOpen = comDropDown[i].classList.contains("show");

    if (isDropdownOpen) {
      comDropDown[i].classList.remove("show");
      arrowDropDown[i].classList.remove("arrow-flip");
    } else {
      hideAllDropdownsExcept(i); 

      comDropDown[i].classList.add("show");
      arrowDropDown[i].classList.add("arrow-flip");
    }
  });
}

toggleStickyMenu.addEventListener('click', ()=>{
  stickyMenu.classList.toggle("sticky-show");
});

function showButtonOnScroll() {
  const scrollTop = window.scrollY;
  const footerTop = footerElement.offsetTop;
  const windowHeight = window.innerHeight;
  const threshold = 300;

  if (scrollTop >= footerTop - windowHeight + threshold) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

window.addEventListener("scroll", showButtonOnScroll);

topButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth", duration: 600 });
});

showButtonOnScroll();










let splide = new Splide(".splide", {

  

  type: "loop",
  arrows: false,
  dots: false,
  autoplay: true,
  interval: 3000,
});


splide.mount();

AOS.init();