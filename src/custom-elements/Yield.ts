import { YIELD_MULTIPLIERS } from "../const.ts";
import IngredientQuantity from "./IngredientQuantity.ts";

export default class Yield extends HTMLElement {
    defaultValue: number;
    currentValue: number;
    unit: string;
    maxMultiplier: number;

    constructor(){
        super();
        this.defaultValue = 1;
        this.currentValue = 1;
        this.unit = "";
        this.maxMultiplier = 10;
    }
    
    connectedCallback(){
        if (this.dataset.defaultValue){
            if (this.dataset.unit){
                this.unit = this.dataset.unit;
            }
            
            this.currentValue = this.defaultValue = parseInt(this.dataset.defaultValue);
            if (this.defaultValue > 5){
                this.maxMultiplier = 4;
            }
            this.setYieldString();
            this.checkButtons();
        }
        (this.querySelector("#minus-yield") as HTMLElement).addEventListener("pointerdown", () => {
            this.onYieldChange(false);
        });
        
        (this.querySelector("#plus-yield") as HTMLElement).addEventListener("pointerdown", () => {
            this.onYieldChange(true);
        });
        
        YIELD_MULTIPLIERS.forEach((multiplier) => {
            this.querySelector(`#${multiplier.key}`)?.addEventListener("click", this.setMultiplier.bind(this, multiplier.value));
        });
    }

    onYieldChange(isIncrement: boolean) {
        // include to prevent selection on touchscreen
        document.body.classList.add("select-none");
        this.adjustYield(isIncrement);
        const startTime = (new Date()).getTime();
        const interval = setInterval(() => {
            const currentTime = (new Date()).getTime();
            if (!this.adjustYield(isIncrement, (currentTime - startTime) > 7000 ? 25 : (currentTime - startTime) > 3000 ? 10 : 1)){
                clearInterval(interval);
            }
        }, 200);

        document.body.addEventListener("pointerup", () => {
            document.body.classList.remove("select-none");
            clearInterval(interval);
        }, { once: true });
    }

    adjustYield(isIncrement: boolean, interval?: number): boolean{
        let isInBounds = true;
        if (isIncrement){
            if (this.currentValue < this.defaultValue * this.maxMultiplier){
                this.currentValue = Math.min(Math.floor(this.currentValue + (interval ?? 1)), this.defaultValue * this.maxMultiplier);
            } else {
                isInBounds = false;
            }
        } else {
            if (this.currentValue > 1){
                this.currentValue = Math.max(Math.floor(this.currentValue - (interval ?? 1)), 1);
            } else {
                isInBounds = false;
            }
        }
        this.updateScale();
        this.checkButtons();

        return isInBounds;
    }

    setMultiplier(multiplier: number) {
        this.currentValue = this.defaultValue * multiplier;
        this.updateScale();
        this.checkButtons();
    }

    checkButtons() {
        if (this.currentValue <= 1) {
            this.querySelector("#minus-yield")?.setAttribute("disabled", "");
        } else {
            this.querySelector("#minus-yield")?.removeAttribute("disabled");
        }
        
        if (this.currentValue >= this.defaultValue * this.maxMultiplier) {
            this.querySelector("#plus-yield")?.setAttribute("disabled", "");
        } else {
            this.querySelector("#plus-yield")?.removeAttribute("disabled");
        }
    }

    setYieldString(){
        (this.querySelector("#yield") as HTMLElement).innerText = 
            `${this.currentValue.toString()} ${this.currentValue <= 1 
                ? this.unit : 
                (this.unit[this.unit.length-1] == "y" ? 
                    `${this.unit.slice(0, this.unit.length-1)}ies` : 
                    `${this.unit}s`)}`;
    }

    updateScale(){
        this.setYieldString();
        (Array.from(document.querySelectorAll("ingredient-quantity")) as IngredientQuantity[]).forEach((count: IngredientQuantity) => {
            count.scaleValue(this.currentValue/this.defaultValue);
        })
    }   
}
customElements.define('yield-component', Yield);