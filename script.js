/// HAMBURGUER

const nav = document.querySelector("nav"),
  ham = document.querySelector(".hamburguer")

ham.addEventListener("click", toggleMenu)

// toggle menu in and out when clicking on the hamburger
function toggleMenu() {
  if (nav.classList.contains("show-menu")) {
    nav.classList.remove("show-menu")
  } else {
    nav.classList.add("show-menu")
  }
}
