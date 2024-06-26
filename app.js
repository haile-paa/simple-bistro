const menu = [
  {
    id: 1,
    title: "JUNKIE BURGER",
    category: "Burgers",
    price: 400,
    img: "./images/item-1.png",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
    laboriosam excepturi! Quo, officia `,
  },
  {
    id: 2,
    title: "TEXAS STYLE BURGER",
    category: "Burgers",
    price: 390,
    img: "./images/item-2.png",
    desc: `Mixed with the spicy BBQ house sauce and doubled patties, this texas burger comines nicely with a sweetened bakery wheat bun and sided with spice french fries `,
  },
  {
    id: 3,
    title: "CHICKEN JUNKIE  ",
    category: "Burgers",
    price: 410,
    img: "./images/item-3.png",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
    laboriosam excepturi! Quo, officia`,
  },
  {
    id: 4,
    title: "BACON BURGER",
    category: "Burgers",
    price: 420,
    img: "./images/item-4.png",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
    laboriosam excepturi! Quo, officia `,
  },
  {
    id: 5,
    title: "CHICKEN NUGGETS",
    category: "Chiken",
    price: 350,
    img: "./images/item-5.png",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
    laboriosam excepturi! Quo, officia `,
  },
  {
    id: 6,
    title: "BBQ SWISSED",
    category: "Chiken",
    price: 390,
    img: "./images/item-6.png",
    desc: `chicken wing soaked for hours with special house marinated sauce served withour favorite cajun fries`,
  },
  {
    id: 7,
    title: "DOUBLE SWISS",
    category: "Burgers",
    price: 380,
    img: "./images/item-7.png",
    desc: `Mixed with the sweetest house sauce and double patties, this swiss burger combines nicely with a sweetened bakery wheat bun ande sided with cajun fries`,
  },
  {
    id: 8,
    title: "COCA COLA",
    category: "Drinks",
    price: 70,
    img: "./images/item-8.jpeg",
    desc: `....`,
  },
  {
    id: 9,
    title: "SPRITE",
    category: "Drinks",
    price: 70,
    img: "./images/item-9.jpg",
    desc: `...`,
  },
  {
    id: 10,
    title: "Arada drink",
    category: "Drinks",
    price: 90,
    img: "./images/item-10.png",
    desc: `with all three flavers.`,
  },
  {
  id: 11,
  title: "SPAGHETII WITH RED SAUCE",
  category: "spaghetii",
  price: 400,
  img: "./images/item-11.png",
  desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
  laboriosam excepturi! Quo, officia `,
},
{
id: 12,
title: "SPAGHETII WITH GREEN SAUCE",
category: "spaghetii",
price: 400,
img: "./images/item-12.png",
desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
laboriosam excepturi! Quo, officia`,
},
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">birr${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}

const dynamicText = document.querySelector("h1 span");
const words = ["BIStRO", "SINCE 2016"];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();