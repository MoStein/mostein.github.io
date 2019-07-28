var meineKarten = [];
var computerKarten = [];
var ablageStapel = [];
var kartenArray = [];
//let cardColor: string [] = ["blue", "green","yellow","green"];
//let cartValue: number [] = [0,1,2,3,4,5,6,7,8,9]
window.onload = function () {
    document.getElementById("Stack").addEventListener("click", function () { karteZiehen; }, false);
    Austeilen();
    generateKarten();
    cardHTML();
};
function generateKarten() {
    var b1 = {
        color: "blue",
        value: 1,
        Nummer: 1,
        kartenNummer: "1"
    };
    kartenArray.push(b1);
}
var b2 = {
    color: "blue",
    value: 2,
    Nummer: 2,
    kartenNummer: "2"
};
kartenArray.push(b2);
var b3 = {
    color: "blue",
    value: 3,
    Nummer: 3,
    kartenNummer: "3"
};
kartenArray.push(b3);
var b4 = {
    color: "blue",
    value: 4,
    Nummer: 4,
    kartenNummer: "4"
};
kartenArray.push(b4);
var b5 = {
    color: "blue",
    value: 5,
    Nummer: 5,
    kartenNummer: "5"
};
kartenArray.push(b5);
var b6 = {
    color: "blue",
    value: 6,
    Nummer: 6,
    kartenNummer: "6"
};
kartenArray.push(b6);
var b7 = {
    color: "blue",
    value: 7,
    Nummer: 7,
    kartenNummer: "7"
};
kartenArray.push(b7);
var b8 = {
    color: "blue",
    value: 8,
    Nummer: 8,
    kartenNummer: "8"
};
kartenArray.push(b8);
var g1 = {
    color: "green",
    value: 1,
    Nummer: 9,
    kartenNummer: "1"
};
kartenArray.push(g1);
var g2 = {
    color: "green",
    value: 2,
    Nummer: 10,
    kartenNummer: "2"
};
kartenArray.push(g2);
var g3 = {
    color: "green",
    value: 3,
    Nummer: 11,
    kartenNummer: "3"
};
kartenArray.push(g3);
var g4 = {
    color: "green",
    value: 4,
    Nummer: 12,
    kartenNummer: "4"
};
kartenArray.push(g4);
var g5 = {
    color: "green",
    value: 5,
    Nummer: 13,
    kartenNummer: "5"
};
kartenArray.push(g5);
var g6 = {
    color: "green",
    value: 6,
    Nummer: 14,
    kartenNummer: "6"
};
kartenArray.push(g6);
var g7 = {
    color: "green",
    value: 7,
    Nummer: 15,
    kartenNummer: "7"
};
kartenArray.push(g7);
var g8 = {
    color: "green",
    value: 8,
    Nummer: 16,
    kartenNummer: "8"
};
kartenArray.push(g8);
var y1 = {
    color: "yellow",
    value: 1,
    Nummer: 17,
    kartenNummer: "1"
};
kartenArray.push(y1);
var y2 = {
    color: "yellow",
    value: 2,
    Nummer: 18,
    kartenNummer: "2"
};
kartenArray.push(y2);
var y3 = {
    color: "yellow",
    value: 3,
    Nummer: 19,
    kartenNummer: "3"
};
kartenArray.push(y3);
var y4 = {
    color: "yellow",
    value: 4,
    Nummer: 20,
    kartenNummer: "4"
};
kartenArray.push(y4);
var y5 = {
    color: "yellow",
    value: 5,
    Nummer: 21,
    kartenNummer: "5"
};
kartenArray.push(y5);
var y6 = {
    color: "yellow",
    value: 6,
    Nummer: 22,
    kartenNummer: "6"
};
kartenArray.push(y6);
var y7 = {
    color: "yellow",
    value: 7,
    Nummer: 23,
    kartenNummer: "7"
};
kartenArray.push(y7);
var y8 = {
    color: "yellow",
    value: 8,
    Nummer: 24,
    kartenNummer: "8"
};
kartenArray.push(y8);
var r1 = {
    color: "red",
    value: 1,
    Nummer: 25,
    kartenNummer: "1"
};
kartenArray.push(r1);
var r2 = {
    color: "red",
    value: 2,
    Nummer: 26,
    kartenNummer: "2"
};
kartenArray.push(r2);
var r3 = {
    color: "red",
    value: 3,
    Nummer: 27,
    kartenNummer: "3"
};
kartenArray.push(r3);
var r4 = {
    color: "red",
    value: 4,
    Nummer: 28,
    kartenNummer: "4"
};
kartenArray.push(r4);
var r5 = {
    color: "red",
    value: 5,
    Nummer: 29,
    kartenNummer: "5"
};
kartenArray.push(r5);
var r6 = {
    color: "red",
    value: 6,
    Nummer: 31,
    kartenNummer: "6"
};
kartenArray.push(r6);
var r7 = {
    color: "red",
    value: 7,
    Nummer: 32,
    kartenNummer: "7"
};
kartenArray.push(r7);
var r8 = {
    color: "red",
    value: 8,
    Nummer: 33,
    kartenNummer: "8"
};
kartenArray.push(r8);
kartenArray.sort(function (a, b) { return 0.5 - Math.random(); });
function Austeilen() {
    for (var i = 0; i < 5; i++) {
        computerKarten.push(kartenArray[0]);
        kartenArray.splice(0, 1);
        meineKarten.push(kartenArray[0]);
        kartenArray.splice(0, 1);
    }
    ablageStapel.push(kartenArray[0]);
    kartenArray.splice(0, 1);
    cardHTML();
}
function karteZiehen() {
    if (kartenArray.length > 0) {
        meineKarten.push(kartenArray[0]);
        kartenArray.splice(0, 1);
        computerSpiel();
    }
}
function karteSpielen(Karte) {
    if (meineKarten[Karte].color == ablageStapel[ablageStapel.length - 1].color ||
        meineKarten[Karte].value == ablageStapel[ablageStapel.length - 1].value) {
        ablageStapel.push(meineKarten[Karte]);
        cardHTML();
        computerSpiel();
    }
    else {
        alert("Diese Karte ist nicht spielbar");
    }
    if (meineKarten.length == 0) {
        alert("Herzlichen Glückwunsch");
    }
}
function computerSpiel() {
    var playedAlready = false;
    for (var o = 0; o < computerKarten.length; o++) {
        if (computerKarten[o].color == ablageStapel[ablageStapel.length - 1].color ||
            computerKarten[o].value == ablageStapel[ablageStapel.length - 1].value) {
            ablageStapel.push(computerKarten[o]);
            playedAlready = true;
            computerKarten.splice(o, 1);
            cardHTML();
            break;
        }
    }
    if (kartenArray.length > 0 && playedAlready == false) {
        computerKarten.push(kartenArray[0]);
        kartenArray.splice(0, 1);
        cardHTML();
    }
    if (computerKarten.length == 0) {
        alert("you lost");
    }
}
var playerKarten = "Player";
function cardHTML() {
    document.getElementById(playerKarten).innerHTML = "";
    var _loop_1 = function (i) {
        var holdingDiv_1 = document.createElement("div");
        holdingDiv_1.setAttribute("class", "Cards");
        holdingDiv_1.setAttribute("class", meineKarten[i].color + "");
        holdingDiv_1.addEventListener("click", function () { karteSpielen(i); }, false);
        document.getElementById(playerKarten).appendChild(holdingDiv_1);
        var cardValue_1 = document.createElement("p");
        cardValue_1.innerHTML = meineKarten[i].kartenNummer;
        holdingDiv_1.appendChild(cardValue_1);
    };
    for (var i = 0; i < meineKarten.length; i++) {
        _loop_1(i);
    }
    document.getElementById("Computer").innerHTML = "";
    for (var k = 0; k > computerKarten.length; k++) {
        var holdingDiv_2 = document.createElement("div");
        holdingDiv_2.setAttribute("class", "Covered");
        document.getElementById("Computer").appendChild(holdingDiv_2);
    }
    document.getElementById("CardArea").innerHTML = "";
    var holdingDiv = document.createElement("div");
    holdingDiv.setAttribute("class", ablageStapel[ablageStapel.length - 1].color + "");
    document.getElementById("CardArea").appendChild(holdingDiv);
    var cardValue = document.createElement("p");
    cardValue.innerHTML = ablageStapel[ablageStapel.length - 1].kartenNummer;
    holdingDiv.appendChild(cardValue);
}
