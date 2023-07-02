const phone = document.getElementById("phone-img");
const number = document.getElementById("phone-number");
const mail = document.getElementById("mail-img");
const address = document.getElementById("mail-address");

// on mobile view show phone number on click
phone.addEventListener("click", () => {
  number.classList.toggle("text-phone-animated");
  if (address.classList.contains("text-mail-animated")) {
    address.classList.toggle("text-mail-animated");
  }
});

// on mobile view show mail on click
mail.addEventListener("click", () => {
  address.classList.toggle("text-mail-animated");
  if (number.classList.contains("text-phone-animated")) {
    number.classList.toggle("text-phone-animated");
  }
});

// function to change view from desktp to mobile and vice versa
const changeTopToResponsive = () => {
  if (screen.width <= 960 || window.innerWidth <= 960) {
    address.classList.remove("text-display");
    number.classList.remove("text-display");
    address.classList.add("text-contact-responsive");
    number.classList.add("text-contact-responsive");
  } else {
    address.classList.add("text-display");
    number.classList.add("text-display");
    address.classList.remove("text-contact-responsive");
    number.classList.remove("text-contact-responsive");
    address.classList.remove("text-address-animated");
    number.classList.remove("text-phone-animated");
    if (number.classList.contains("text-phone-animated")) {
      number.classList.remove("text-phone-animated");
    }
    if (address.classList.contains("text-mail-animated")) {
      address.classList.remove("text-mail-animated");
    }
  }
};

// change view if size of screen was change
window.addEventListener("resize", () => {
  changeTopToResponsive();
});

changeTopToResponsive();
