var uno;
(function (uno) {
    var cardQuantity = prompt("Mit wievielen Karten möchtest du spielen?", "3");
    var amount = parseInt(cardQuantity);
    var cardColor = ["red", "blue", "green", "yellow"]; //Farbwerte
    var cardNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //Zahlenwerte
    var cardArray = []; //alle Karten
    var myCards = []; //meine Karten
    var compCards = []; //Karten des Computers
    var cardDeck = []; //Ablagestappel 
    var cardStack = []; //Nachziehstappel 
    var myTurn;
    var isrunning;
    while (isrunning == true) {
        if (myTurn == true) {
            player();
        }
        else {
            computer();
        }
    }
    function player() {
        console.log("Das ist die Player-Funktion");
        myTurn != myTurn;
    }
    function computer() {
        console.log("Das ist die Computer-Funktion");
        myTurn == myTurn;
    }
})(uno || (uno = {}));
