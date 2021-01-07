var skipiste;
(function (skipiste) {
    class Skier {
        constructor(_position, _size) {
            console.log("constructor skier");
        }
        draw() {
            console.log("draw skier");
        }
        move() {
            console.log("move skier");
        }
    }
    skipiste.Skier = Skier;
})(skipiste || (skipiste = {}));
//# sourceMappingURL=skier.js.map