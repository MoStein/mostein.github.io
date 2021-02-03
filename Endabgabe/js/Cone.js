var silvester;
(function (silvester) {
    class Cone extends silvester.Particle {
        constructor(_position, _velocity) {
            super();
            this.position = new silvester.Vector(0, 0);
            this.position.x = _position.x;
            this.position.y = _position.y;
            this.velocity = _velocity;
        }
        draw(_color, _particleRadius) {
            silvester.crc2.beginPath();
            silvester.crc2.fillStyle = _color;
            // crc2.arc(this.position.x, this.position.y, _particleRadius, 0, 2*Math.PI);
            // crc2.fill();
            silvester.crc2.fillRect(this.position.x, this.position.y, 10, 10);
        }
    }
    silvester.Cone = Cone;
})(silvester || (silvester = {}));
//# sourceMappingURL=Cone.js.map