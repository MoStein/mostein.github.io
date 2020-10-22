namespace uno{

    let cardQuantity = prompt("Mit wievielen Karten möchtest du spielen?", "3");
    let amount = parseInt(cardQuantity);
    
    interface cards {
        color: string;
        nums: number;
    }

    let cardColor: string [] = ["red", "blue", "green", "yellow"]; //Farbwerte
    let cardNumber: number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //Zahlenwerte
    let cardArray: cards [] = []; //alle Karten
    let myCards: cards [] = []; //meine Karten
    let compCards: cards [] = []; //Karten des Computers
    let cardDeck: cards [] = []; //Ablagestappel 
    let cardStack: cards [] = []; //Nachziehstappel 
    let myTurn: boolean; 
    let isrunning: boolean;


while (isrunning == true) {
    
        if (myTurn ==true){
        player();
    }
        else {
        computer();
    }
}

function player(){
    console.log("Das ist die Player-Funktion");
    myTurn != myTurn;
}
function computer (){
    console.log("Das ist die Computer-Funktion");
    myTurn == myTurn;
}


}