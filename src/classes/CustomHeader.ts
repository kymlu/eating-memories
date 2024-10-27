export default class SectionHeader extends HTMLElement {
    connectedCallback() {
        if (this.dataset.startOpen === "true"){
            this.toggleContents();
        }

        this.addEventListener("click", () => {
            this.toggleContents();
        })
    }

    /**
     * Expands/collapses the contents of the section.
     * @param isExpanded If not null, true if the contents are forceably expanded, or false if collapsed.
     */
    toggleContents(isExpanded?: boolean){
        Array.from(this.querySelectorAll("span")).forEach((icon) => {
            if (icon.dataset.id == "expand"){
                icon.classList.toggle("hidden", isExpanded == null ? undefined : isExpanded);
            } else {
                icon.classList.toggle("hidden", isExpanded == null ? undefined: !isExpanded);
            }
        });
        this.parentElement?.querySelector("div")?.classList.toggle("hidden", isExpanded == null ? undefined: !isExpanded);
    }
}
customElements.define("section-header", SectionHeader);