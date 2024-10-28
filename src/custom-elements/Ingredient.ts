export default class Ingredient extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback(){
        this.querySelector("input")?.addEventListener("change", () => {
            this.querySelector("li")?.classList.toggle("line-through");
            this.querySelector("li")?.classList.toggle("opacity-50");
        })
    }
}
customElements.define('ingredient-component', Ingredient);