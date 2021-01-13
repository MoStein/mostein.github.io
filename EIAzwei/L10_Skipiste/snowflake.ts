namespace skipiste {
    export class Snowflake extends Moveable {
        

        constructor (_size?: Vector, _position?: Vector){
            console.log("constructor snowflake");

            super (_position, _size, );

            let x: number = 800 * Math.random();
            let y: number = 600 * Math.random();
            this.position = new Vector (x, y);

            this.position = new Vector(0, 5);


            //if(_position)
             //  this.position = _position;
            //else
             //  this.position = new Vector(0,0);

            // this.size = _size;
            // this.particle = new Path2D();

        }
        draw (): void {
            //console.log("draw snowflake");

            crc2.beginPath();
            crc2.save();
            let radiusParticle: number = Math.random() * 20;
            crc2.arc(0,0, radiusParticle, 0, 2 * Math.PI);

            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = "lightgrey";

           // let x: number = this.size.x;
            //let y: number = this.size.y; 
            //crc2.translate(x, y);
            crc2.fill();
            crc2.restore();
            
            crc2.closePath();

            
        }
        //move (): void {
         //   console.log("move snowflake");
        //    this.size.y -= 2;

         //   if (this.size.y < - crc2.canvas.height){
         //       this.size.y = 0;
        //    }
           
        //}
    }
}