import view from "./view.js";

import style from "../css/index.scss";
import home_style from "../css/home.scss";

import baner_1 from "../assets/image/baner_1.png";
import baner_2 from "../assets/image/baner_2.png";
import text_1 from "../assets/image/text_1.svg";
import text_2 from "../assets/image/text_2.svg";
import star_1 from "../assets/image/star_1.svg";
import star_2 from "../assets/image/star_2.svg";

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

export default class extends view {
    constructor(params) {
        super(params);
        this.setTitle("Camp");
    }

    async getHtml() {
        return (
            `<div class="baner">
            <img class="baner_1" src="${baner_1}"/>
            <img class="baner_2" src="${baner_2}"/>
            <img class="text_1" src="${text_1}"/>
            <img class="text_2" src="${text_2}"/>
             <img class="star_1" src="${star_1}"/>
             <img class="star_2" src="${star_1}"/>
             <img class="star_3" src="${star_2}"/>
             <img class="star_4" src="${star_2}"/>

            </div>
          <div class="camp_choose">

          <div class="palm">
          <a  href="/Obozy-zagraniczne" data-link>
           </a>
          </div>
          <div class="sea">
          <a href="/Kolonie-nad-morzem" data-link></a>
          </div>
          <div class="mountains">
          <a href="/Kolonie-w-gorach" data-link></a>
          </div>
          </div>
          <div class="description">
          <h1>Obozy i kolonie tematyczne</h1>
          <p>Wyjątkowe programy i mnóstwo ciekawych zajęć! Robisz to, co lubisz! Tworzysz swoje wakacje!
          To Tobie pozostawiamy decyzję, na które zajęcia zapiszecie się w trakcie trwania turnusu.</p>
          <div class="academy">
          <div class="relax academy_padding">
          <a href="/#" class="academy_continer" data-link>
          <img class="academy_img" src="${relax}"/>
          <div class="bth">
          <div class="bth_text"> znajdź swój Camp</div>
          </div>
          </a>
          <a href="/#" data-link>
          <h2 class="academy_choose">Akademia Relaksu</h2>
           </a>
          </div>
       <div class="dance academy_padding">
          <a href="/#" class="academy_continer" data-link>
          <img class="academy_img" src="${dance}"/>
          <div class="bth">
          <div class="bth_text"> znajdź swój Camp</div>
          </div>
          </a>
          <a href="/#" data-link>
          <h2 class="academy_choose">Akademia Tańca</h2>
          </a>
          </div>
        <div class="paint academy_padding">
        <a href="/#" class="academy_continer" data-link>
        <img class="academy_img" src="${paint}"/>
        <div class="bth">
        <div class="bth_text"> znajdź swój Camp</div>
        </div>
        </a>
        <a href="/#" data-link>
        <h2 class="academy_choose">Akademia Malarstwa</h2>
         </a>
          </div>
          <div class="sing academy_padding">
          <a href="/#" class="academy_continer" data-link>
          <img class="academy_img" src="${sing}"/>
          <div class="bth">
          <div class="bth_text"> znajdź swój Camp</div>
          </div>
          </a>
          <a href="/#" data-link>
          <h2 class="academy_choose">Akademia Wokalu</h2>
           </a>
          </div>
          <div class="sport academy_padding">
          <a href="/#" class="academy_continer" data-link>
          <img class="academy_img" src="${sport}"/>
          <div class="bth">
          <div class="bth_text"> znajdź swój Camp</div>
          </div>
          </a>
          <a href="/#" data-link>
          <h2 class="academy_choose">Akademia Sportu</h2>
           </a>
          </div>
          <div class="survival academy_padding">
          <a href="/#" class="academy_continer" data-link>
          <img class="academy_img" src="${survival}"/>
          <div class="bth">
          <div class="bth_text"> znajdź swój Camp</div>
          </div>
          </a>
          <a href="/#" data-link>
          <h2 class="academy_choose">Kolonia Survivalowa</h2>
           </a>
          </div>
          <div class="adventures academy_padding">
          <a href="/#" class="academy_continer" data-link>
          <img class="academy_img" src="${adventures}"/>
          <div class="bth">
          <div class="bth_text"> znajdź swój Camp</div>
          </div>
          </a>
          <a href="/#" data-link>
          <h2 class="academy_choose">Kolonia 15 Przygód</h2>
           </a>
          </div>
          <div class="horse academy_padding">
          <a href="/#" class="academy_continer" data-link>
          <img class="academy_img" src="${horse}"/>
          <div class="bth">
          <div class="bth_text"> znajdź swój Camp</div>
          </div>
          </a>
          <a href="/#" data-link>
          <h2 class="academy_choose">Kolonia Jazdy konnej</h2>
           </a>
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
          <div class="button_effect">
          <a href="#" class="btn-flip" data-back="czytaj więcej  " data-front="czytaj więcej ..."></a>
          </div>
          </div>
          </div>
          <div class="best">
          <h2>Najczęściej wybierane</h2>
          <hr/> <div class="campBest">` +
            bestChoose() +
            `</div></div>
            <div class="social_media_big">
          <i class='bx bxl-facebook media'></i>
          <i class='bx bxl-instagram media' ></i>
          <i class='bx bxl-pinterest-alt media' ></i>
          <i class='bx bxl-tiktok media' ></i>
      </div></div>` +
            carousel()
        );
    }
}

//json-best
const json = require("../json/list.json");
const camp = json.campData;

function bestChoose() {
    let bestCamp = "";

    for (let i = 0; i < 9; i++) {
        console.log("i for");
        console.log(camp[0].image[0]);
        bestCamp += ` <div class="camp" id=${camp[i].id}>
        <a class="tab-camp" href="/kolonia/${camp[i].id}" data-link>
        <img class="camp-photo" src="${camp[i].image[0]}">
        <div>
        <h3 class="camp-city">${camp[i].city}</h3>
        <p class="camp-name">${camp[i].name}</p>
        </div>
        </a>
         </div>`;
    }
    return bestCamp;
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

       </div>`;
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
