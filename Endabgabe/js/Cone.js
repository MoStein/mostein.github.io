var silvester;
(function (silvester) {
    class Star extends silvester.Particle {
        constructor(_position, _velocity) {
            super();
            this.position = new silvester.Vector(0, 0);
            this.position.x = _position.x;
            this.position.y = _position.y;
            this.velocity = _velocity;
        }
        draw(_color, _particleRadius) {
            // let a = this.position.x 
            // let b = this.position.y
            // crc2.strokeStyle = _color;
            silvester.crc2.beginPath();
            // crc2.fillStyle = _color;
            silvester.crc2.strokeStyle = _color;
            // crc2.arc(this.position.x, this.position.y, _particleRadius, 0, 2*Math.PI);
            // crc2.fillRect(this.position.x, this.position.y, _particleRadius, _particleRadius*2);
            // crc2.fillRect(this.position.x, this.position.y, _particleRadius * 2, _particleRadius);
            // crc2.fillRect(this.position.x, this.position.y, -_particleRadius, -_particleRadius*2);
            // crc2.fillRect(this.position.x, this.position.y, -_particleRadius * 2, -_particleRadius);
            // crc2.fill();
            silvester.crc2.moveTo(this.position.x, this.position.y);
            silvester.crc2.lineTo(this.position.x, this.position.y - _particleRadius * 0.75);
            silvester.crc2.moveTo(this.position.x, this.position.y);
            silvester.crc2.lineTo(this.position.x - _particleRadius * 0.5, this.position.y + _particleRadius * 0.5);
            silvester.crc2.moveTo(this.position.x, this.position.y);
            silvester.crc2.lineTo(this.position.x - _particleRadius * 0.5, this.position.y - _particleRadius * 0.5);
            silvester.crc2.moveTo(this.position.x, this.position.y);
            silvester.crc2.lineTo(this.position.x + _particleRadius * 0.5, this.position.y + _particleRadius * 0.5);
            silvester.crc2.moveTo(this.position.x, this.position.y);
            silvester.crc2.lineTo(this.position.x + _particleRadius * 0.5, this.position.y - _particleRadius * 0.5);
            silvester.crc2.stroke();
            silvester.crc2.closePath();
            // crc2.moveTo(this.position.x, this.position.y-_particleRadius);
            // for (let i: number = 0; 1 < 5; i++){
            //      a = this.position.x + Math.cos(Math.PI/2*3)*_particleRadius;
            //      b = this.position.y + Math.cos(Math.PI/2*3)*_particleRadius;
            //     crc2.lineTo(a, b);
            //     Math.PI/2*3 += Math.PI/5;
            // }
            // crc2.lineTo(a, b);
            // crc2.stroke();
            // crc2.closePath();
        }
    }
    silvester.Star = Star;
})(silvester || (silvester = {}));
//# sourceMappingURL=Cone.js.map