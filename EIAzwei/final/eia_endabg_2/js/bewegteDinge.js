"use strict";
var aufgabe13;
(function (aufgabe13) {
    class BewegteDinge extends aufgabe13.AlleObjekte {
        constructor() {
            super();
            //
        }
        draw() {
            //
        }
        update() {
            this.move();
            this.draw();
            this.throw();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
        }
        throw() {
            //
        }
    }
    aufgabe13.BewegteDinge = BewegteDinge;
})(aufgabe13 || (aufgabe13 = {}));
//# sourceMappingURL=bewegteDinge.js.map