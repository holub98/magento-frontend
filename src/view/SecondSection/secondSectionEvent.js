const navs = document.querySelectorAll(".nav");
const logo = document.querySelector(".logo");
const hamburger = document.getElementById("button-hamburger");
const closeButton = document.getElementById("close-nav");
const navigation = document.getElementById("navigation");

if (navs.length) {
  navs.forEach((nav) => {
    nav.addEventListener("click", (e) => {
      navs.forEach((nav) => {
        nav.classList.remove("active");
      });
      e.preventDefault();
      nav.classList.add("active");
    });
  });
  logo.addEventListener("click", (e) => {
    navs.forEach((nav) => {
      nav.classList.remove("active");
    });
  });
}

window.addEventListener("resize", () => {
  if (screen.width <= 1200 || window.innerWidth <= 1200) {
    navigation.classList.remove("menu");
    navigation.classList.add("menu-responsive");
  } else {
    navigation.classList.add("menu");
    navigation.classList.remove("menu-responsive");
  }
});

hamburger.addEventListener("click", () => {
  navigation.classList.add("menu-responsive-animation");
});

closeButton.addEventListener("click", () => {
  navigation.classList.remove("menu-responsive-animation");
});
