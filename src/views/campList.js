import view from "./view.js";
import style from "../css/index.scss";
import campList from "../css/campList.scss";
import chooseCampMenu from "../css/chooseCamp.scss";


const json = require("../json/list.json");
const camp = json.campData;

export default class extends view {
    constructor(params) {
        super(params);
        this.setTitle("Camp | twój Camp");
    }

    async getHtml() {
     console.log('sssss');


    }
}

// function breadCrumb(){

// let smallMenu = ""
// for(let i= 0; i <camp.length; i++){

// smallMenu+=  ` <div class="bg_breadcrumb">
//         <div class="small_menu"></div>
//         <div class="breadcrumb_menu">
//             <ul class="breadcrumb">
//             <li> <a class ="home_camp" href="/Camp" data-link>Home</a></li>
//             <li> <a class="home_camp" href="/Kolonie" data-link>Kolonia</a></li>
//             <li> <a class="position_page" href="/Kolonie/${camp[i].id}" data-link>dddddd</a></li>
//             </ul>
//         </div>
//     </div>`
// }
// return smallMenu
// }