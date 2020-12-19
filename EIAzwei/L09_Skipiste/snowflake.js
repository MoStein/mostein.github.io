var skipiste;
(function (skipiste) {
    class Snowflake {
        constructor(_x, _y) {
            console.log("constructor snowflake");
            this.x = _x * 1000;
            this.y = _y * 5000;
            this.dx = 0;
            this.dy = 0.1 * +10;
        }
        draw() {
            console.log("draw snowflake");
            let schnee = new Path2D();
            schnee.arc(this.x, this.y, 9, 0, 2 * Math.PI);
            skipiste.crc2.fillStyle = "white";
            skipiste.crc2.fill(schnee);
            let blub = new Path2D();
            blub.arc(this.x, this.y, 7, 0, 2 * Math.PI);
            skipiste.crc2.fillStyle = "white";
            skipiste.crc2.fill(blub);
        }
        update() {
            console.log("update snowflake");
            this.move();
            this.draw();
        }
        move() {
            console.log("move snowflake");
            this.x += this.dx;
            this.y += this.dy;
            if (this.y < 0) {
                this.y = 900 + this.dy;
            }
        }
    }
    skipiste.Snowflake = Snowflake;
})(skipiste || (skipiste = {}));
//# sourceMappingURL=snowflake.js.map