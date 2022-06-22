import view from "./view.js";
import style from "../css/index.scss";
import campList from "../css/campList.scss";
import chooseCampMenu from "../css/chooseCamp.scss";

const json = require("../json/list.json");
const camp = json.campData;

export default class extends view {
    constructor(params) {
        super(params);
        this.campId = params.id;
        this.setTitle("Camp | twój Camp");
    }

    async getHtml() {
        console.log("sssss");
        return (
            breadCrumb(this.params.id) + campListAll(this.params.id) + tabs(this.params.id) + ` <hr class="line">`
        );
    }
}

function breadCrumb(campId) {
    let smallMenu = "";
    for (let i = 0; i < camp.length; i++) {
        if (campId === camp[i].id) {
            smallMenu += ` <div class="bg_breadcrumb">
        <div class="small_menu"></div>
        <div class="breadcrumb_menu">
            <ul class="breadcrumb">
            <li> <a class ="home_camp" href="/Camp" data-link>Home</a></li>
            <li> <a class="home_camp" href="/Kolonie" data-link>Kolonia</a></li>
                <li> <a class="position_page" href="/Kolonie/${camp[i].id}" data-link>${camp[i].city}, ${camp[i].name}</a></li>
            </ul>
        </div>
    </div>`;
        }
    }
    return smallMenu;
}

function campListAll(campId) {
    for (let i = 0; i < camp.length; i++) {
        if (campId === camp[i].id) {
            return `<div class="main-box">
                        <div class="img-box">
                            <div class="sumPhotoBig">
                                <img id="expandedImg" src="${camp[i].image[0]}">
                            </div>
                            <div class="sumPhoto">
                                <img id="campPhoto1" src="${camp[i].image[0]}">
                                <img id="campPhoto2" src="${camp[i].image[1]}">
                                <img id="campPhoto3" src="${camp[i].image[2]}">
                                <img id="campPhoto4" src="${camp[i].image[3]}">
                            </div>
                        </div>
                        <div class="sum">
                            <div class="sumDescription">
                                <h1>${camp[i].city}</h1>
                                <p>${camp[i].name}</p>
                                <p>${camp[i].description}</p>
                            </div>
                            <div class="sumPrice">
                                <p class="price">${camp[i].price}</p>
                            </div>
                        </div>
                    </div>`;
        }
    }
}

function tabs(campId) {
    for (let i = 0; i < camp.length; i++) {
        if (campId === camp[i].id) {
            return `
            <div class="main_bg ">
            <div class="tabs main_with">
    <input id="tab1" type="radio" name="tabs" checked>
    <label for="tab1">Program</label>

    <input id="tab2" type="radio" name="tabs">
    <label for="tab2">Terminy i opis ośrodka</label>

    <input id="tab3" type="radio" name="tabs">
    <label for="tab3">Warunki rezerwacji</label>

    <section id="content_1">
    <h2>${camp[i].program_title}</h2>
    <p>${camp[i].Program_description}</p>
    <h2>${camp[i].program_title_2}</h2>
    <p>${camp[i].Program_description_2}</p>
    <h2>${camp[i].program_title_3}</h2>
    <p>${camp[i].Program_description}</p>
    </section>

    <section id="content_2">
    <h2>Terminy</h2>
    <p>${camp[i].deadline[0]}</p>
    <p>${camp[i].deadline[1]}</p>
    <p>${camp[i].deadline[2]}</p>
    <h2>${camp[i].sleep_title}</h2>
    <p>${camp[i].sleep_description}</p>
    <h2>${camp[i].sleep_title_1}</h2>
    <p>${camp[i].sleep_description_1}</p>
    <h2>${camp[i].sleep_title_2}</h2>
    <p>${camp[i].sleep_description_2}</p>
    </section>
    <section id="content_3">
     <h2>Rezerwacja terminu</h2>
     <p> W celu rezerwacji prosimy o kontant telefoniczny</p>
    </section>
    </div>
    </div> `;
        }
    }
}


document.addEventListener("click", imageEvent);

function imageEvent() {
    let expandImg = document.getElementById("expandedImg");

    let campPhoto1 = document.getElementById("campPhoto1");
    let campPhoto1Src = campPhoto1.src;

    let campPhoto2 = document.getElementById("campPhoto2");
    let campPhoto2Src = campPhoto2.src;

    let campPhoto3 = document.getElementById("campPhoto3");
    let campPhoto3Src = campPhoto3.src;

    let campPhoto4 = document.getElementById("campPhoto4");
    let campPhoto4Src = campPhoto4.src;

    campPhoto1.addEventListener("click", function () {
        expandImg.src = campPhoto1Src;
    });
    campPhoto2.addEventListener("click", function () {
        expandImg.src = campPhoto2Src;
    });

    campPhoto3.addEventListener("click", function () {
        expandImg.src = campPhoto3Src;
    });
    campPhoto4.addEventListener("click", function () {
        expandImg.src = campPhoto4Src;
    });
}
