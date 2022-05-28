"use strict";
import normalize from "./css/normalize.scss";
import style from "./css/index.scss";
import header_style from "./css/header.scss";
import home_style from "./css/home.scss";
import footer_style from "./css/footer.scss";
import webBuild from "./css/build.scss";


import header from "./views/header.js";
import home from "./views/home.js";
import chooseCamp  from "./views/chooseCamp.js";
import about from "./views/about.js";
console.log("Hello World");


const pathToRegex = (path) =>
    new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = (match) => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map((result) => result[1]);

    return Object.fromEntries(
        keys.map((key, i) => {
            return [key, values[i]];
        })
    );
};

const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/camp", view: home },
        { path: "/Kolonie", view: chooseCamp},
        { path: "/promocje", view: about},
        { path: "/Onas", view: about },
        { path: "/Kadra", view: about },
        { path: "/Dokumenty", view: about },
        { path: "/Pytania-i-odpowiedzi", view: about },
        { path: "/kontakt", view: about }

    ];

    const potentialMatches = routes.map((route) => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path)),
        };
    });

    let match = potentialMatches.find((potentialMatch) => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname],
        };
    }

    const view = new match.route.view(getParams(match));

    document.querySelector("#app").innerHTML = await view.getHtml();

};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (e) => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    router();
});