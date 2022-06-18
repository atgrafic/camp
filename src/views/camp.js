import style from "../css/index.scss";
import style from "../css/chooseCamp.scss";
import view from "./view.js";


let campDivAll =  document.querySelector(".choose_button .camp_all");
let campDivAbroad =  document.querySelector(".camp_abroad");
let campDivSea =  document.querySelector(".camp_sea");
let campDivMountains =  document.querySelector(".camp_mountains");

let campAll =  document.querySelector(".choose_button_all");
let campAbroad =  document.querySelector(".choose_button_abroad");
let campSea =  document.querySelector(".choose_button_sea");
let campMountains =  document.querySelector(".choose_button_mountains");

let color_secend = "#f990ae";
let color_secend_outline = "#f990ae solid 5px";

campAll.addEventListener("click", () =>{
    console.log("halo camp");
    // campDivAll.style.background = color_secend;
    // campDivAll.style.outline= color_secend_outline;
});