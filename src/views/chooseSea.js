import view from "./view.js";
import style from "../css/index.scss";
import chooseCampMenu from "../css/chooseCamp.scss";
import home from "../css/home.scss";
// import chooseAbroad from "../css/chooseAbroad.scss";

export default class extends view {
    constructor(params) {
        super(params);
        this.setTitle("Camp | Kolonie-nad-morzem");
    }

    async getHtml() {
        scrollToTop();
        return `
 <div class="bg_breadcrumb">
        <div class="small_menu"></div>
        <div class="breadcrumb_menu">
            <ul class="breadcrumb">
                 <li> <a class ="home_camp" href="/Camp" data-link>Home</a></li>
                 <li> <a class="home_camp" href="/Kolonie" data-link>Kolonia</a></li>
                 <li> <a class="position_page" href="/Kolonie-nad-morzem" data-link>Kolonie nad morzem</a></li>
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
    <a class="choose_button_abroad" href="/Kolonie/Obozy-zagraniczne" data-link>
    </a>
    </div>
    <div class="camp_sea_active">
    <a class="choose_button_sea" href="/Kolonie/Kolonie-nad-morzem" data-link>

    </a>
    </div>
    <div class="camp_mountains">
    <a class="choose_button_mountains" href="/Kolonie/Kolonie-w-gorach" data-link>

    </a>
    </div>
    </div>
    <!--lista koloni-->
    <div id="list-camp">`
    + chooseSeaCamp() +

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
    <li><a href="/Kolonie/Kolonie-i-obozy-tematyczne/Akademia-relaksu" data-link>Akademia Relaksu</a></li>
    <li><a href="/Kolonie/Kolonie-i-obozy-tematyczne/Akademia-tanca" data-link>Akademia Tańca</a></li>
    <li><a href="/Kolonie/Kolonie-i-obozy-tematyczne/Akademia-malarstwa" data-link>Akademia Malarstwa</a></li>
    <li><a href="/Kolonie/Kolonie-i-obozy-tematyczne/Akademia-wokalu" data-link>Akademia Wokalu</a></li>
    <li><a href="/Kolonie/Kolonie-i-obozy-tematyczne/Akademia-sportu" data-link>Akademia Sportu</a></li>
    <li><a href="/Kolonie/Kolonie-i-obozy-tematyczne/Kolonia-survalowa"data-link>kolonia Survivalowa</a></li>
    <li><a href="/Kolonie/Kolonie-i-obozy-tematyczne/Kolonia-15-przygod" data-link>Kolonie 15 Przygód</a></li>
    <li><a href="/Kolonie/Kolonie-i-obozy-tematyczne/Kolonia-jazdy-konnej" data-link>Akademia Jazdy konnej</a></li>
    </ul>
    </div>
    </div>
    </div>
    </div>
    </div>
    <hr class="line">
    `;
    }
}

const json = require("../json/list.json");
const camp = json.campData;

function chooseSeaCamp() {
    let  listSea = "";

    for (let i = 0; i <camp.length; i++) {
      if(camp[i].place === "sea"){
        listSea += ` <div class="camp-choose" id=${camp[i].id}>
        <img class="academy_img"  src="${camp[i].image[0]}">

        <div class="camp-bth">
        <a class="camp_continer"  href="/Kolonie/${camp[i].id}" data-link></a>
        <div class="camp-bth-text">zobacz szczegóły</div>
        </div>
        <div class="camp-destription">
        <a class="camp-city" href="/Kolonie/${camp[i].id}" data-link>${camp[i].city} </a>
        <a class="camp-name" href="/Kolonie/${camp[i].id}" data-link>${camp[i].name} </a>
        <a class="camp-choose-price" href="/Kolonie/${camp[i].id}" data-link>${camp[i].price} </a>
        </div>
         </div>`;
    }

}
return listSea;
}


//poczatek strony -load
let scroll = document.getElementById("scroll");
function scrollToTop() {
    scroll.scrollIntoView(true);
  }

