export default class RecipePreview extends HTMLElement {
    getSearchQuery() : string[] {
        return this.dataset.query ? this.dataset.query?.toLowerCase().split(" ") : ([] as string[]);
    }
}
customElements.define("recipe-preview", RecipePreview);