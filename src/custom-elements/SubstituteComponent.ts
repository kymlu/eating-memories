import { getFloatString, preventNonNumeric } from "../utils.ts";
import type ResultComponent from "./ResultComponent.ts";

export default class SubstituteComponent extends HTMLElement {
    proportion: number;
    name: string;
    constructor(){
        super();
        this.proportion = 1;
        this.name = "";
    }

    connectedCallback(){
        if (this.dataset.proportion){
            this.proportion = parseFloat(this.dataset.proportion) ?? 1;
        }
        if (this.dataset.name) {
            this.name = this.dataset.name;
        }
        this.querySelector("input")?.addEventListener("input", () => {this.onInput()});
        this.querySelector("input")?.addEventListener("keypress", preventNonNumeric);
    }

    onInput(){
        let resultValue = parseFloat(this.querySelector("input")?.value ?? "1") / this.proportion;
        (this.parentElement?.querySelector("result-component") as ResultComponent)?.changeValue(resultValue);
        let allSubstitutes = this.parentElement?.querySelectorAll("substitute-component");
        if (allSubstitutes){
            (Array.from(allSubstitutes) as SubstituteComponent[]).forEach((substitute: SubstituteComponent) => {
                if (substitute.name != this.name){
                    substitute.changeValue(resultValue);
                }
            });
        }
    }

    changeValue(newResult: number){
        let input = this.querySelector("input");
        if (input) {
            input.value = getFloatString(newResult * this.proportion, 2);
        }
    }
}

customElements.define("substitute-component", SubstituteComponent);