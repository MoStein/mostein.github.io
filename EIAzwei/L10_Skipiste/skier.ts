namespace skipiste {
    export class Skier extends Moveable {
        position: Vector;
        
        color: string;

        constructor (_position?: Vector, _size?: Vector){
            super (_position, _size);
            console.log("constructor skier");
            
            
        }
        draw (){
            //console.log("draw skier");

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