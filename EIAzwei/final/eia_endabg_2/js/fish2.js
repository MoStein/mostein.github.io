var aufgabe12;
(function (aufgabe12) {
    class BigFish extends aufgabe12.bewegteDinge {
        constructor(_x) {
            super(_x);
            this.x = _x * (600 - 100) + 200;
            this.y = _x * (350 - 100) + 100;
            ;
            this.dx = _x * -10;
            this.dy = 0;
        }
        draw() {
            let vogelUnten = new Path2D();
            aufgabe12.crc.fillStyle = "crimson";
            vogelUnten.moveTo(this.x, this.y);
            vogelUnten.quadraticCurveTo(this.x, this.y + 90, this.x + 190, this.y);
            aufgabe12.crc.stroke(vogelUnten);
            aufgabe12.crc.fill(vogelUnten);
            let vogelOben = new Path2D();
            vogelOben.moveTo(this.x, this.y);
            vogelOben.quadraticCurveTo(this.x, this.y - 110, this.x + 190, this.y);
            aufgabe12.crc.stroke(vogelOben);
            aufgabe12.crc.fill(vogelOben);
            let vogelFlosse = new Path2D();
            vogelFlosse.moveTo(this.x + 190, this.y);
            vogelFlosse.lineTo(this.x + 250, this.y - 50);
            vogelFlosse.lineTo(this.x + 230, this.y);
            vogelFlosse.lineTo(this.x + 250, this.y + 50);
            vogelFlosse.closePath();
            aufgabe12.crc.stroke(vogelFlosse);
            aufgabe12.crc.fill(vogelFlosse);
            let vogelAUge = new Path2D();
            vogelAUge.arc(this.x + 30, this.y - 10, 13, 0, 2 * Math.PI);
            aufgabe12.crc.fillStyle = "white";
            aufgabe12.crc.strokeStyle = "black";
            aufgabe12.crc.stroke(vogelAUge);
            aufgabe12.crc.fill(vogelAUge);
            let augeInnen = new Path2D();
            augeInnen.arc(this.x + 30, this.y - 10, 5, 0, 2 * Math.PI);
            aufgabe12.crc.fillStyle = "black";
            aufgabe12.crc.fill(augeInnen);
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > 900) {
                this.x = 0 + this.dx;
            }
            if (this.x < 0 - 300) {
                this.x = 900 + this.dx;
            }
        }
    }
    aufgabe12.BigFish = BigFish;
})(aufgabe12 || (aufgabe12 = {}));
//# sourceMappingURL=fish2.js.map