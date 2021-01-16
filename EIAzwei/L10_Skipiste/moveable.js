var skipiste;
(function (skipiste) {
    class Moveable {
        // particle: Path2D;
        // check: number = 0;
        constructor(_position) {
            let x = 800 * Math.random();
            let y = 600 * Math.random();
            this.position = new skipiste.Vector(x, y);
            this.velocity = new skipiste.Vector(0, 0);
            //this.size = _size;
            //this.particle = new Path2D();
        }
        move() {
            //     if (this.position.x == 200) {              
            //        this.size.x += 10;
            //     if (this.check % 2 == 0) {
            //         this.size.y += Math.random() * 13;
            //     } else {
            //         this.size.y -= Math.random() * 12;
            //     }
            //     if (this.size.x > 700) {
            //         this.size.x = 200;
            //     }
            //     this.check++;
            // }
            //     else {
            // this.size.y -= 2;
            // if (this.size.y < -crc2.canvas.height)
            // this.size.y = 0;
            this.position.add(this.velocity);
            console.log(this.position);
            if (this.position.y > 600) {
                this.position.y = 0;
            }
            if (this.position.x < 0) {
                this.position.x = 800;
            }
        }
        draw() {
            // leer
        }
    }
    skipiste.Moveable = Moveable;
})(skipiste || (skipiste = {}));
//# sourceMappingURL=moveable.js.map