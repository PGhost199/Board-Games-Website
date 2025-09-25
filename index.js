var navBar = document.getElementById("navbar");
var navIcon = document.getElementsByClassName("nav-icon")[0];
var navItems = document.getElementsByClassName("nav-items")[0];
var navMenu = document.getElementById("menu");

function handleResize() {
  let windowWidth = window.innerWidth;

  if (windowWidth < 768) {
    navBar.classList.add("navbar-resp");
    navIcon.classList.add("show");
    navItems.classList.add("hide");
  } else {
    navBar.classList.remove("navbar-resp");
    navIcon.classList.remove("show");
    navItems.classList.remove("hide");
    navItems.classList.add("show");
  }
}

window.addEventListener("load", handleResize);
window.addEventListener("resize", handleResize);

navIcon.addEventListener("click", function () {
  navMenu.classList.toggle("show");
});

function setDarkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  if (document.getElementById("dark-mode1").textContent == "Light Mode") {
    document.getElementById("dark-mode1").textContent = "Dark Mode";
  } else if (document.getElementById("dark-mode1").textContent == "Dark Mode") {
    document.getElementById("dark-mode1").textContent = "Light Mode";
  }
}
