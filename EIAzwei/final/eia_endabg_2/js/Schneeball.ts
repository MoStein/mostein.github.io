namespace aufgabe13 {
    export class werfen extends AlleObjekte {
        groesse: number;
        Fadenkreutz: number;
        ofType: string;
        color: string;

        constructor(_x: number, _y: number) {
            super();
            this.x = _x;
            this.y = _y;
            this.Fadenkreutz = 50;
            

            this.ofType = "GrossSchneeball";
        
        
        }

        //Die Anpassung der Grösse des Schneeballs
        draw(): void {
          

            let schneeball: Path2D = new Path2D();
            schneeball.arc(this.x - 10, this.y, 25, 0, 2 * Math.PI);
            schneeball.arc(this.x - 10, this.y, this.Fadenkreutz, 0, 2 * Math.PI);
            crc.fillStyle = "rgba(220,160,140,0.5)";
            crc.strokeStyle = "black";
            crc.stroke(schneeball);
            crc.fill(schneeball);

            let innererFokus: Path2D = new Path2D();
            innererFokus.arc(this.x - 10, this.y, 2, 0, 2 * Math.PI);
            crc.fillStyle = "rgba(220,purple,140,0.5)";
            crc.strokeStyle = "black";
            crc.stroke(innererFokus);
            crc.fill(innererFokus);

            let kreutz: Path2D = new Path2D();
            crc.fillStyle = "black";
            crc.fillRect(this.x - 10.2, this.y - 65, 0.5,130);
            crc.fillRect(this.x - 75, this.y - 0, 130,0.5);
            crc.fill(kreutz);

          

            
        }



    }}