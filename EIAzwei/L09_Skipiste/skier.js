var skipiste;
(function (skipiste) {
    class Skier {
        constructor(_x, _y, _dx, _dy, _color) {
            console.log("constructor skier");
            this.x = _x;
            this.y = _y;
            this.dx = _dx;
            this.dy = _dy;
            this.color = _color;
        }
        draw() {
            console.log("draw skier");
            skipiste.crc2.fillStyle = this.color;
            skipiste.crc2.fillRect(this.x, this.y, 9, -25);
            skipiste.crc2.beginPath();
            skipiste.crc2.arc(this.x + 5, this.y - 25, 7, 0, 2 * Math.PI);
            skipiste.crc2.fillStyle = this.color;
            skipiste.crc2.fill();
            skipiste.crc2.fillStyle = this.color;
            skipiste.crc2.beginPath();
            skipiste.crc2.moveTo(this.x + 20, this.y - 4);
            skipiste.crc2.lineTo(this.x - 20, this.y + 4);
            skipiste.crc2.stroke();
        }
        move() {
            console.log("move skier");
            skipiste.crc2.fillStyle = this.color;
            skipiste.crc2.fillRect(this.x, this.y, 9, -25);
            skipiste.crc2.beginPath();
            skipiste.crc2.arc(this.x + 5, this.y - 25, 7, 0, 2 * Math.PI);
            skipiste.crc2.fillStyle = this.color;
            skipiste.crc2.fill();
            skipiste.crc2.fillStyle = this.color;
            skipiste.crc2.beginPath();
            skipiste.crc2.moveTo(this.x + 20, this.y - 4);
            skipiste.crc2.lineTo(this.x - 20, this.y + 4);
            skipiste.crc2.stroke();
        }
        update() {
            console.log("move Skifahrer.ts");
            this.move();
            this.draw();
        }
    }
    skipiste.Skier = Skier;
})(skipiste || (skipiste = {}));
//# sourceMappingURL=skier.js.map