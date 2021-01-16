namespace skipiste {
    export class Skier extends Moveable {
        color: string;

        

        constructor (_position?: Vector, _size?: Vector){
            super (_position, _size);
            console.log("constructor skier");

            // let x: number = 800 * Math.random();
             let y: number = 250 + Math.random()* 10;
            this.position = new Vector (800, y);
            

            let a: number = -1 + Math.random()* (-2);
            let b: number =  Math.random()*3.5;
            this.velocity = new Vector(a, b);

            let colors: string [] = ["red", "green", "blue", "orange", "purple","yellow", "grey", "black", "brown", "magenta"];
            let randomColor = colors[Math.floor(Math.random()* colors.length)];
            
            this.color = randomColor;
        }
        draw (){
            

            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.fillRect(this.position.x, this.position.y, 40, 4);
            crc2.closePath();

            crc2.beginPath();
            crc2.fillStyle = "pink";
            crc2.arc(this.position.x + 15, this.position.y -40, 5, 0, 2*Math.PI);
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.fillRect(this.position.x + 10, this.position.y -30, 15, 30);
            crc2.fill();
            crc2.closePath();
            

            
        }
        move(){
           //console.log("move skier");
           this.position.add(this.velocity);
            //console.log(this.position);


            if (this.position.y > 600){
                this.position.y = 225 + Math.random()*20;
                this.position.x =800;
            }
            if (this.position.x < 0){
                this.position.x = 800;
            }
           
        }
        
    
    }
}