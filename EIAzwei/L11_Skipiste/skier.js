var skipiste;
(function (skipiste) {
    class Skier extends skipiste.Moveable {
        constructor(_position, _size) {
            super(_position, _size);
            console.log("constructor skier");
            // let x: number = 800 * Math.random();
            let y = 250 + Math.random() * 10;
            this.position = new skipiste.Vector(800, y);
            let a = -1 + Math.random() * (-2);
            let b = Math.random() * 3.5;
            this.velocity = new skipiste.Vector(a, b);
            let colors = ["red", "green", "blue", "orange", "purple", "yellow", "grey", "black", "brown", "magenta"];
            let randomColor = colors[Math.floor(Math.random() * colors.length)];
            this.color = randomColor;
        }
        draw() {
            //Ski
            skipiste.crc2.beginPath();
            skipiste.crc2.fillStyle = "black";
            skipiste.crc2.fillRect(this.position.x, this.position.y, 40, 6);
            skipiste.crc2.closePath();
            //Head
            skipiste.crc2.beginPath();
            skipiste.crc2.fillStyle = "pink";
            skipiste.crc2.arc(this.position.x + 15, this.position.y - 40, 5, 0, 2 * Math.PI);
            skipiste.crc2.fill();
            skipiste.crc2.closePath();
            //Body
            skipiste.crc2.beginPath();
            skipiste.crc2.fillStyle = this.color;
            skipiste.crc2.fillRect(this.position.x + 10, this.position.y - 30, 15, 30);
            skipiste.crc2.fill();
            skipiste.crc2.closePath();
        }
        move() {
            //console.log("move skier");
            this.position.add(this.velocity);
            //console.log(this.position);
            if (this.position.y > 600) {
                this.position.y = 225 + Math.random() * 20;
                this.position.x = 800;
            }
            if (this.position.x < 0) {
                this.position.x = 800;
            }
        }
    }
    skipiste.Skier = Skier;
})(skipiste || (skipiste = {}));
//# sourceMappingURL=skier.js.map