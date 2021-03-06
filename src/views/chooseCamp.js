import view from "./view.js";
import style from "../css/index.scss";
import home from "../css/home.scss";
import chooseCampMenu from "../css/chooseCamp.scss";

const jsonSubject = require("../json/subject.json");
const campSubject = jsonSubject.subject;

const json = require("../json/list.json");
const camp = json.campData;
export default class extends view {
    constructor(params) {
        super(params);

        this.setTitle("Camp | Kolonie");
    }

    async getHtml() {
        scrollToTop();
        return (
            `
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

    <div id="box" class="camp_all_active">
    <a class="choose_button_all" href="/Kolonie" data-link>
    </a>
    </div>
    <div class="camp_abroad">
    <a class="choose_button_abroad" href="/Kolonie/Obozy-zagraniczne" data-link>
    </a>
    </div>
    <div class="camp_sea">
    <a class="choose_button_sea" href="/Kolonie/Kolonie-nad-morzem" data-link>
    </a>

    </div>
    <div class="camp_mountains">
    <a class="choose_button_mountains" href="/Kolonie/Kolonie-w-gorach" data-link>
    </a>
    </div>
    </div>
    <!--lista koloni-->
    <div id ="list-camp">` +
            pagePaginationStart() +
            `</div>

    <!--paginacja i lista koloni-->

    <div id="pagination">
    <ul id="pages">
    ` +
            butonNumber() +
            `
    </ul>
    </div>

    </div>
    <!--lista tematyczna-->
    <div class="main_postion_right">
    <div class="camp_subject">
    <h2>Kolonie i Obozy </br>tematyczne</h2>
    <div class="list_sub">
    <ul class="list_sub_ul">
    <li><a href="/Kolonie/Kolonie-i-obozy-tematyczne/Akademia-relaksu" data-link>Akademia Relaksu</a></li>
    <li><a href="/Kolonie/Kolonie-i-obozy-tematyczne/Akademia-tanca" data-link>Akademia Ta??ca</a></li>
    <li><a href="/Kolonie/Kolonie-i-obozy-tematyczne/Akademia-malarstwa" data-link>Akademia Malarstwa</a></li>
    <li><a href="/Kolonie/Kolonie-i-obozy-tematyczne/Akademia-wokalu" data-link>Akademia Wokalu</a></li>
    <li><a href="/Kolonie/Kolonie-i-obozy-tematyczne/Akademia-sportu" data-link>Akademia Sportu</a></li>
    <li><a href="/Kolonie/Kolonie-i-obozy-tematyczne/Kolonia-survalowa"data-link>kolonia Survivalowa</a></li>
    <li><a href="/Kolonie/Kolonie-i-obozy-tematyczne/Kolonia-15-przygod" data-link>Kolonie 15 Przyg??d</a></li>
    <li><a href="/Kolonie/Kolonie-i-obozy-tematyczne/Kolonia-jazdy-konnej" data-link>Akademia Jazdy konnej</a></li>
    </ul>
    </div>
    </div>
    </div>
    </div>
    </div>
    <hr class="line">
    `
        );
    }
}
//poczatek strony -load
let scroll = document.getElementById("scroll");
function scrollToTop() {
    scroll.scrollIntoView(true);
}


//pagination

let perPage = 9;
let pages = Math.ceil(camp.length / perPage);

console.log(Math.ceil(camp.length / perPage));

//  number page pagination
function butonNumber() {
    let butonNumber = "";

    for (let i = 0; i < pages; i++) {
        let numberPage = i + 1;
        butonNumber +=
            ` <li id= "numberPage${numberPage}" class= "bxs-chevron">` + numberPage + `</li>`;
    }
    return butonNumber;
}

function pagePaginationStart() {
    let page_1 = "";

    for (let i = 0; i < 9; i++) {
        if (camp[i].camp === "all") {
            page_1 += ` <div class="camp-choose" id=${camp[i].id}>
        <img class="academy_img"  src="${camp[i].image[0]}">

        <div class="camp-bth">
        <a class="camp_continer"  href="/Kolonie/${camp[i].id}" data-link></a>
        <div class="camp-bth-text">zobacz szczeg????y</div>
        </div>
        <div class="camp-destription">
        <a class="camp-city" href="/Kolonie/${camp[i].id}" data-link>${camp[i].city} </a>
        <a class="camp-name" href="/Kolonie/${camp[i].id}" data-link>${camp[i].name} </a>
        <a class="camp-choose-price" href="/Kolonie/${camp[i].id}" data-link>${camp[i].price} </a>
        </div>
         </div>`;
        }
    }

    return page_1;
}

function pagePagination() {
    // let capmpAll = document.querySelector(".camp_all");
    let page_1 = "";

    for (let i = 0; i < 9; i++) {
        if (camp[i].camp === "all") {
            page_1 += ` <div class="camp-choose" id=${camp[i].id}>
        <img class="academy_img"  src="${camp[i].image[0]}">

        <div class="camp-bth">
        <a class="camp_continer"  href="/Kolonie/${camp[i].id}" data-link></a>
        <div class="camp-bth-text">zobacz szczeg????y</div>
        </div>
        <div class="camp-destription">
        <a class="camp-city" href="/Kolonie/${camp[i].id}" data-link>${camp[i].city} </a>
        <a class="camp-name" href="/Kolonie/${camp[i].id}" data-link>${camp[i].name} </a>
        <a class="camp-choose-price" href="/Kolonie/${camp[i].id}" data-link>${camp[i].price} </a>
        </div>
         </div>`;
        }
    }
    document.getElementById("list-camp").innerHTML = page_1;
    document.getElementById("numberPage1").classList.add("active");
    document.getElementById("numberPage2").classList.remove("active");
    document.getElementById("numberPage3").classList.remove("active");
    document.getElementById("numberPage4").classList.remove("active");
}

function pagePagination1() {
    // let capmpAll = document.querySelector(".camp_all");
    let page_1 = "";

    for (let i = 0; i < camp.length; i++) {
        if (camp[i].id > 9 && camp[i].id <= 18) {
            page_1 += ` <div class="camp-choose" id=${camp[i].id}>
        <img class="academy_img"  src="${camp[i].image[0]}">

        <div class="camp-bth">
        <a class="camp_continer"  href="/Kolonie/${camp[i].id}" data-link></a>
        <div class="camp-bth-text">zobacz szczeg????y</div>
        </div>
        <div class="camp-destription">
        <a class="camp-city" href="/Kolonie/${camp[i].id}" data-link>${camp[i].city} </a>
        <a class="camp-name" href="/Kolonie/${camp[i].id}" data-link>${camp[i].name} </a>
        <a class="camp-choose-price" href="/Kolonie/${camp[i].id}" data-link>${camp[i].price} </a>
        </div>
         </div>`;
        }
    }
    document.getElementById("list-camp").innerHTML = page_1;
    document.getElementById("numberPage2").classList.add("active");
    document.getElementById("numberPage1").classList.remove("active");
    document.getElementById("numberPage3").classList.remove("active");
    document.getElementById("numberPage4").classList.remove("active");
}

function pagePagination2() {
    // let capmpAll = document.querySelector(".camp_all");
    let page_1 = "";

    for (let i = 0; i < camp.length; i++) {
        if (camp[i].id > 18 && camp[i].id <= 27) {
            page_1 += ` <div class="camp-choose" id=${camp[i].id}>
        <img class="academy_img"  src="${camp[i].image[0]}">

        <div class="camp-bth">
        <a class="camp_continer"  href="/Kolonie/${camp[i].id}" data-link></a>
        <div class="camp-bth-text">zobacz szczeg????y</div>
        </div>
        <div class="camp-destription">
        <a class="camp-city" href="/Kolonie/${camp[i].id}" data-link>${camp[i].city} </a>
        <a class="camp-name" href="/Kolonie/${camp[i].id}" data-link>${camp[i].name} </a>
        <a class="camp-choose-price" href="/Kolonie/${camp[i].id}" data-link>${camp[i].price} </a>
        </div>
         </div>`;
        }
    }
    document.getElementById("list-camp").innerHTML = page_1;
    document.getElementById("numberPage3").classList.add("active");
    document.getElementById("numberPage1").classList.remove("active");
    document.getElementById("numberPage2").classList.remove("active");
    document.getElementById("numberPage4").classList.remove("active");
}

function pagePagination3() {
    // let capmpAll = document.querySelector(".camp_all");
    let page_1 = "";

    for (let i = 0; i < camp.length; i++) {
        if (camp[i].id > 27) {
            page_1 += ` <div class="camp-choose" id=${camp[i].id}>
        <img class="academy_img"  src="${camp[i].image[0]}">

        <div class="camp-bth">
        <a class="camp_continer"  href="/Kolonie/${camp[i].id}" data-link></a>
        <div class="camp-bth-text">zobacz szczeg????y</div>
        </div>
        <div class="camp-destription">
        <a class="camp-city" href="/Kolonie/${camp[i].id}" data-link>${camp[i].city} </a>
        <a class="camp-name" href="/Kolonie/${camp[i].id}" data-link>${camp[i].name} </a>
        <a class="camp-choose-price" href="/Kolonie/${camp[i].id}" data-link>${camp[i].price} </a>
        </div>
         </div>`;
        }
    }
    document.getElementById("list-camp").innerHTML = page_1;
    document.getElementById("numberPage4").classList.add("active");
    document.getElementById("numberPage1").classList.remove("active");
    document.getElementById("numberPage2").classList.remove("active");
    document.getElementById("numberPage3").classList.remove("active");
}

document.addEventListener("click", paginationEvent);

function paginationEvent() {
    let number1 = document.getElementById("numberPage1");
    let number2 = document.getElementById("numberPage2");
    let number3 = document.getElementById("numberPage3");
    let number4 = document.getElementById("numberPage4");

    number1.addEventListener("click", pagePagination);
    number2.addEventListener("click", pagePagination1);
    number3.addEventListener("click", pagePagination2);
    number4.addEventListener("click", pagePagination3);
}
