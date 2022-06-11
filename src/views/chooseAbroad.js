import view from "./view.js";
import style from "../css/index.scss";
import chooseCampMenu from "../css/chooseCamp.scss";
// import chooseAbroad from "../css/chooseAbroad.scss";

export default class extends view {
    constructor(params) {
        super(params);
        this.setTitle("Camp | Obozy-zagraniczne");
    }

    async getHtml() {
        return `
 <div class="bg_breadcrumb">
        <div class="small_menu"></div>
        <div class="breadcrumb_menu">
            <ul class="breadcrumb">
                 <li> <a class ="home_camp" href="/Camp" data-link>Home</a></li>
                 <li> <a class="home_camp" href="/Kolonie" data-link>Kolonia</a></li>
                 <li> <a class="position_page" href="/Obozy-zagraniczne" data-link>Obozy zagraniczne</a></li>
            </ul>
        </div>
    </div>
    <!--4 buttony i propozycja-->
    <div class="main_bg">
    <div class="main_position">
    <div class="main_postion_left">
    <div class="choose_button">
    <div class="camp_all">
    <a class="choose_button_all" href="/Kolonie" data-link>
    </a>
    </div>
    <div class="camp_abroad">
    <a class="choose_button_abroad" href="/Obozy-zagraniczne" data-link>
    </a>
    </div>
    <div class="camp_sea">
    <a class="choose_button_sea" href="/Kolonie-nad-morzem" data-link>

    </a>
    </div>
    <div class="camp_mountains">
    <a class="choose_button_mountains" href="/Kolonie-w-gorach" data-link>

    </a>
    </div>
    </div>
    <!--lista koloni-->
    <div class="list-camp">`
    + chooseAbroadCamp() +

    `
    </div>
    <!--paginacja-->
    <div class="paginacion">
    <a href="#" id="btn_prev"><i class='bx bxs-chevron-left' ></i></a>
    <ul id="pages"></ul>
    <a href="#" id="btn_next"><i class='bx bxs-chevron-right'></i></a>
</div>
    </div>
    <!--lista tematyczna-->
    <div class="main_postion_right">
    <div class="camp_subject">
    <h2>Kolonie i Obozy </br>tematyczne</h2>
    <div class="list_sub">
    <ul class="list_sub_ul">
    <li><a href="/#" data-link>Akademia Relaksu</a></li>
    <li><a href="/#" data-link>Akademia Tańca</a></li>
    <li><a href="/#" data-link>Akademia Malarstwa</a></li>
    <li><a href="/#" data-link>Akademia Wokalu</a></li>
    <li><a href="/#" data-link>Akademia Sportu</a></li>
    <li><a href="/#" data-link>kolonia Survivalowa</a></li>
    <li><a href="/#" data-link>Kolonie 15 Przygód</a></li>
    <li><a href="/#" data-link>Akademia Jazdy konnej</a></li>
    </ul>
    </div>
    </div>
    </div>
    </div>
    </div>
    `;
    }
}

const json = require("../json/list.json");
const camp = json.campData;

function chooseAbroadCamp() {
    let listCampAbroad = "";

    for (let i = 0; i <camp.length; i++) {
      if(camp[i].place === "world"){
        listCampAbroad += ` <div class="camp-choose" id=${camp[i].id}>
        <a class="tab-camp-choose" href="/kolonia/${camp[i].id}" data-link>
        <img class="camp-choose-photo" src="${camp[i].image[0]}">
        <div class="bth-camp">
          <div class="bth-camp-text">zobacz szczegóły</div>
          </div>
        <div>
        <h2 class="camp-choose-city">${camp[i].city}</h2>
        <p class="camp-choose-name">${camp[i].name}</p>
        <h2 class="camp-choose-price">${camp[i].price}</h2>

        </div>
        </a>
         </div>`;
    }

}
return listCampAbroad;
}


