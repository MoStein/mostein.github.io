"use strict";
var aufgabe13;
(function (aufgabe13) {
    class Erpel extends aufgabe13.BewegteDinge {
        //malt den größten Erpel
        constructor(_x, _y) {
            super();
            this.x = _x * (10 - 5) + 5;
            this.y = _y * (350 - 100) + 100;
            this.dx = _x * -10; ///nach rechts
            this.dy = 0; ///schreg nach
            this.ofType = "großerErpel";
        }
        draw() {
            let KörperV = new Path2D();
            KörperV.moveTo(this.x, this.y);
            KörperV.quadraticCurveTo(this.x - 7.5, this.y + 37.5, this.x - 75, this.y);
            KörperV.moveTo(this.x, this.y);
            KörperV.quadraticCurveTo(this.x - 25, this.y - 50, this.x - 75, this.y);
            aufgabe13.crc.strokeStyle = "black";
            aufgabe13.crc.lineWidth = 3;
            aufgabe13.crc.fillStyle = "red";
            aufgabe13.crc.stroke(KörperV);
            aufgabe13.crc.fill(KörperV);
            let KörperF = new Path2D();
            KörperF.moveTo(this.x, this.y);
            KörperF.quadraticCurveTo(this.x - 7.5, this.y + 15, this.x - 75, this.y);
            KörperF.moveTo(this.x, this.y);
            KörperF.quadraticCurveTo(this.x - 25, this.y - 35, this.x - 75, this.y);
            aufgabe13.crc.strokeStyle = "black";
            aufgabe13.crc.lineWidth = 1.5;
            aufgabe13.crc.fillStyle = "red";
            aufgabe13.crc.stroke(KörperF);
            aufgabe13.crc.fill(KörperF);
            let vogelchen = new Path2D();
            vogelchen.arc(this.x - 5, this.y, 32.5, 12.5, 22.5 * Math.PI);
            aufgabe13.crc.strokeStyle = "black";
            aufgabe13.crc.lineWidth = 1.5;
            aufgabe13.crc.fillStyle = "red";
            aufgabe13.crc.stroke(vogelchen);
            aufgabe13.crc.fill(vogelchen);
            let vogelAUge = new Path2D();
            vogelAUge.arc(this.x - 7.5, this.y, 5.5, 0, 20 * Math.PI);
            aufgabe13.crc.fillStyle = "white";
            aufgabe13.crc.strokeStyle = "black";
            aufgabe13.crc.stroke(vogelAUge);
            aufgabe13.crc.fill(vogelAUge);
            let augeInnen = new Path2D();
            augeInnen.arc(this.x - 7.5, this.y, 4, 0, 1 * Math.PI);
            aufgabe13.crc.fillStyle = "black";
            aufgabe13.crc.fill(augeInnen);
        }
        move() {
            this.x -= this.dx;
            this.y -= this.dy;
            if (this.x > 900) {
                this.x = 0 + this.dx;
            }
            if (this.x < 0 - 300) {
                this.x = 900 + this.dx;
            }
            if (this.x >= this.foodLocation - 10 && this.x <= this.foodLocation + 10 && this.y >= 580) {
                this.dx = 0;
                this.dy = 0;
            }
        }
        findFood() {
            let xVec = this.foodLocation - this.x;
            let yVec = 580 - this.y;
            let Z = -80;
            xVec /= Z;
            yVec /= Z;
            this.dx = xVec;
            this.dy = yVec;
        }
    }
    aufgabe13.Erpel = Erpel;
})(aufgabe13 || (aufgabe13 = {}));
//# sourceMappingURL=Erpel.js.map