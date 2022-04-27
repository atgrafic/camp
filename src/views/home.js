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

const json = require("../json/list.json");
const campList = json.campData;

export default class extends view {
    constructor(params) {
        super(params);
        this.setTitle("Camp");
    }

    async getHtml() {
        return `<div class="baner">
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
          </div>`+
          `<div class="best">
          <h2 class="best_h1">Najczęściej wybierane</h2>
        <hr/>
          </div>`+
         `<div id='campList'>`+
            json.campData.map(campTemplate).join("") +
        `</div>`;
    }
}
let camp = json.campData.map(campTemplate).join("");
function campTemplate(camp){
    return `
    <div class="camp" id=${camp.id}>
    <a class="tab-camp" href="/kolonia/${camp.id}" data-link>
    <img class="camp-photo" src="${camp.image[0]}">
    <h2 class="camp-city">${camp.city}</h2>
    <p class="camp-name">${camp.name}</p>
    </a>
     </div>
    `;

}
document.getElementById("campList").innerHTML = camp;