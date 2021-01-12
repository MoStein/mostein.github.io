var skipiste;
(function (skipiste) {
    class Snowflake extends skipiste.Moveable {
        constructor(_size, _position) {
            console.log("constructor snowflake");
            super(_position, _size);
            if (_position)
                this.position = _position;
            else
                this.position = new skipiste.Vector(0, 0);
            this.size = _size;
            this.particle = new Path2D();
        }
        draw() {
            //console.log("draw snowflake");
            skipiste.crc2.beginPath();
            skipiste.crc2.save();
            let radiusParticle = Math.random() * 5;
            this.particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            skipiste.crc2.translate(this.position.x, this.position.y);
            skipiste.crc2.fillStyle = "lightgrey";
            let x = this.size.x;
            let y = this.size.y;
            skipiste.crc2.translate(x, y);
            skipiste.crc2.fill(this.particle);
            skipiste.crc2.restore();
            skipiste.crc2.closePath();
        }
    }
    skipiste.Snowflake = Snowflake;
})(skipiste || (skipiste = {}));
//# sourceMappingURL=snowflake.js.map