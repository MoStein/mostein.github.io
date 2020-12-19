namespace skipiste {
    export class Skier {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;

        constructor (_x: number, _y:number, _dx: number, _dy: number, _color: string){
            console.log("constructor skier");
            this.x = _x;
            this.y = _y;
            this.dx = _dx;
            this.dy = _dy;
            this.color = _color;
            
        }
        draw (){
            console.log("draw skier");

            crc2.fillStyle = this.color;
            crc2.fillRect(this.x, this.y, 9, - 25);

            crc2.beginPath();
            crc2.arc(this.x + 5, this.y - 25, 7, 0, 2 * Math.PI);
            crc2.fillStyle = this.color;
            crc2.fill();

            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.moveTo(this.x + 20, this.y - 4);
            crc2.lineTo(this.x - 20, this.y + 4);
            crc2.stroke();
            
        }
        move(){
            console.log("move skier");

            crc2.fillStyle = this.color;
            crc2.fillRect(this.x, this.y, 9, - 25);

            crc2.beginPath();
            crc2.arc(this.x + 5, this.y - 25, 7, 0, 2 * Math.PI);
            crc2.fillStyle = this.color;
            crc2.fill();

            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.moveTo(this.x + 20, this.y - 4);
            crc2.lineTo(this.x - 20, this.y + 4);
            crc2.stroke();
        }
        update(): void {
            console.log("move Skifahrer.ts");
            this.move();
            this.draw();
        }
    
    }
}