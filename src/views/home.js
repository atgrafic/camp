import view from "./view.js";

import style from "../css/index.scss";
import home_style from "../css/home.scss";

import baner_1 from "../assets/image/baner_1.png";
import baner_2 from "../assets/image/baner_2.png";
import text_1 from "../assets/image/text_1.svg";
import text_2 from "../assets/image/text_2.svg";
import star_1 from "../assets/image/star_1.svg";
import star_2 from "../assets/image/star_2.svg";
import relax from "../assets/image/akademia_relaksu.jpg";
import dance from "../assets/image/akademia_tanca.jpg";
import paint from "../assets/image/akademia_malarstwa.jpg";
import sing from "../assets/image/akademia_wokalu.jpg";
import sport from "../assets/image/akademia_sportu.jpg";
import survival from "../assets/image/kolonia_survvalowa.jpg";
import adventures from "../assets/image/kolonia_15_przygod.jpg";
import horse from "../assets/image/kolonia_konna.jpg";
import girl from "../assets/image/usniechniente_dziewczyny.jpg";

const json = require("../json/list.json");
const camp = json.campData;

const jsonGallery = require("../json/galleryList.json");
const galerySlides = jsonGallery.galleryList;

const jsonSubject = require("../json/subject.json");
const campSubject = jsonSubject.subject;

export default class extends view {
    constructor(params) {
        super(params);
        this.campId = params.id;
        this.setTitle("Camp");
    }

    async getHtml() {
        return capmList() ;
    }
    async executeJs() {
        carousel();
        return "";
    }
}

function capmList() {
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
          <a  href="/Kolonie/Obozy-zagraniczne" data-link>
           </a>
          </div>
          <div class="sea">
          <a href="/Kolonie/Kolonie-nad-morzem" data-link></a>
          </div>
          <div class="mountains">
          <a href="/Kolonie/Kolonie-w-gorach" data-link></a>
          </div>
          </div>
          <div class="description">
          <h1>Obozy i kolonie tematyczne</h1>
          <p>Wyjątkowe programy i mnóstwo ciekawych zajęć! Robisz to, co lubisz! Tworzysz swoje wakacje!
          To Tobie pozostawiamy decyzję, na które zajęcia zapiszecie się w trakcie trwania turnusu.</p>

          ` +
         campChoose() +
          `</div>
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
          <hr/>
          <div class="campBest">` +
        bestChoose() +
        `</div></div>
            <div class="social_media_big">
          <i class='bx bxl-facebook media'></i>
          <i class='bx bxl-instagram media' ></i>
          <i class='bx bxl-pinterest-alt media' ></i>
          <i class='bx bxl-tiktok media' ></i>
      </div>
    <div class="gallery">` +
        caru() +
        `</div>`
    );
}


//best

function bestChoose() {
    let bestCamp = "";

    for (let i = 0; i < 9; i++) {
        bestCamp +=
     ` <div class="camp" id=${camp[i].id}>

            <img class="camp-photo" src="${camp[i].image[0]}">
           <div >
            <a class="tab-camp" href="/Kolonie/${camp[i].id}" data-link></a>

         </div>
            <div class="name-camp">
          <a class="camp-city" href="/Kolonie/${camp[i].id}" data-link>${camp[i].city} </a>
          <a class="camp-name" href="/Kolonie/${camp[i].id}" data-link>${camp[i].name} </a>
          </div>
       </div>`;
    }

    return bestCamp;
}
//GALLERY

function caru() {
    let galleryHome = "";
    for (let i = 0; i < galerySlides.length; i++) {
        galleryHome += `<div class="product">
        <div class="slides">
        <img class="slides_img" src="${galerySlides[i].image[0]}" />
        <img class="slides_img" src="${galerySlides[i].image[1]}" />
        <img class="slides_img" src="${galerySlides[i].image[2]}" />
        <img class="slides_img" src="${galerySlides[i].image[3]}" />
        <img class="slides_img" src="${galerySlides[i].image[4]}" />
        <img class="slides_img" src="${galerySlides[i].image[5]}" />
        </div>
        </div>`;
    }

    return galleryHome;
}
let myIndex = 0;

function carousel() {
    let x = document.getElementsByClassName("product");
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "block";
    }
    console.log(myIndex);

    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1;
    }
    x[myIndex - 1].style.display = "none";
    setTimeout(carousel, 3000);
}


function  campChoose() {
    return `
    <div class="academy-camp">
        <div class="campSubject">
            <div class="campImg">
                <img class="academy_img" src="${relax}" />
                <div class="camp-bth">
                <a class="camp_continer" href="/Kolonie/Kolonie-i-obozy-tematyczne/Akademia-relaksu" data-link></a>
                <div class="camp-bth-text"> znajdź swój Camp</div>
                </div>

                <a class="camp_list" href="/Kolonie/Kolonie-i-obozy-tematyczne/Akademia-relaksu" data-link>Akademia Relaksu</a>
            </div>
        </div>

        <div class="campSubject">
        <div class="campImg">
            <img class="academy_img" src="${dance}" />
            <div class="camp-bth">
            <a class="camp_continer" href="/Kolonie/Kolonie-i-obozy-tematyczne/Akademia-tanca" data-link></a>
            <div class="camp-bth-text"> znajdź swój Camp</div>
            </div>

            <a class="camp_list" href="/Kolonie/Kolonie-i-obozy-tematyczne/Akademia-tanca" data-link>Akademia Tańcu</a>
            </div>
        </div>

        <div class="campSubject">
        <div class="campImg">
            <img class="academy_img" src="${paint}" />
            <div class="camp-bth">
            <a class="camp_continer" href="/Kolonie/Kolonie-i-obozy-tematyczne/Akademia-malarstwa" data-link></a>
            <div class="camp-bth-text"> znajdź swój Camp</div>
            </div>

            <a class="camp_list" href="/Kolonie/Kolonie-i-obozy-tematyczne/Akademia-malarstwa" data-link>Akademia Malarstwa</a>
            </div>
        </div>

        <div class="campSubject">
        <div class="campImg">
            <img class="academy_img" src="${sing}" />
            <div class="camp-bth">
            <a class="camp_continer" href="/Kolonie/Kolonie-i-obozy-tematyczne/Akademia-wokalu" data-link></a>
            <div class="camp-bth-text"> znajdź swój Camp</div>
            </div>

            <a class="camp_list" href="/Kolonie/Kolonie-i-obozy-tematyczne/Akademia-wokalu" data-link>Akademia Wokalu</a>
            </div>
        </div>

        <div class="campSubject">
        <div class="campImg">
            <img class="academy_img" src="${sport}" />
            <div class="camp-bth">
            <a class="camp_continer" href="/Kolonie/Kolonie-i-obozy-tematyczne/Akademia-sportu" data-link></a>
            <div class="camp-bth-text"> znajdź swój Camp</div>
            </div>

            <a class="camp_list" href="/Kolonie/Kolonie-i-obozy-tematyczne/Akademia-sportu" data-link>Akademia Sportu</a>
            </div>
        </div>

        <div class="campSubject">
        <div class="campImg">
            <img class="academy_img" src="${survival}" />
            <div class="camp-bth">
            <a class="camp_continer" href="/Kolonie/Kolonie-i-obozy-tematyczne/Kolonia-survalowa" data-link></a>
            <div class="camp-bth-text"> znajdź swój Camp</div>
            </div>

            <a class="camp_list" href="/Kolonie/Kolonie-i-obozy-tematyczne/Kolonia-survalowa" data-link>Kolonia Survalowa</a>
            </div>
        </div>

        <div class="campSubject">
        <div class="campImg">
            <img class="academy_img" src="${adventures}" />
            <div class="camp-bth">
            <a class="camp_continer" href="/Kolonie/Kolonie-i-obozy-tematyczne/Kolonia-15-przygod" data-link></a>
            <div class="camp-bth-text"> znajdź swój Camp</div>
            </div>

            <a class="camp_list" href="/Kolonie/Kolonie-i-obozy-tematyczne/Kolonia-15-przygod" data-link>Kolonia 15 Przygód</a>
            </div>
        </div>


        <div class="campSubject">
        <div class="campImg">
            <img class="academy_img" src="${horse}" />
            <div class="camp-bth">
            <a class="camp_continer" href="/Kolonie/Kolonie-i-obozy-tematyczne/Kolonia-jazdy-konnej" data-link></a>
            <div class="camp-bth-text"> znajdź swój Camp</div>
            </div>

            <a class="camp_list" href="/Kolonie/Kolonie-i-obozy-tematyczne/Kolonia-jazdy-konnej" data-link>Kolonia Jazdy Konnej</a>
            </div>
        </div>

    </div>
    `
}

