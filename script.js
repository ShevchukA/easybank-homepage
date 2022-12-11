let menuBtn = document.querySelector(".mobile-menu-button");
let menu = document.querySelector(".mobile-menu-screen");
let mainSection = document.querySelector("body");
let mokup = document.querySelector(".mokup-image");

menuBtn.addEventListener("click", showMenu);

function showMenu() {
    menuBtn.classList.toggle("mobile-menu-button-close");
    mokup.classList.toggle("mokup-disable");
    menu.classList.toggle("mobile-menu-shown");
    mainSection.classList.toggle("scrol-block");
}

