var skipiste;
(function (skipiste) {
    class Skier extends skipiste.Moveable {
        constructor(_position, _size) {
            super(_position, _size);
            console.log("constructor skier");
        }
        draw() {
            //console.log("draw skier");
        }
    }
    skipiste.Skier = Skier;
})(skipiste || (skipiste = {}));
//# sourceMappingURL=skier.js.map