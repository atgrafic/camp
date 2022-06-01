import view from "./view.js";
import style from "../css/index.scss";
import chooseCampMenu from "../css/chooseCamp.scss";

export default class extends view {
    constructor(params) {
        super(params);
        this.setTitle("Camp | Kolonie");
    }

    async getHtml() {
        return `
 <div class="bg_breadcrumb">
        <div class="small_menu"></div>
        <div class="breadcrumb_menu">
            <ul class="breadcrumb">
                 <li> <a class ="home_camp" href="/Camp" data-link>Home</a></li>
                 <li> <a class="position_page" href="/Kolonie" data-link>Kolonia</a></li>
            </ul>
        </div>
    </div>
    <!--4 buttony i propozycja-->
    <div class="main_bg">
    <div class="main_position">
    <div class="main_postion_left">
    <div class="choose_button">
    <div class="camp_all">
    <a href="/#" data-link>
    <h2 class="choose_button_all">Wszystkie <br/> obozy i kolonie</h2>
    </a>
    </div>
    <div class="camp_abroad">
    <a href="/#" data-link>
    <h2 class="choose_button_abroad">Obozy <br/> zagraniczne</h2>
    </a>
    </div>
    <div class="camp_sea">
    <a href="/#" data-link>
    <h2 class="choose_button_sea">Kolonie <br/> nad morzem</h2>
    </a>
    </div>
    <div class="camp_mountains">
    <a href="/#" data-link>
    <h2 class="choose_button_mountains">Klonie <br/> w górach</h2>
    </a>
    </div>
    </div>
    <!--lista koloni-->
    <!--paginacja-->


    </div>
    <div class="main_postion_right">
    <div class="camp_subject">
    <h2>Kolonie i Obozy tematyczne</h2>
    <div class="list_sub">
    <li>Akademia Relaksu</li>
    <li>Akademia Tańca</li>
    <li>Akademia Malarstwa</li>
    <li>Akademia Wokalu</li>
    <li>Akademia Sportu</li>
    <li>kolonia Survivalowa</li>
    <li>Kolonie 15 Przygód</li>
    <li>Akademia Jazdy konnej</li>
    <ul>
    </ul>
    </div>
    </div>
    </div>
    </div>
    </div>
    `;
    }
}
