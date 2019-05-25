console.log("Konsolen-Test");
window.onload = function name() {
    console.log("Schüler");
    document.getElementById("ButtonA").addEventListener("click", ChangeButton);
    console.log("Erdbeeren");
    document.getElementById("ButtonB").addEventListener("click", BadButton);
    console.log("You could click here");
    document.getElementById("ButtonC").addEventListener("click", UselessButton);
    ChangeClass();
    addElement();
    console.log("Ich");
};
function ChangeButton() {
    console.log("guter Schüler");
    document.getElementById("ButtonA").innerHTML = "Trés Bien";
}
/*F*ckin' did it*/
function BadButton() {
    console.log("Keine Erdbeeren für dich");
    document.getElementById("ButtonB").innerHTML = "Boooooooooooooooooooooo!";
}
function UselessButton() {
    console.log("really");
    document.getElementById("ButtonC").innerHTML = "Was it worth it?";
}
function ChangeClass() {
    document.getElementById("Button1").className = "don'tclickme";
}
let gedöhns = "TypeScript"; /*let.variablename:typ="screwthis"*/
console.log(gedöhns);
let number1 = 14;
console.log(number1);
let number2 = 26;
console.log(number2);
console.log(number1 + number2);
function addElement() {
    let htmlelement = document.createElement("p");
    let htmlelement2 = document.getElementById("Button3");
    htmlelement.innerHTML = "Döp döp döp dödödöpdöpdöp";
}
function Ich() {
    var moritz = "moritz";
    moritz = "Stein";
    return moritz;
}
//# sourceMappingURL=script.js.map