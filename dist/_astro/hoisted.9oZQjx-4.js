import{g as n}from"./utils.BogIFywA.js";import"./hoisted.C0nW4Neq.js";const s={SAVED:"saved"};class a extends HTMLElement{constructor(){super()}connectedCallback(){this.querySelector("input")?.addEventListener("change",()=>{this.querySelector("li")?.classList.toggle("line-through"),this.querySelector("li")?.classList.toggle("decoration-2"),this.querySelector("li")?.classList.toggle("decoration-main-600")})}}customElements.define("ingredient-component",a);class r extends HTMLElement{defaultValue;currentValue;unit;constructor(){super(),this.defaultValue=1,this.currentValue=1,this.unit=""}connectedCallback(){this.dataset.defaultValue&&(this.dataset.unit&&(this.unit=this.dataset.unit),this.currentValue=this.defaultValue=parseInt(this.dataset.defaultValue),this.setYieldString(),this.checkButtons()),this.querySelector("#minus-yield").addEventListener("click",()=>{this.currentValue--,this.updateScale(),this.checkButtons()}),this.querySelector("#plus-yield").addEventListener("click",()=>{this.currentValue++,this.updateScale(),this.checkButtons()})}checkButtons(){this.currentValue==1?this.querySelector("#minus-yield")?.setAttribute("disabled",""):this.querySelector("#minus-yield")?.removeAttribute("disabled"),this.currentValue==100?this.querySelector("#plus-yield")?.setAttribute("disabled",""):this.querySelector("#plus-yield")?.removeAttribute("disabled")}setYieldString(){this.querySelector("#yield").innerText=`${this.currentValue.toString()} ${this.currentValue==1?this.unit:this.unit[this.unit.length-1]=="y"?`${this.unit.slice(0,this.unit.length-1)}ies`:`${this.unit}s`}`}updateScale(){this.setYieldString(),Array.from(document.querySelectorAll("ingredient-quantity")).forEach(e=>{e.scaleValue(this.currentValue/this.defaultValue)})}}customElements.define("yield-component",r);class u extends HTMLElement{defaultValue;constructor(){super(),this.defaultValue=1}connectedCallback(){this.dataset.defaultValue&&(this.defaultValue=parseFloat(this.dataset.defaultValue),this.innerText=this.defaultValue.toString())}scaleValue(e){this.innerText=n(this.defaultValue*e,2)}}customElements.define("ingredient-quantity",u);class c extends HTMLElement{buttons;recipeId;constructor(){super(),this.recipeId="",this.buttons=[]}connectedCallback(){this.recipeId=this.dataset.recipeId??"",this.buttons=Array.from(this.querySelectorAll("button")),this.buttons[0].addEventListener("click",()=>{this.addSaved()}),this.buttons[1].addEventListener("click",()=>{this.removeSaved()});const e=window.localStorage.getItem(s.SAVED);try{e&&JSON.parse(e).includes(this.recipeId)&&this.toggleButton(!0)}catch(t){console.log(t),this.#e()}}toggleButton(e){this.buttons[0].classList.toggle("hidden",e),this.buttons[1].classList.toggle("hidden",!e)}addSaved(){let e=window.localStorage.getItem(s.SAVED),t=[];if(e)try{t=JSON.parse(e).filter(i=>i!="")??[]}catch{this.#e()}if(!t.includes(this.recipeId)){let i=JSON.stringify(t.concat(this.recipeId));window.localStorage.setItem(s.SAVED,i),this.toggleButton(!0)}}removeSaved(){let e=window.localStorage.getItem(s.SAVED);if(e)try{let t=JSON.parse(e).filter(i=>i!="");if(t.includes(this.recipeId)){let i=JSON.stringify(t.toSpliced(t.indexOf(this.recipeId),1));window.localStorage.setItem(s.SAVED,i),this.toggleButton(!1)}}catch{this.#e()}}#e(){window.localStorage.removeItem(s.SAVED)}}customElements.define("save-button",c);export{s as L};
