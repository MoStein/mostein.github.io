namespace aufgabe13 {

    //Eventlistener um init auszuführen
    document.addEventListener("DOMContentLoaded", starten);
    //Eventlistener für einen keydown um Fisch steuern zu können
    document.addEventListener("keydown", bewegungFadenkreutz);
    document.addEventListener("keydown", schussVomBall);
    export let crc: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    export let allesArray: AlleObjekte[] = [];
    let alleVoegel: AlleObjekte[] = [];
    let alleSchneebaelle: AlleObjekte[] = [];
    let url: string ="https://vogelhaus.herokuapp.com/";

    let fps: number = 30;
    let imageData: ImageData;
    export let wurfhand: werfen;
    export let highscore: number = 0;
    let timeout: number;
    export let spielerName: string;

    function starten(): void {
        document.getElementById("start").addEventListener("click", init);
    }

    function init(): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");
        hintergrund();
        refresh();

        //Hintergrundobjekte zufällig plaziert 
        for (let i: number = 0; i < 50; i++) {
            let x: number = Math.random() * (800 - 200) + 200;
            let y: number = Math.random() * (270 - 120) + 120;
            kies(x, y);
        }


        for (let i: number = 0; i < 2; i++) {
            let x: number = Math.random() * (300 - 50) + 300;
            let y: number = Math.random() * (400 - 400) + 400;
            bergFunktion(x, y);
        }
        for (let i: number = 0; i < 2; i++) {
            let x: number = Math.random() * (850 - 200) + 200;
            let y: number = 550;
            schneemannFunktion(x, y);
        }

        canvas.addEventListener("click", hermitdemfutter); //Ruft Futter fallenlassen Funktion auf
        imageData = crc.getImageData(0, 0, canvas.width, canvas.height);

        //Animierte Objekte im Canvas
        for (let i: number = 0; i < 50; i++) {
            let schneefall: SchneeFall = new SchneeFall(Math.random(), Math.random());
            allesArray.push(schneefall);
        }


        for (let i: number = 0; i < 91; i++) {
            let futter: schnee2 = new schnee2(Math.random(), Math.random());
            allesArray.push(futter);
        }
        for (let i: number = 0; i < 10; i++) {
            let volgelchen: Erpel = new Erpel(Math.random(), Math.random());
            alleVoegel.push(volgelchen);
        }
        for (let i: number = 0; i < 10; i++) {
            let volgelchen: vogel = new vogel(Math.random(), Math.random());
            alleVoegel.push(volgelchen);
        }


        wurfhand = new werfen(canvas.width / 2, canvas.height / 2);
        allesArray.push(wurfhand);
        update();
    }


    //Steuerung des Fasenkreutzes durch keydown
    function bewegungFadenkreutz(_event: KeyboardEvent): void {
        if (_event.keyCode == 39) { //rechts
            wurfhand.x += 8;
            if (wurfhand.x > 900) {
                wurfhand.x = 0;
            }
        }
        if (_event.keyCode == 37) { //37
            wurfhand.x -= 8;
            if (wurfhand.x < 0) {
                wurfhand.x = 900;
            }
        }
        if (_event.keyCode == 40) { //unten
            wurfhand.y += 8;
            if (wurfhand.y > 600) {
                wurfhand.y = 0;
            }
        }
        if (_event.keyCode == 38) { //oben
            wurfhand.y -= 8;
            if (wurfhand.y < 0) {
                wurfhand.y = 600;
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
                    highscore += 20;
                    console.log("score: " + highscore);
                    
                    return;
                }
                if (highscore >= 1) {
                    document.getElementById("highscore").innerHTML = "";
                    let prodElement: HTMLDivElement = document.createElement("div");
                    prodElement.innerHTML = `<div> Dein Highscore: ${highscore}</div>`;
                    document.getElementById("highscore").appendChild(prodElement);
                    
                }
                if (highscore >= 400) {
                window.clearTimeout(timeout);
                spielerName = prompt("Deine Punkte: " + highscore, "Dein Name");
                insert();
                alert("Neues Spiel?");
                window.location.reload();
                return;
                }
            }
        }
    }

    function schussVomBall(_event: KeyboardEvent): void {
        if (_event.keyCode == 32) { //space
            let platzierenBall: werfen2 = new werfen2(wurfhand.x, wurfhand.y);
            alleSchneebaelle.push(platzierenBall);
        }
    }

    //Funktion für das Timeout, um diese später nutzen zu können
    function setTimeOut(): void {
        timeout = window.setTimeout(update, 1000 / fps);
    }

    //Update Funktion
    function update(): void {
        setTimeOut();
        crc.clearRect(0, 0, canvas.width, canvas.height);
        crc.putImageData(imageData, 0, 0);

        for (let i: number = 0; i < allesArray.length; i++) {
            allesArray[i].update();
        }
        for (let i: number = 0; i < alleVoegel.length; i++) {
            alleVoegel[i].update();
        }
        for (let i: number = 0; i < alleSchneebaelle.length; i++) {
            alleSchneebaelle[i].update();
        }
        trifftVogel();
    }

    //Alles für den Hintergrund 
    function kies(_x: number, _y: number): void {
        let steine: Path2D = new Path2D();
        crc.lineWidth = 2;
        crc.strokeStyle = "grey";
        steine.arc(_x + 50, _y + 300, 7, Math.PI, 2 * Math.PI);
        crc.fillStyle = "lightgrey";
        crc.fill(steine);
        crc.stroke(steine);
    }

    function bergFunktion(_x: number, _y: number): void {
        let derBerg: Path2D = new Path2D();
        crc.strokeStyle = "white";
        crc.fillStyle = "white";
        derBerg.moveTo(_x, _y);
        derBerg.lineTo(_x + 300, _y - 200);
        derBerg.lineTo(_x + 635, _y + 0);

        derBerg.closePath();
        crc.lineWidth = 3;
        crc.stroke(derBerg);
        crc.fill(derBerg);
    }

    function schneemannFunktion(_x: number, _y: number): void {
        

    }
    console.log(alleVoegel)



    function hintergrund(): void {
        let Himmel: Path2D = new Path2D();
        Himmel.rect(0, 0, 900, 600);
        crc.fillStyle = "lightblue";
        crc.fill(Himmel);

        let boden: Path2D = new Path2D();
        boden.rect(0, 400, 900, 200);
        crc.fillStyle = "white";
        crc.fill(boden);


        let Sonne: Path2D = new Path2D();
        crc.fillStyle = "yellow";
        Sonne.arc(+ 300, 100, 100, 100, Math.PI, 2 * Math.PI);
        //      X/Y/RADIUS/BOGEN       /2mal pi = 360
        crc.fill(Sonne);

        

        let wolke: Path2D = new Path2D();
        crc.beginPath();
        crc.moveTo(190, 71);
        crc.bezierCurveTo(121, 110, 133, 155, 233, 155);
        crc.bezierCurveTo(230, 170, 310, 182, 342, 152);
        crc.bezierCurveTo(410, 150, 420, 120, 390, 100);
        crc.bezierCurveTo(440, 44, 376, 38, 343, 50);
        crc.bezierCurveTo(356, 2, 255, 29, 257, 54);
        crc.bezierCurveTo(200, 4, 153, 23, 173, 83);
        crc.closePath();
        crc.lineWidth = 5;
        crc.fillStyle = "white";
        crc.fill();







        let hausBein: Path2D = new Path2D();
        crc.fillStyle = "green";
        crc.fillRect(200, 350, 10, 200);
        crc.fill(hausBein);

        let haus: Path2D = new Path2D();
        crc.fillStyle = "green";
        crc.fillRect(150, 250, 100, 100);
        crc.clearRect(173, 270, 60, 60);
        crc.strokeRect(175, 275, 50, 50);
        crc.fill(haus);


        for (let i: number = 0; i < 60; i = i + 50) {


        }
    }

    //Futter fallen lassen bei einem Klick der Maus 
    function hermitdemfutter(_event: MouseEvent): void {
        let xCanvas: number = _event.clientX;
        let yCanvas: number = _event.clientY;
        for (let i: number = 0; i < 10; i++) {
            let nomNom: Foodistsogut = new Foodistsogut(xCanvas, yCanvas);
            allesArray.push(nomNom);
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
} 