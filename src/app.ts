/*
*File: index.html
*Author: Hosszú Tamás
*Copyright: 2024, Hosszú Tamás
*Group: Szoft I/1/N
*Date: 2024-05-30
*Github: https://github.com/hosszutamas/
*Licenc: GNU GPL
*/
class Ellipszoid {
    aInput?:HTMLInputElement | null;
    bInput?:HTMLInputElement | null;
    cInput?:HTMLInputElement | null;
    volumeInput?:HTMLInputElement | null;
    calcButton?:HTMLButtonElement | null;

    constructor() {
        this.bindHtml();
        this.handleEvent();
    }

    bindHtml() {
        this.aInput = document.querySelector("#a");
        this.bInput = document.querySelector("#b");
        this.cInput = document.querySelector("#c");
        this.volumeInput = document.querySelector("#volume");
        this.calcButton = document.querySelector("#calcButton");
    }

    handleEvent() {
        this.calcButton?.addEventListener('click', () => {
            this.startCalc();
        });
    }

    startCalc() {
        const a = Number(this.aInput?.value);
        const b = Number(this.bInput?.value);
        const c = Number(this.cInput?.value);
        const volume = this.calcVolume(a,b,c);
        this.renderResult(volume);
    }
    calcVolume(a:number, b:number, c:number):number{
        return (4/3)*Math.PI*a*b*c
    }
    renderResult(volume:number) {
        if(this.volumeInput) {
            this.volumeInput.value = String(volume);
        }
}}