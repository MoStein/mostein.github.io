"use strict";
var aufgabe13;
(function (aufgabe13) {
    //Eventlistener um init auszuführen
    document.addEventListener("DOMContentLoaded", starten);
    //Eventlistener für einen keydown um Fisch steuern zu können
    document.addEventListener("keydown", bewegungFadenkreutz);
    document.addEventListener("keydown", schussVomBall);
    aufgabe13.allesArray = [];
    let alleVoegel = [];
    let alleSchneebaelle = [];
    let url = "https://vogelhaus.herokuapp.com/";
    let fps = 30;
    let imageData;
    aufgabe13.highscore = 0;
    let timeout;
    function starten() {
        document.getElementById("start").addEventListener("click", init);
    }
    function init() {
        aufgabe13.canvas = document.getElementsByTagName("canvas")[0];
        aufgabe13.crc = aufgabe13.canvas.getContext("2d");
        hintergrund();
        aufgabe13.refresh();
        //Hintergrundobjekte zufällig plaziert 
        for (let i = 0; i < 50; i++) {
            let x = Math.random() * (800 - 200) + 200;
            let y = Math.random() * (270 - 120) + 120;
            kies(x, y);
        }
        for (let i = 0; i < 2; i++) {
            let x = Math.random() * (300 - 50) + 300;
            let y = Math.random() * (400 - 400) + 400;
            bergFunktion(x, y);
        }
        for (let i = 0; i < 2; i++) {
            let x = Math.random() * (850 - 200) + 200;
            let y = 550;
            schneemannFunktion(x, y);
        }
        aufgabe13.canvas.addEventListener("click", hermitdemfutter); //Ruft Futter fallenlassen Funktion auf
        imageData = aufgabe13.crc.getImageData(0, 0, aufgabe13.canvas.width, aufgabe13.canvas.height);
        //Animierte Objekte im Canvas
        for (let i = 0; i < 50; i++) {
            let schneefall = new aufgabe13.SchneeFall(Math.random(), Math.random());
            aufgabe13.allesArray.push(schneefall);
        }
        for (let i = 0; i < 91; i++) {
            let futter = new aufgabe13.schnee2(Math.random(), Math.random());
            aufgabe13.allesArray.push(futter);
        }
        for (let i = 0; i < 10; i++) {
            let volgelchen = new aufgabe13.Erpel(Math.random(), Math.random());
            alleVoegel.push(volgelchen);
        }
        for (let i = 0; i < 10; i++) {
            let volgelchen = new aufgabe13.vogel(Math.random(), Math.random());
            alleVoegel.push(volgelchen);
        }
        aufgabe13.wurfhand = new aufgabe13.werfen(aufgabe13.canvas.width / 2, aufgabe13.canvas.height / 2);
        aufgabe13.allesArray.push(aufgabe13.wurfhand);
        update();
    }
    //Steuerung des Fasenkreutzes durch keydown
    function bewegungFadenkreutz(_event) {
        if (_event.keyCode == 39) { //rechts
            aufgabe13.wurfhand.x += 8;
            if (aufgabe13.wurfhand.x > 900) {
                aufgabe13.wurfhand.x = 0;
            }
        }
        if (_event.keyCode == 37) { //37
            aufgabe13.wurfhand.x -= 8;
            if (aufgabe13.wurfhand.x < 0) {
                aufgabe13.wurfhand.x = 900;
            }
        }
        if (_event.keyCode == 40) { //unten
            aufgabe13.wurfhand.y += 8;
            if (aufgabe13.wurfhand.y > 600) {
                aufgabe13.wurfhand.y = 0;
            }
        }
        if (_event.keyCode == 38) { //oben
            aufgabe13.wurfhand.y -= 8;
            if (aufgabe13.wurfhand.y < 0) {
                aufgabe13.wurfhand.y = 600;
            }
        }
    }
    // überprüft, ob schneeball mit vogel kollidiert
    function trifftVogel() {
        for (let i = 0; i < alleSchneebaelle.length; i++) {
            for (let j = 0; j < alleVoegel.length; j++) {
                // hitbox check
                if (alleSchneebaelle[i].x - 10 > alleVoegel[j].x - 80 && alleSchneebaelle[i].x - 10 < alleVoegel[j].x + 40 && alleSchneebaelle[i].y > alleVoegel[j].y - 25 && alleSchneebaelle[i].y < alleVoegel[j].y + 25) {
                    alleVoegel.splice(j, 1);
                    alleSchneebaelle.splice(i, 1);
                    aufgabe13.highscore += 20;
                    console.log("score: " + aufgabe13.highscore);
                    return;
                }
                if (aufgabe13.highscore >= 1) {
                    document.getElementById("highscore").innerHTML = "";
                    let prodElement = document.createElement("div");
                    prodElement.innerHTML = `<div> Dein Highscore: ${aufgabe13.highscore}</div>`;
                    document.getElementById("highscore").appendChild(prodElement);
                }
                if (aufgabe13.highscore >= 400) {
                    window.clearTimeout(timeout);
                    aufgabe13.spielerName = prompt("Deine Punkte: " + aufgabe13.highscore, "Dein Name");
                    aufgabe13.insert();
                    alert("Neues Spiel?");
                    window.location.reload();
                    return;
                }
            }
        }
    }
    function schussVomBall(_event) {
        if (_event.keyCode == 32) { //space
            let platzierenBall = new aufgabe13.werfen2(aufgabe13.wurfhand.x, aufgabe13.wurfhand.y);
            alleSchneebaelle.push(platzierenBall);
        }
    }
    //Funktion für das Timeout, um diese später nutzen zu können
    function setTimeOut() {
        timeout = window.setTimeout(update, 1000 / fps);
    }
    //Update Funktion
    function update() {
        setTimeOut();
        aufgabe13.crc.clearRect(0, 0, aufgabe13.canvas.width, aufgabe13.canvas.height);
        aufgabe13.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < aufgabe13.allesArray.length; i++) {
            aufgabe13.allesArray[i].update();
        }
        for (let i = 0; i < alleVoegel.length; i++) {
            alleVoegel[i].update();
        }
        for (let i = 0; i < alleSchneebaelle.length; i++) {
            alleSchneebaelle[i].update();
        }
        trifftVogel();
    }
    //Alles für den Hintergrund 
    function kies(_x, _y) {
        let steine = new Path2D();
        aufgabe13.crc.lineWidth = 2;
        aufgabe13.crc.strokeStyle = "grey";
        steine.arc(_x + 50, _y + 300, 7, Math.PI, 2 * Math.PI);
        aufgabe13.crc.fillStyle = "lightgrey";
        aufgabe13.crc.fill(steine);
        aufgabe13.crc.stroke(steine);
    }
    function bergFunktion(_x, _y) {
        let derBerg = new Path2D();
        aufgabe13.crc.strokeStyle = "white";
        aufgabe13.crc.fillStyle = "white";
        derBerg.moveTo(_x, _y);
        derBerg.lineTo(_x + 300, _y - 200);
        derBerg.lineTo(_x + 635, _y + 0);
        derBerg.closePath();
        aufgabe13.crc.lineWidth = 3;
        aufgabe13.crc.stroke(derBerg);
        aufgabe13.crc.fill(derBerg);
    }
    function schneemannFunktion(_x, _y) {
    }
    console.log(alleVoegel);
    function hintergrund() {
        let Himmel = new Path2D();
        Himmel.rect(0, 0, 900, 600);
        aufgabe13.crc.fillStyle = "lightblue";
        aufgabe13.crc.fill(Himmel);
        let boden = new Path2D();
        boden.rect(0, 400, 900, 200);
        aufgabe13.crc.fillStyle = "white";
        aufgabe13.crc.fill(boden);
        let Sonne = new Path2D();
        aufgabe13.crc.fillStyle = "yellow";
        Sonne.arc(+300, 100, 100, 100, Math.PI, 2 * Math.PI);
        //      X/Y/RADIUS/BOGEN       /2mal pi = 360
        aufgabe13.crc.fill(Sonne);
        let wolke = new Path2D();
        aufgabe13.crc.beginPath();
        aufgabe13.crc.moveTo(190, 71);
        aufgabe13.crc.bezierCurveTo(121, 110, 133, 155, 233, 155);
        aufgabe13.crc.bezierCurveTo(230, 170, 310, 182, 342, 152);
        aufgabe13.crc.bezierCurveTo(410, 150, 420, 120, 390, 100);
        aufgabe13.crc.bezierCurveTo(440, 44, 376, 38, 343, 50);
        aufgabe13.crc.bezierCurveTo(356, 2, 255, 29, 257, 54);
        aufgabe13.crc.bezierCurveTo(200, 4, 153, 23, 173, 83);
        aufgabe13.crc.closePath();
        aufgabe13.crc.lineWidth = 5;
        aufgabe13.crc.fillStyle = "white";
        aufgabe13.crc.fill();
        let hausBein = new Path2D();
        aufgabe13.crc.fillStyle = "green";
        aufgabe13.crc.fillRect(200, 350, 10, 200);
        aufgabe13.crc.fill(hausBein);
        let haus = new Path2D();
        aufgabe13.crc.fillStyle = "green";
        aufgabe13.crc.fillRect(150, 250, 100, 100);
        aufgabe13.crc.clearRect(173, 270, 60, 60);
        aufgabe13.crc.strokeRect(175, 275, 50, 50);
        aufgabe13.crc.fill(haus);
        for (let i = 0; i < 60; i = i + 50) {
        }
    }
    //Futter fallen lassen bei einem Klick der Maus 
    function hermitdemfutter(_event) {
        let xCanvas = _event.clientX;
        let yCanvas = _event.clientY;
        for (let i = 0; i < 10; i++) {
            let nomNom = new aufgabe13.Foodistsogut(xCanvas, yCanvas);
            aufgabe13.allesArray.push(nomNom);
            ////141 -150 erpel
        }
        for (let i = 0; i < alleVoegel.length; i++) {
            alleVoegel[i].foodLocation = xCanvas;
            alleVoegel[i].findFood();
        }
    }
    /*
        //Rechnet Highscore
        export function highscoreFunk(): void {
            document.getElementById("highscore").innerHTML = "";
            let prodElement: HTMLDivElement = document.createElement("div");
            prodElement.innerHTML = `<div> Dein Highscore: ${highscore}</div>`;
            document.getElementById("highscore").appendChild(prodElement);
        }
    
        //Wird aufgerufen, wenn man stirbt. Der Spieler gibt Namen ein und dieser wird mit Highscore an den Server gegeben
        export function nameEingeben(): void {
            window.clearTimeout(timeout);
            spielerName = prompt("Deine Punkte: " + highscore, "Dein Name");
            insert();
            alert("Neues Spiel?");
            window.location.reload();
            // document.getElementById("neustart").addEventListener("click", neustart);
        }
        
        // function neustart() {
        //     window.location.reload();
        // }
    */
})(aufgabe13 || (aufgabe13 = {}));
//# sourceMappingURL=main.js.map