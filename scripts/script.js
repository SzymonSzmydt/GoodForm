// Hamburger menu

const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function() {
    const bigMac = document.querySelector(".hamburger");
    bigMac.children[0].classList.toggle("bigMacOff");
    bigMac.children[0].classList.toggle("bigMacOn");
});

hamburger.addEventListener("click", function() {
const menu = document.querySelector(".menu");
menu.classList.toggle("menuMobile");
});