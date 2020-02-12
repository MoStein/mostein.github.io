namespace aufgabe13 {
    export class SchneeFall extends BewegteDinge {
        ofType: string;

        constructor(_x: number, _y: number) {
            super();
            this.x = _x * 1000
            this.y = _y * 5000
            this.dx = 0;
            this.dy = 0.1 * +10;                    //geschwindigkeit der Schneeflocke
            this.ofType = "blubberblasen";
        }

        draw(): void {
            let blubaußen: Path2D = new Path2D();
            blubaußen.arc(this.x, this.y, 9, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.fill(blubaußen);

            let blub: Path2D = new Path2D();
            blub.arc(this.x, this.y, 7, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.fill(blub);
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y < 0) {
                this.y = 900 + this.dy;
            }
        }
    }
}