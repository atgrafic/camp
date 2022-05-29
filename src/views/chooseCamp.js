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

    `;
    }
}
