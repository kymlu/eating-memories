import { getFloatString, preventNonNumeric } from "../utils.ts";
import SubstituteComponent from "./SubstituteComponent.ts";

export default class ResultComponent extends HTMLElement {
    connectedCallback(){
        this.querySelector("input")?.addEventListener("input", () => {
            let resultValue = parseFloat(this.querySelector("input")?.value ?? "1");
            let allSubstitutes = this.parentElement?.querySelectorAll("substitute-component");
            if (allSubstitutes){
                (Array.from(allSubstitutes) as SubstituteComponent[]).forEach((substitute: SubstituteComponent) => {
                    substitute.changeValue(resultValue);
                });
            }
        });
        this.querySelector("input")?.addEventListener("keypress", preventNonNumeric);
    }

    changeValue(newResult: number){
        let input = this.querySelector("input");
        if (input) {
            input.value = getFloatString(newResult, 2);
        }
    }
}
customElements.define("result-component", ResultComponent);