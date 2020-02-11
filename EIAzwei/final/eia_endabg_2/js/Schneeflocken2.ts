namespace aufgabe13 {
    export class schnee2 extends BewegteDinge {
        ofType: string;

        constructor(_x: number, _y: number) {
            super();
            this.x = _x * (850 - 50) + 50;
            this.y = _y * (600 - 0) + 0;
            this.dx = 0;
            this.dy = 0.3 * 5;
            this.ofType = "foodImCanvas";
        }

        draw(): void {
            let blubaußen: Path2D = new Path2D();
            blubaußen.arc(this.x, this.y, 5, 0, 2 * Math.PI);   //////SCHNEE
            crc.fillStyle = "white";
            crc.fill(blubaußen);

            let blub: Path2D = new Path2D();
            blub.arc(this.x, this.y, 4, 0, 2 * Math.PI);       ////SCHNEE
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
            if (this.y > 600) {
                this.y = 0 + this.dy;
            }
        }
    }
}