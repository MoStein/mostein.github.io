namespace aufgabe13 {
    export class Foodistsogut extends BewegteDinge {
        ofType: string;
        foodTime: number;



        constructor(_xK: number, _yK: number) {  //Constructor konstruiert objekte. wird erinmal durchgegangen wenn objekt ausgeführt wird
            super();
            this.x = _xK;
            this.y = _yK;
            this.dx = Math.random();
            this.dy = Math.random() * (20 - 2) + 10;      ///Geschw. und richtung von essen
            this.ofType = "Futter";
            this.foodTime = 125 + Math.random()* 50;


        }

        draw(): void {
            let nom: Path2D = new Path2D();
            nom.arc(this.x, this.y, 7, Math.PI, 2 * Math.PI);  /// Aussehen essen
            crc.strokeStyle = "brown";
            crc.fillStyle = "brown";
            crc.fill(nom);
            crc.stroke(nom);
        }

        move(): void {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y > 580) {
                this.y = 580;
                this.x = this.x -= this.dx;
            }
        }

        update(): void {
            if (this.foodTime <= 0) {
                allesArray.splice(allesArray.length - 1, 1);

            }
            else {
                super.update();
                this.foodTime -= 1;
            }

        }
    }
}
