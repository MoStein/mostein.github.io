var L04_hexenkessel;
(function (L04_hexenkessel) {
    window.addEventListener("load", hanleLoad);
    function hanleLoad(_event) {
        console.log("Start");
        generateContent(data);
        var buttonEins = document.querySelector("button#safeOne");
        var buttonZwei = document.querySelector("button#safeTwo");
        var button = document.querySelector("button#hexhex");
        buttonEins.addEventListener("click", handleChange);
        buttonZwei.addEventListener("click", handleAnotherChange);
        button.addEventListener("click", submitTrank);
    }
    function handleChange(_event) {
        console.log("Change");
        var display = document.querySelector("div#display");
        display.innerHTML = "";
        var formData = new FormData(document.forms[0]);
        for (var _i = 0, formData_1 = formData; _i < formData_1.length; _i++) {
            var entry = formData_1[_i];
            if (entry[1] != "") {
                display.innerHTML += entry[1] + "<br>";
            }
        }
    }
    function handleAnotherChange(_event) {
        console.log("Anweisungen");
        var display = document.querySelector("div#display");
        display.innerHTML = "";
        var formData = new FormData(document.forms[1]);
        for (var _i = 0, formData_2 = formData; _i < formData_2.length; _i++) {
            var entry = formData_2[_i];
            var item = document.querySelector("[value='" + entry[1] + "']");
            var itemPrice = Number(item.getAttribute("price"));
            display.innerHTML += "Preis: " + itemPrice.value + "<br>";
        }
    }
    function submitTrank(_event) {
        console.log("Submit");
        var reset = document.querySelector("form#formEins");
        reset.innerHTML = "";
        document.write("Danke für deinen Zaubertrank");
    }
})(L04_hexenkessel || (L04_hexenkessel = {}));
