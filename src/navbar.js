const navs = document.querySelectorAll(".nav");

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
}
