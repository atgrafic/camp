import view from "./view.js";

import webBuild from "../css/build.scss";


export default class extends view {
    constructor(params) {
        super(params);
        this.setTitle("Camp | O nas");
    }

    async getHtml() {
    return `
    <div class="build">
   <h1>Strona w budowie</h1>
   <p>Zajrzyj do nas później</p>
   </div>
    `;
}

}