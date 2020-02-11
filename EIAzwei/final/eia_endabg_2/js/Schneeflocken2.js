"use strict";
var aufgabe13;
(function (aufgabe13) {
    class schnee2 extends aufgabe13.BewegteDinge {
        constructor(_x, _y) {
            super();
            this.x = _x * (850 - 50) + 50;
            this.y = _y * (600 - 0) + 0;
            this.dx = 0;
            this.dy = 0.3 * 5;
            this.ofType = "foodImCanvas";
        }
        draw() {
            let blubaußen = new Path2D();
            blubaußen.arc(this.x, this.y, 5, 0, 2 * Math.PI); //////SCHNEE
            aufgabe13.crc.fillStyle = "white";
            aufgabe13.crc.fill(blubaußen);
            let blub = new Path2D();
            blub.arc(this.x, this.y, 4, 0, 2 * Math.PI); ////SCHNEE
            aufgabe13.crc.fillStyle = "white";
            aufgabe13.crc.fill(blub);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y > 600) {
                this.y = 0 + this.dy;
            }
        }
    }
    aufgabe13.schnee2 = schnee2;
})(aufgabe13 || (aufgabe13 = {}));
//# sourceMappingURL=Schneeflocken2.js.map