namespace skipiste {
    export class Moveable {
        position: Vector;
        size: Vector;
        velocity: Vector
        particle: Path2D;
        check: number = 0;

        constructor(_position: Vector, _size: Vector) {

            let x: number = 800 * Math.random();
            let y: number = 600 * Math.random();
            this.position = new Vector(x,y);
            this.velocity = new Vector(0, 0);
            this.size = _size;
            this.particle = new Path2D();
        }

        move(): void {
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

            if (this.position.y > 600){
                this.position.y = 0;
            }
            if (this.position.x < 0){
                this.position.x = 800;
            }



        }


        draw(): void {
            // leer
        }
    }
}
