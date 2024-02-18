const menuButtonNode = document.getElementById("menu-button");
const navLinksNode = document.getElementById("nav-links");
const menuButtonIconNode = menuButtonNode.querySelector("i");

menuButtonNode.addEventListener("click", (event) => {
  navLinksNode.classList.toggle("open");

  const isOpen = navLinksNode.classList.contains("open");

  menuButtonIconNode.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinksNode.addEventListener("click", (event) => {
  navLinksNode.classList.remove("open");
  menuButtonIconNode.setAttribute("class", "ri-menu-3-line");
});

// --------------ScrollReveal is a JavaScript library-----
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content .header__button", {
  ...scrollRevealOption,
  delay: 1000,
});
