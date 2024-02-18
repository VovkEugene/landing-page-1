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
