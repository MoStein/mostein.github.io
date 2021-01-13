var skipiste;
(function (skipiste) {
    class Vector {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
            this.calcLength();
        }
        calcLength() {
            this.length = Math.sqrt((this.x * this.x) + (this.y * this.y));
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
    skipiste.Vector = Vector;
})(skipiste || (skipiste = {}));
//# sourceMappingURL=Vector.js.map