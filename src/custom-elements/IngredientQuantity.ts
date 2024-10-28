import { getFraction } from "../utils.ts";

export default class IngredientQuantity extends HTMLElement {
    defaultValue?: number;
    unit?: string;
    constructor(){
        super();
    }

    connectedCallback(){
        if (this.dataset.defaultValue){
            this.defaultValue = parseFloat(this.dataset.defaultValue);
        }
        if (this.dataset.unit){
            this.unit = this.dataset.unit;
        }
        this.scaleValue(1);
    }

    setValues(newDefault?: number, newUnit?: string){
        if(newDefault == undefined || (newDefault && newDefault > 0)) {
            this.defaultValue = newDefault;
        }
        this.unit = newUnit;
        this.scaleValue(1);
    }
    
    scaleValue(scale: number){
        this.innerText = [this.defaultValue ? getFraction(this.defaultValue * scale): undefined, this.unit].join(" ");
    }
}

customElements.define('ingredient-quantity', IngredientQuantity);