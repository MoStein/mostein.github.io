"use strict";
var aufgabe13;
(function (aufgabe13) {
    class werfen extends aufgabe13.AlleObjekte {
        constructor(_x, _y) {
            super();
            this.x = _x;
            this.y = _y;
            this.Fadenkreutz = 50;
            this.ofType = "GrossSchneeball";
        }
        //Zeichnen des Schneeballs mit Variablen anstelle von Werten, um die Größe anpassen zu können
        draw() {
            let schneeball = new Path2D();
            schneeball.arc(this.x - 10, this.y, 25, 0, 2 * Math.PI);
            schneeball.arc(this.x - 10, this.y, this.Fadenkreutz, 0, 2 * Math.PI);
            aufgabe13.crc.fillStyle = "rgba(220,160,140,0.5)";
            aufgabe13.crc.strokeStyle = "black";
            aufgabe13.crc.stroke(schneeball);
            aufgabe13.crc.fill(schneeball);
            let innererFokus = new Path2D();
            innererFokus.arc(this.x - 10, this.y, 2, 0, 2 * Math.PI);
            aufgabe13.crc.fillStyle = "rgba(220,purple,140,0.5)";
            aufgabe13.crc.strokeStyle = "black";
            aufgabe13.crc.stroke(innererFokus);
            aufgabe13.crc.fill(innererFokus);
            let kreutz = new Path2D();
            aufgabe13.crc.fillStyle = "black";
            aufgabe13.crc.fillRect(this.x - 10.2, this.y - 65, 0.5, 130);
            aufgabe13.crc.fillRect(this.x - 75, this.y - 0, 130, 0.5);
            aufgabe13.crc.fill(kreutz);
        }
    }
    aufgabe13.werfen = werfen;
})(aufgabe13 || (aufgabe13 = {}));
//# sourceMappingURL=Schneeball.js.map