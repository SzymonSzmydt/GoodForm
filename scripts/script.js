// Hamburger menu

const hamburger = document.querySelector(".hamburger");

// Hamburger Animation

function hamburgerAnimation() {
    const bigMac = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");

        bigMac.children[0].classList.toggle("bigMacOff");
        bigMac.children[0].classList.toggle("bigMacOn");

        menu.classList.toggle("menuMobile");
}


hamburger.addEventListener("click", hamburgerAnimation);

