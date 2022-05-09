import view from "./view.js";

import webBuild from "../css/build.scss";

export default class extends view {
    constructor(params) {
        super(params);
        this.setTitle("Camp | Promocje");
    }

    async getHtml() {
    return `
   <h2>Strona w budowie</h2>
   <p>Zajrzyj do nas później</p>
    `;
}

}