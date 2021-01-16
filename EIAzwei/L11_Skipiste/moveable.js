var skipiste;
(function (skipiste) {
    class Moveable {
        constructor(_position, _size) {
            this.hitRadius = 0;
            let x = 800 * Math.random();
            let y = 600 * Math.random();
            this.position = new skipiste.Vector(x, y);
            this.velocity = new skipiste.Vector(0, 0);
        }
        move() {
            this.position.add(this.velocity);
            console.log(this.position);
            if (this.position.y > 600) {
                this.position.y = 0;
            }
            if (this.position.x < 0) {
                this.position.x = 800;
            }
        }
    }
    skipiste.Moveable = Moveable;
})(skipiste || (skipiste = {}));
//# sourceMappingURL=moveable.js.map