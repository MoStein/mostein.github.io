var skipiste;
(function (skipiste) {
    class Skier extends skipiste.Moveable {
        constructor(_position, _size) {
            super(_position, _size);
            console.log("constructor skier");
        }
        draw() {
            //console.log("draw skier");
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