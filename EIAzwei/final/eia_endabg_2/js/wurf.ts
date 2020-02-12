namespace aufgabe13 {
    export class werfen2 extends BewegteDinge {
        groesse: number;
        WurfSchnee: number;
        ofType: string;
        color: string;
        radius: number;

        constructor(_x: number, _y: number) {
            super();
            this.x = _x;
            this.y = _y;
            this.WurfSchnee = 50;
            this.dx = 0;
            this.dy = -10;
            this.radius = 25;
            this.ofType = "schneeball";


            

            this.ofType = "GrossSchneeball";
        
        
        }
        //Schneeball wird gezeichnet 
        draw(): void {
          
            if (this.radius >= 0) {
                let wurfBall: Path2D = new Path2D();
                wurfBall.arc(this.x -10, this.y , this.radius, 0, 2 * Math.PI);
                crc.fillStyle = "white";
                crc.strokeStyle = "black";
                crc.stroke(wurfBall);
                crc.fill(wurfBall);
            }

            
        }

        throw(): void {
            if (this.radius >= 0) this.radius -= 1;
        }



    }}