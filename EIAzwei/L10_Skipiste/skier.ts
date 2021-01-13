namespace skipiste {
    export class Skier extends Moveable {
        color: string;

        constructor (_position?: Vector, _size?: Vector){
            super (_position, _size);
            console.log("constructor skier");

            let x: number = 800 * Math.random();
            let y: number = 600 * Math.random();
            this.position = new Vector (x, y);

            this.position = new Vector(-3, 5);
            
            
        }
        draw (){
            //console.log(this.position.x, this.position.y);

            crc2.beginPath();
            crc2.rect(this.position.x, this.position.y, 12, 6);
            crc2.fillStyle = "red";
            crc2.fillRect;
            crc2.closePath();
            

            
        }
        //move(){
         //   console.log("move skier");

           
        //}
        
    
    }
}