var skipiste;
(function (skipiste) {
    class Moveable {
        constructor(_position, _size) {
            this.check = 0;
            this.position = _position;
            this.size = _size;
            this.particle = new Path2D();
        }
        move() {
            if (this.position.x == -200) {
                this.size.x += 10;
                if (this.check % 2 == 0) {
                    this.size.y += Math.random() * 13;
                }
                else {
                    this.size.y -= Math.random() * 12;
                }
                if (this.size.x > 700) {
                    this.size.x = -200;
                }
                this.check++;
            }
            else {
                this.size.y -= 2;
                if (this.size.y < -skipiste.crc2.canvas.height)
                    this.size.y = 0;
            }
        }
        draw() {
            // leer
        }
    }
    skipiste.Moveable = Moveable;
})(skipiste || (skipiste = {}));
//# sourceMappingURL=moveable.js.map