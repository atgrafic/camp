import view from "./view.js";


export default class extends view {
    constructor(params) {
        super(params);
        this.setTitle("Camp | Kolonie");
    }

    async getHtml() {
    return `
    <div class="build">
    <h1>tu bedzie strona kolonia</h1>
    <p>Zajrzyj do nas później</p>
    </div>
    `;
}

}