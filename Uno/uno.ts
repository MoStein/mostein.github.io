interface Karten {
kartenFarbe: string [];
kartenNummer: number;

}


let meineKarten: Karten [] = [];
let computerKarten: Karten [] = [];
let ablageStapel: Karten [] = [];
let kartenArray: Karten [] = [];

window.onload=function(){
document.getElementById("Stack").addEventListener("click",function(){karteZiehen}, false);
Austeilen();
}

function generateKarten() :any {
    let value :number;
    let color :string;
    for(let i = 1; i <=9; i++){
        for(let j=0; j < 4; j++){
        value=i
            switch(j){
                case 0:
                color = "red";
                break;
                case 1:
                color = "blue";
                break;
                case 2:
                color = "green";
                break;
                case 3:
                color = "yellow";
                break;
            }
            let newCard ={
                cardValue: value,
                cardColor: color
            };
            kartenArray.push();
        }
    }

}

function Mischen() :any{
    kartenArray.sort(function(a, b){
        return 0.5 - Math.random()});
        console.log(kartenArray);
}
function Austeilen(){
    for(let i = 0; i < 7; i++){
        computerKarten.push(kartenArray[0]);
        kartenArray.splice(0, 1);
        meineKarten.push(kartenArray[0]);
        kartenArray.splice(0, 1);
    }
    ablageStapel.push(kartenArray[0]);
    kartenArray.splice(0, 1);
    console.log(meineKarten);
    console.log(computerKarten);
    console.log(ablageStapel);
    console.log(kartenArray);
    console.log("Die Karten wurden verteilt");
}

function cardHTML (Cards, Destination, index){
    let holdingDiv=document.createElement("div");
    holdingDiv.setAttribute("class", "Karte"+""+ Cards.cardColor);
    document.getElementById(Destination).appendChild(holdingDiv);
    let Zahl=document.createAttribute("p");
    Zahl.setAttribute("class", "kartenNummer");
    Zahl.innerHTML = ""+Cards.cardValue;
    holdingDiv.appendChild(Zahl);
    if (Destination==meineKarten){
        holdingDiv.addEventListener("click", function(){karteSpielen(Cards, index);}, false);
    }
}
function coveredCard(Cards, Destination, index){
    let holdingDiv = document.createElement("div")
    holdingDiv.setAttribute("class", "Cards"+""+"Covered");
    document.getElementById("Destination").appendChild(holdingDiv);
}

function karteZiehen (){
if(checkKarten(meineKarten)==false){
    meineKarten.push(kartenArray[kartenArray.length - 1]);
    kartenArray.splice(kartenArray.length -1, 1);
    updateHTML("Player");
    updateHTML("CardArea");
}
if (checkKarten(meineKarten)==false){
    computerSpiel();
}
}
function karteSpielen(Cards, index){
    if (Cards.cardColor == ablageStapel[ablageStapel.length - 1].cardColor ||
        Cards.cardValue == ablageStapel[ablageStapel.length - 1].cardValue)
        ablageStapel.push(Cards);
        meineKarten.splice(index, 1);
        updateHTML("Player");
        updateHTML("CardArea");
        computerSpiel();
}
function computerSpiel (){
    
   let i=0;
   for(i; i < computerKarten.length;i++){
       if(computerKarten[i].cardColor == ablageStapel[ablageStapel.length -1].cardColor ||
        computerKarten[i].cardValue == ablageStapel[ablageStapel.length -1].cardValue){
            ablageStapel.push(computerKarten[i]);
            computerKarten.splice(i, 1);
            updateHTML("CardArea");
            updateHTML("Computer");
            break; 
        }

   }
   if (i >= computerKarten.length){
       computerKarten.push(kartenArray[kartenArray.length - 1]);
       kartenArray.splice(kartenArray.length -1,1);
       updateHTML("Computer");
       updateHTML("Stack");
       if (computerKarten[computerKarten.length - 1].cardColor == ablageStapel[ablageStapel.length].cardColor ||
        computerKarten[computerKarten.length - 1].cardValue == ablageStapel[ablageStapel.length].cardValue){
            ablageStapel.push(computerKarten[computerKarten.length - 1]);
            computerKarten.splice(computerKarten.length -1, 1);
            updateHTML("CardArea");
            updateHTML("Computer");

        }
   }
}
function checkKarten(array){
    let matchingCard = false;
    for (let i = 0; i <= array.length; i++){
        if(array[i].cardColor == ablageStapel[ablageStapel.length - 1].cardColor || 
            array[i].cardValue == ablageStapel[ablageStapel.length - 1].cardValue){
                matchingCard = true;
                break;
            }
    }
    return matchingCard;
}
function updateHTML(Destination){
    clearHTML(Destination);
    if (Destination == "Player"){
        for (let i = 0; i < meineKarten.length; i++){
            cardHTML(meineKarten[i],"Player",i);
        }
    }
    if (Destination == "Computer"){
        for (let i = 0; i < computerKarten.length; i++){
            coveredCard(computerKarten[i], "Computer", i);
        }
    }
    if (Destination == "CardArea"){
        cardHTML(ablageStapel[ablageStapel.length - 1], "CardArea", ablageStapel.length -1);
    }
    if (Destination == "Stack"){
        coveredCard(kartenArray[kartenArray.length - 1],"Stack", kartenArray.length -1);
    }

}
function clearHTML(Destination){
    let Element = document.getElementById(Destination);
    while (Element.firstChild){
        Element.removeChild(Element.firstChild);
    }

}
