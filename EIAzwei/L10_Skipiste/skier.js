var skipiste;
(function (skipiste) {
    class Skier extends skipiste.Moveable {
        constructor(_position, _size) {
            super(_position, _size);
            console.log("constructor skier");
            let x = 800 * Math.random();
            let y = 600 * Math.random();
            this.position = new skipiste.Vector(x, y);
            this.position = new skipiste.Vector(-3, 5);
        }
        draw() {
            //console.log(this.position.x, this.position.y);
            skipiste.crc2.beginPath();
            skipiste.crc2.rect(this.position.x, this.position.y, 12, 6);
            skipiste.crc2.fillStyle = "red";
            skipiste.crc2.fillRect;
            skipiste.crc2.closePath();
        }
    }
    skipiste.Skier = Skier;
})(skipiste || (skipiste = {}));
//# sourceMappingURL=skier.js.map