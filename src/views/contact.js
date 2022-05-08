import view from "./view.js";


export default class extends view {
    constructor(params) {
        super(params);
        this.setTitle("Camp | Kontakt");
    }

    async getHtml() {
    return `
   <h2>Strona w budowie</h2>
   <p>Zajrzyj do nas później</p>
    `;
}

}