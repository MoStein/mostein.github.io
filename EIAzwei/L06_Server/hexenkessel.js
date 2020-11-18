var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var L04_hexenkessel;
(function (L04_hexenkessel) {
    window.addEventListener("load", hanleLoad);
    function hanleLoad(_event) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Start");
            let response = yield fetch("Data.json");
            let offer = yield response.text();
            let data = JSON.parse(offer);
            L04_hexenkessel.generateContent(data);
            let buttonEins = document.querySelector("button#saveOne");
            let buttonZwei = document.querySelector("button#saveTwo");
            let submit = document.querySelector("button#hexhex");
            buttonEins.addEventListener("click", handleChange);
            buttonZwei.addEventListener("click", handleAnotherChange);
            submit.addEventListener("click", submitTrank);
        });
    }
    function submitTrank(_event) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Submit");
            let formData = new FormData;
            let query = new URLSearchParams(formData);
            yield fetch("hexenkessel.html?" + query.toString());
            alert("Danke für deinen Zaubertrank");
        });
    }
    function handleChange(_event) {
        console.log("Change");
        let display = document.querySelector("div#display");
        display.innerHTML = "";
        let formData = new FormData(document.forms[0]);
        for (let entry of formData) {
            if (entry[1] != "") {
                display.innerHTML += entry[1] + "<br>";
            }
        }
    }
    function handleAnotherChange(_event) {
        console.log("Anweisungen");
        let display = document.querySelector("div#display");
        display.innerHTML = "";
        let formData = new FormData(document.forms[1]);
        for (let entry of formData) {
            let item = document.querySelector("[value='" + entry[1] + "']");
            if (item.getAttribute("priceG") != null) {
                let GalleonenPrice = Number(item.getAttribute("priceG"));
                let SickelPrice = Number(item.getAttribute("priceS"));
                let KnutsPrice = Number(item.getAttribute("priceK"));
                display.innerHTML += "Preis: " + GalleonenPrice.value + SickelPrice.value + KnutsPrice.value + "<br>";
            }
        }
    }
})(L04_hexenkessel || (L04_hexenkessel = {}));
//# sourceMappingURL=hexenkessel.js.map