var Popup;
(function (Popup) {
    var person = prompt("Trag deinen Namen bitte ein");
    if (person != null) {
        document.getElementById("zeug").innerHTML = "Hallo" + person + "Willkommen auf dieser Seite.";
    }
})(Popup || (Popup = {}));
