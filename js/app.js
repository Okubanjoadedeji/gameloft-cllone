


const sideMenu = document.getElementById("side-menu");
const toggleSideMenu = document.getElementById("menu__bar");
const closeSideMenu = document.querySelector(".side-header__burger");
const overlayOn = document.querySelector(".side-menu__overlay");
const toggleDropDown = document.querySelectorAll(".com-gallery__dropdown");
const comDropDown = document.querySelectorAll(".com-dropdown-multi__dropdown");
const arrowDropDown = document.querySelectorAll(".com-dropdown-multi__arrow");
const stickyMenu = document.querySelector(".sticky-icons__group");
const toggleStickyMenu = document.querySelector(".sticky-icons__center");
const readMore = document.querySelectorAll(".com-game-card__read-more");
const footerElement = document.querySelector(".com-footer");
const topButton = document.querySelector(".Button_button-top");
const studioBtn = document.getElementById("studio-drop");
const studioDropdown = document.querySelector(".side-link__item-group");
const studioArrow = document.querySelector(".side-link__item-arrow");
const specialBtn = document.getElementById("special-btn");
const specialCont = document.getElementById("special-cont");

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

for (let i = 0; i < toggleDropDown.length; i++) {
  toggleDropDown[i].addEventListener("click", () => {
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

topButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: "smooth", duration: 600 });
});


function hideAllDropdowns (clickedIndex) {
  if (clickedIndex == 0) {
    comDropDown.classList.remove("height-auto");
    arrowDropDown.classList.remove("arrow-flip");
  }
  
}


studioBtn.addEventListener('click', () => {
  const isDropdownOpen = studioDropdown.classList.contains("height-auto");

  if (isDropdownOpen) {
    studioDropdown.classList.remove("height-auto");
    studioArrow.classList.remove("arrow-flip");
  } else {

    hideAllDropdowns();

    studioDropdown.classList.add("height-auto");
    studioArrow.classList.add("arrow-flip");
  }
});


specialBtn.addEventListener('click', () =>{
  specialCont.style.height = "auto";
});


showButtonOnScroll();



const splide = new Splide(".splide", {
  type: "loop",
  arrows: false,
  pagination: true,
  autoplay: true,
  autoplayInterval: 3000,
});


splide.mount();

AOS.init();

const gameContainer = document.getElementById("game_container");

function initializeCard(param = '') {
  let data = comGame.filter((item) => item?.genre?.includes(param));
  let li = '';
  data.forEach((item) => {
    li += `<div class="com-gallery__card" style="opacity: 1; transform: none;"  data-aos="fade-up" data-aos-delay="200">
            <a href="${item.link}">
              <div class="com-game-card">
                <div class="com-game-card__icon-wrapper">
                  <div class="com-game-card__read-more">Explore More</div>
  
                  <img class="lazy-media lazy-media--loaded com-game-card__icon" src="${item.img}" alt="" width="360" height="360">
                </div>
  
                <div class="com-game-card__detail">
                  <h2 class="com-game-card__name">
                    <abbr title=${item.title}>${item.title}</abbr>
                  </h2>
  
                  <div class="com-game-card__genre">${item.genre}</div>
                </div>
              </div>
            </a>
          </div>`;
    // gameContainer.appendChild(li)

  })
  gameContainer.innerHTML = li;

}

const comGame = [
  {
    title: "Disney Speedstorm",
    link: "https://disneyspeedstorm.com/",
    genre: "Racing, Arcade, Action/Adventure",
    img: "asset/game1.webp",
  },

  {
    title: "Disney Dreamlight Valley",
    link: "https://disneydreamlightvalley.com/",
    genre: "Action/Adventure, Role Playing, Tycoon/Simulation, Casual",
    img: "asset/game 2.webp",
  },

  {
    title: "Asphalt 9: Legends",
    link: "https://disneydreamlightvalley.com/",
    genre: "Racing, Multiplayer, Sports",
    img: "asset/game3.webp",
  },

  {
    title: "The Oregon Trail",
    link: "https://www.gameloft.com/game/the-oregon-trail",
    genre: "Action/Adventure",
    img: "asset/game 4.webp",
  },

  {
    title: "March Of Empires",
    link: "https://www.gameloft.com/game/march-of-empires",
    genre: "Strategy, Role Playing",
    img: "asset/game5.webp",
  },

  {
    title: "Dungeon Hunter 6",
    link: "https://dungeonhunter6.onelink.me/bIv5/uwcgw3du",
    genre: "Action/Adventure, Role Playing, Multiplayer",
    img: "asset/game6.webp",
  },

  {
    title: "Disney Getaway Blast Apple Arcade",
    link: "https://www.gameloft.com/game/disney-getaway-blast-apple-arcade",
    genre: "Puzzle, Tycoon/Simulation, Casual",
    img: "asset/game7.webp",
  },

  {
    title: "My Little Pony: Mane Merge",
    link: "https://www.gameloft.com/game/my-little-pony-mane-merge",
    genre: "Action/Adventure, Puzzle",
    img: "asset/game8.webp",
  },

  {
    title: "Idle Siege",
    link: "https://www.gameloft.com/game/idle-siege",
    genre: "Tycoon/Simulation, Strategy",
    img: "asset/game9.webp",
  },

  {
    title: "LEGO Star Wars: Castaways",
    link: "https://www.gameloft.com/game/lego-star-wars-castaways",
    genre: "Action/Adventure, Multiplayer",
    img: "asset/game10.webp",
  },

  {
    title: "Heroes of the Dark",
    link: "https://www.gameloft.com/game/heroes-of-the-dark",
    genre: "Strategy",
    img: "asset/game11.webp",
  },

  {
    title: "AutoDefense",
    link: "https://www.gameloft.com/game/auto-defense",
    genre: "Strategy, Tycoon/Simulation",
    img: "asset/game12.webp",
  },

  {
    title: "Ballistic Baseball",
    link: "https://www.gameloft.com/game/ballistic-baseball",
    genre: "Sports",
    img: "asset/game13.webp",
  },

  {
    title: "Modern Combat Versus",
    link: "https://www.gameloft.com/en/game/modern-combat-versus",
    genre: "Action/Adventure, Role Playing",
    img: "asset/game14.webp",
  },

  {
    title: "War Planet Online: Global Conquest",
    link: "https://www.gameloft.com/game/war-planet-online-global-conquest",
    genre: "Strategy, Action/Adventure",
    img: "asset/game15.webp",
  },

  {
    title: "Iron Blade: Medieval Legends RPG",
    link: "https://www.gameloft.com/game/iron-blade",
    genre: "Action/Adventure, Role Playing",
    img: "asset/game16.webp",
  },

  {
    title: "City Mania: Town Building Game",
    link: "https://www.gameloft.com/game/city-mania",
    genre: "Tycoon/Simulation, Strategy",
    img: "asset/game17.webp",
  },

  {
    title: "Gangstar New Orleans: Online Open World Game",
    link: "https://www.gameloft.com/en/game/gangstar-new-orleans",
    genre: "Action/Adventure, Role Playing, Multiplayer",
    img: "asset/game18.webp",
  },

  {
    title: "Little Big City 2",
    link: "https://www.gameloft.com/en/game/little-big-city-2",
    genre: "Casual",
    img: "asset/game19.webp",
  },

  {
    title: "Disney Magic Kingdoms",
    link: "https://www.gameloft.com/game/disney-magic-kingdom",
    genre: "Tycoon/Simulation",
    img: "asset/game20.webp",
  },
];

initializeCard();



const actionAdventureOption = document.querySelectorAll(".com-dropdown-multi__option");


let selectedOption = '';

actionAdventureOption.forEach((option) =>{
  option.addEventListener('click', (event) =>{
    event.stopPropagation();

    if (selectedOption == option) {
      selectedOption = '';
      initializeCard("");
      option.classList.remove("com-dropdown-multi__option--selected");
    } else {
      selectedOption = option;
      initializeCard(option.textContent); 
      option.classList.add("com-dropdown-multi__option--selected");

    }
  }); 
});
