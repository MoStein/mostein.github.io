namespace skipiste {
    export class Snowflake extends Moveable {
        

        constructor (_size?: Vector, _position?: Vector){
            console.log("constructor snowflake");

            super (_position, _size, );

            let x: number = 800 * Math.random();
            let y: number = 600 * Math.random();
            this.position = new Vector (x, y);

            this.velocity = new Vector(0, 5);


        }
        public draw (): void {

            crc2.beginPath();
            crc2.save();

            crc2.translate(this.position.x, this.position.y);
            let radiusParticle: number = Math.random() * 5;
            crc2.arc(0,0, radiusParticle, 0, 2 * Math.PI);

            
            crc2.fillStyle = "lightgrey";

           // let x: number = this.size.x;
            //let y: number = this.size.y; 
            //crc2.translate(x, y);
            crc2.fill();
            crc2.restore();
            
            crc2.closePath();

            
        }
       // move (): void; //{
         //   console.log("move snowflake");
        //    this.size.y -= 2;

         //   if (this.size.y < - crc2.canvas.height){
         //       this.size.y = 0;
        //    }
           
        //}
    }
}