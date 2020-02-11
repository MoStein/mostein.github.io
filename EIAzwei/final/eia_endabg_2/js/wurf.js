"use strict";
var aufgabe13;
(function (aufgabe13) {
    class werfen2 extends aufgabe13.BewegteDinge {
        constructor(_x, _y) {
            super();
            this.x = _x;
            this.y = _y;
            this.WurfSchnee = 50;
            this.dx = 0;
            this.dy = -10;
            this.radius = 25;
            this.ofType = "schneeball";
            this.ofType = "GrossSchneeball";
        }
        //Zeichnen des Schneeballs mit Variablen anstelle von Werten, um die Größe anpassen zu können
        draw() {
            if (this.radius >= 0) {
                let wurfBall = new Path2D();
                wurfBall.arc(this.x - 10, this.y, this.radius, 0, 2 * Math.PI);
                aufgabe13.crc.fillStyle = "white";
                aufgabe13.crc.strokeStyle = "black";
                aufgabe13.crc.stroke(wurfBall);
                aufgabe13.crc.fill(wurfBall);
            }
        }
        throw() {
            if (this.radius >= 0)
                this.radius -= 1;
        }
    }
    aufgabe13.werfen2 = werfen2;
})(aufgabe13 || (aufgabe13 = {}));
//# sourceMappingURL=wurf.js.map