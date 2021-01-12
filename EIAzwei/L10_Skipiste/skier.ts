namespace skipiste {
    export class Skier extends Moveable {
        position: Vector;
        
        color: string;

        constructor (_position: Vector, _size: Vector){
            super (_position, _size);
            console.log("constructor skier");
            
            
        }
        draw (){
            //console.log("draw skier");

            
        }
        //move(){
         //   console.log("move skier");

           
        //}
        
    
    }
}