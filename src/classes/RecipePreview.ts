export default class RecipePreview extends HTMLElement {
    getSearchQuery() {
        return this.dataset.query;
    }
}
customElements.define("recipe-preview", RecipePreview);