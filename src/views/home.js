import view from "./view.js";

import style from "../css/index.scss";
import home_style from "../css/home.scss";

import videoFile from "../assets/image/baner_animate.gif";
import campPalms from "../assets/image/palma.svg";
import campSea from "../assets/image/morze.svg";
import campMountains from "../assets/image/gory.svg";
import relax from "../assets/image/akademia_relaksu.jpg";
import dance from "../assets/image/akademia_tanca.jpg";
import paint from "../assets/image/akademia_malarstwa.jpg";
import sing from "../assets/image/akademia_wokalu.jpg";
import sport from "../assets/image/akademia_sportu.jpg";
import survival from "../assets/image/kolonia_survvalowa.jpg";
import adventures from "../assets/image/kolonia_15_przygod.jpg";
import horse from "../assets/image/kolonia_konna.jpg";
import girl from "../assets/image/usniechniente_dziewczyny.jpg";

//gallery
import galery_1 from "../assets/image/galery_1.jpg";
import galery_2 from "../assets/image/galery_2.jpg";
import galery_3 from "../assets/image/galery_3.jpg";
import galery_4 from "../assets/image/galery_4.jpg";
import galery_5 from "../assets/image/galery_5.jpg";
import galery_6 from "../assets/image/galery_6.jpg";
import galery_7 from "../assets/image/galery_7.jpg";
import galery_8 from "../assets/image/galery_8.jpg";
import galery_9 from "../assets/image/galery_9.jpg";
import galery_10 from "../assets/image/galery_10.jpg";
import galery_11 from "../assets/image/galery_11.jpg";
import galery_12 from "../assets/image/galery_12.jpg";

const json = require("../json/list.json");
const campList = json.campData;

export default class extends view {
    constructor(params) {
        super(params);
        this.setTitle("Camp");
    }

    async getHtml() {
        return (
            `<div class="baner">
          <img src="${videoFile}" /></div>
          <div class="camp_choose">
          <div class="palm">
          <a href="/#" data-link><img class="camp_choose_img" src="${campPalms}" />
          <p class="choose">Obozy<br/> zagraniczne</p> </a>
          </div>
          <div class="sea">
          <a href="/#" data-link><img class="camp_choose_img" src="${campSea}" />
          <p class="choose">Kolonie<br/> nad morzem</p> </a>
          </div>
          <div class="mountains">
          <a href="/#" data-link><img class="camp_choose_img" src="${campMountains}"/>
          <p class="choose">Kolonie<br/> w górach</p> </a>
          </div>
          </div>
          <div class="description">
          <h1>Obozy i kolonie tematyczne</h1>
          <p>Wyjątkowe programy i mnóstwo ciekawych zajęć! Robisz to, co lubisz! Tworzysz swoje wakacje!
          To Tobie pozostawiamy decyzję, na które zajęcia zapiszecie się w trakcie trwania turnusu.</p>
          <div class="academy">
          <div class="relax academy_padding">
          <a href="/#" data-link><img class="academy_img" src="${relax}"/>
          <h2 class="academy_choose">Akademia Relaksu</h2> </a>
          </div>
       <div class="dance academy_padding">
          <a href="/#" data-link><img class="academy_img" src="${dance}"/>
          <h2 class="academy_choose">Akademia Tańca</h2> </a>
          </div>
        <div class="paint academy_padding">
          <a href="/#" data-link><img class="academy_img" src="${paint}"/>
          <h2 class="academy_choose">Akademia Malarstwa</h2> </a>
          </div>
          <div class="sing academy_padding">
          <a href="/#" data-link><img class="academy_img" src="${sing}"/>
          <h2 class="academy_choose">Akademia Wokalu</h2> </a>
          </div>
          <div class="sport academy_padding">
          <a href="/#" data-link><img class="academy_img" src="${sport}"/>
          <h2 class="academy_choose">Akademia Sportu</h2> </a>
          </div>
          <div class="survival academy_padding">
          <a href="/#" data-link><img class="academy_img" src="${survival}"/>
          <h2 class="academy_choose">Kolonia Survivalowa</h2> </a>
          </div>
          <div class="adventures academy_padding">
          <a href="/#" data-link><img class="academy_img" src="${adventures}"/>
          <h2 class="academy_choose">Kolonie 15 Przygód</h2> </a>
          </div>
          <div class="horse academy_padding">
          <a href="/#" data-link><img class="academy_img" src="${horse}"/>
          <h2 class="academy_choose">Kolonia Jazdy konnej</h2> </a>
          </div>
          </div>
          </div>
          <div class="first_minute">
          <img class="first_minute_girl" src="${girl}"/>
          <div class="first_descript">
          <h1 class="descript_h1">Promocja!</h1>
          <h1 class="descript_h2">First Minute Seson</h1>
          <p class="first_p">Dowiedz się o najlepszych promocjach
          i ofercie jako pierwszy.
          Nie zwlekaj, zanim będzie za późno!</p>
          <a href="/#" class="button" data-link>czytaj więcej . . .</a>
          </div>
          </div>` +
            best() +
            `<div class="social_media_big">
          <i class='bx bxl-facebook media'></i>
          <i class='bx bxl-instagram media' ></i>
          <i class='bx bxl-pinterest-alt media' ></i>
          <i class='bx bxl-tiktok media' ></i>
      </div>` +
            carousel()
        );
    }
}

function best() {
    return `<div class="best">
    <h2>Najczęściej wybierane</h2>

    </div>`;
}

//GALLERY
function carousel() {
    console.log("carusel");
    return `<div class="carousel">
      <div class="slides" >
      <img src="${galery_1}" class="slide"/>
      <img src="${galery_2}" class="slide" />
      <img src="${galery_3}" class="slide" />
      <img src="${galery_4}" class="slide" />
      <img src="${galery_5}" class="slide"/ >
      <img src="${galery_6}" class="slide"/ >
      <img src="${galery_7}" class="slide" />
      <img src="${galery_8}" class="slide" />
      <img src="${galery_9}" class="slide" />
      <img src="${galery_10}" class="slide" />
      <img src="${galery_11}" class="slide" />
      <img src="${galery_12}" class="slide" />

      </div>
    <div class="controls">
      <div class="control" id="prev"><i class='bx bx-chevron-left'></i></div>
      <div class="control" id="next"><i class='bx bx-chevron-right'></i></div>
    </div>
  </div>`;
}

window.addEventListener("load", carouselBuild);

function carouselBuild() {
    console.log("event");

    slider();
}
//carusela
// function slider() {
//     console.log("slider");

//     const carouselSlider = document.querySelector(".slides");
//     const carouselImages = document.querySelectorAll(".slides img");

//     //button
//     const prevBth = document.querySelector("#prev");
//     const nextBth = document.querySelector("#next");
//     console.log(carouselImages);

//     //Counter

//     let counter = 1;
//     // let counter = 0;
//     const size = carouselImages[0].clientWidth;
//     console.log(carouselImages[0].clientWidth);
//     carouselSlider.style.transform = "translateX(" + -size * counter + "px)";

//     //buton listeners
//     nextBth.addEventListener("click", () => {
//         if (counter >= carouselImages.length) return;
//         // if( counter <= 0) return
//         carouselSlider.style.transform = "transform 0.4s ease";
//         counter++;
//         carouselSlider.style.transform = "translateX(" + -size * counter + "px)";
//     });

//     prevBth.addEventListener("click", () => {
//         if (counter <= 0) return;
//         carouselSlider.style.transform = "transform 0.4s ease";
//         counter--;
//         carouselSlider.style.transform = "translateX(" + -size * counter + "px)";
//     });

//     carouselSlider.addEventListener("transitionend", () => {
//         if (carouselImages[counter].id === "lastClone") {
//             carouselSlider.style.transform = "none";
//             counter = carouselImages.length - 2;
//             carouselSlider.style.transform = "translateX(" + -size * counter + "px)";
//         }
//         if (carouselImages[counter].id === "firstClone") {
//             console.log("dddd");
//             carouselSlider.style.transform = "none";
//             counter = carouselImages.length - counter;
//             carouselSlider.style.transform = "translateX(" + -size * counter + "px)";
//         }
//     });
//     //setInterval

//     return ``;
// }
