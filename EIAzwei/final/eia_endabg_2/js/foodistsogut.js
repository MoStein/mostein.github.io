"use strict";
var aufgabe13;
(function (aufgabe13) {
    class Foodistsogut extends aufgabe13.BewegteDinge {
        constructor(_xK, _yK) {
            super();
            this.x = _xK;
            this.y = _yK;
            this.dx = Math.random();
            this.dy = Math.random() * (20 - 2) + 10; ///Geschw. und richtung von essen
            this.ofType = "Futter";
            this.foodTime = 125 + Math.random() * 50;
        }
        draw() {
            let nom = new Path2D();
            nom.arc(this.x, this.y, 7, Math.PI, 2 * Math.PI); /// Aussehen essen
            aufgabe13.crc.strokeStyle = "brown";
            aufgabe13.crc.fillStyle = "brown";
            aufgabe13.crc.fill(nom);
            aufgabe13.crc.stroke(nom);
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y > 580) {
                this.y = 580;
                this.x = this.x -= this.dx;
            }
        }
        update() {
            if (this.foodTime <= 0) {
                aufgabe13.allesArray.splice(aufgabe13.allesArray.length - 1, 1);
            }
            else {
                super.update();
                this.foodTime -= 1;
            }
        }
    }
    aufgabe13.Foodistsogut = Foodistsogut;
})(aufgabe13 || (aufgabe13 = {}));
//# sourceMappingURL=foodistsogut.js.map