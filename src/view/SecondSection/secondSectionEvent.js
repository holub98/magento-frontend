const navs = document.querySelectorAll(".nav");
const logo = document.querySelector(".logo");
const hamburger = document.getElementById("button-hamburger");
const closeButton = document.getElementById("close-nav");
const navigation = document.getElementById("navigation");

// change color of navigation when active
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
    navigation.classList.remove("menu-responsive-animation");
  });
}

// function to change view from desktp to mobile and vice versa
const changeNavigationToResponsive = () => {
  if (screen.width <= 1200 || window.innerWidth <= 1200) {
    navigation.classList.remove("menu");
    navigation.classList.add("menu-responsive");
  } else {
    navigation.classList.add("menu");
    navigation.classList.remove("menu-responsive");
    if (navigation.classList.contains("menu-responsive-animation")) {
      navigation.classList.add("menu");
      navigation.classList.remove("menu-responsive-animation");
    }
  }
};

// change view if size of screen was change
window.addEventListener("resize", () => {
  changeNavigationToResponsive();
});
changeNavigationToResponsive();

// mobile menu after click
hamburger.addEventListener("click", () => {
  navigation.classList.add("menu-responsive-animation");
});

// close mobile menu after click
closeButton.addEventListener("click", () => {
  navigation.classList.remove("menu-responsive-animation");
});

// close mobile menu after click on logo
logo.addEventListener("click", () => {
  navigation.classList.remove("menu-responsive-animation");
});
