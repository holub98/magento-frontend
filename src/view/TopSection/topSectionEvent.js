const phone = document.getElementById("phone-img");
const number = document.getElementById("phone-number");
const mail = document.getElementById("mail-img");
const address = document.getElementById("mail-address");

phone.addEventListener("click", () => {
  number.classList.toggle("text-phone-animated");
  if (address.classList.contains("text-mail-animated")) {
    address.classList.toggle("text-mail-animated");
  }
});

mail.addEventListener("click", () => {
  address.classList.toggle("text-mail-animated");
  if (number.classList.contains("text-phone-animated")) {
    number.classList.toggle("text-phone-animated");
  }
});

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
  }
};
window.addEventListener("resize", () => {
  changeTopToResponsive();
});

changeTopToResponsive();
