var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
  console.log("Клик");
  document
    .querySelector(".navbar-menu")
    .classList.toggle("navbar-menu-visible");
});
