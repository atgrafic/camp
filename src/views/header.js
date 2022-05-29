import style from "../css/index.scss";
import header_style from "../css/header.scss";

let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
/* <i class='bx bx-x'></i> */
//loop chowa i pojawia
searchBox.addEventListener("click", () => {
    navbar.classList.toggle("showInput");
    if (navbar.classList.contains("showInput")) {
        searchBox.classList.replace("bx-search", "bx-x");
    } else {
        searchBox.classList.replace("bx-x", "bx-search");
    }
});
//menu respond
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let CloseOpenBtn = document.querySelector(".nav-links .bx-x");
let navLinks = document.querySelector(".nav-links");
let logo = document.querySelector(".logo");

menuOpenBtn.addEventListener("click", () => {
    navLinks.style.left = "0";
    logo.style.display = "none";
});

CloseOpenBtn.addEventListener("click", () => {
    navLinks.style.left = "-100%";

    logo.style.display = "block";
});

let close = document.querySelectorAll(".close");


close.forEach(element => {
   element.addEventListener('click', closeMenu)
})
function closeMenu() {

    navLinks.style.left = "-100%";

}