namespace aufgabe13 {
    export class vogel extends BewegteDinge {
        ofType: string;

        //Vogel wird gezeichnet
        constructor(_x: number, _y: number) {
            super();
            this.x = _x * (20 - 10) + 20;
            this.y = _y * (350 - 100) + 100;
            this.dx = _x * -10;
            this.dy = 0;
            this.ofType = "kleinerVogel";
        }

        draw(): void {
            let KörperV = new Path2D();
            KörperV.moveTo(this.x, this.y);
            KörperV.quadraticCurveTo(this.x - 7.5, this.y + 37.5, this.x - 75, this.y);
            KörperV.moveTo(this.x, this.y);
            KörperV.quadraticCurveTo(this.x - 25, this.y - 50, this.x - 75, this.y);
            aufgabe13.crc.strokeStyle = "black";
            aufgabe13.crc.lineWidth = 3;
            aufgabe13.crc.fillStyle = "red";
            aufgabe13.crc.stroke(KörperV);
            aufgabe13.crc.fill(KörperV);

            let Flugel = new Path2D();
            Flugel.moveTo(this.x, this.y);
            Flugel.quadraticCurveTo(this.x - 7.5, this.y + 15, this.x - 75, this.y);
            Flugel.moveTo(this.x, this.y);
            Flugel.quadraticCurveTo(this.x - 25, this.y - 35, this.x - 75, this.y);
            aufgabe13.crc.strokeStyle = "black";
            aufgabe13.crc.lineWidth = 1.5;
            aufgabe13.crc.fillStyle = "red";
            aufgabe13.crc.stroke(Flugel);
            aufgabe13.crc.fill(Flugel);


            let vogelchen = new Path2D();
            vogelchen.arc(this.x - 5, this.y, 32.5, 12.5, 22.5 * Math.PI);
            aufgabe13.crc.strokeStyle = "black";
            aufgabe13.crc.lineWidth = 1.5;
            aufgabe13.crc.fillStyle = "red";
            aufgabe13.crc.stroke(vogelchen);
            aufgabe13.crc.fill(vogelchen);

            let VogelAuge = new Path2D();
            VogelAuge.arc(this.x - 7.5, this.y, 5.5, 0, 20 * Math.PI);
            aufgabe13.crc.fillStyle = "white";
            aufgabe13.crc.strokeStyle = "black";
            aufgabe13.crc.stroke(VogelAuge);
            aufgabe13.crc.fill(VogelAuge);
            let augeInnen = new Path2D();

            augeInnen.arc(this.x - 7.5, this.y, 4 , 0, 1 * Math.PI);
            aufgabe13.crc.fillStyle = "black";
            aufgabe13.crc.fill(augeInnen);
        }
        move() {
            this.x -= this.dx;
            this.y -= this.dy;
            if (this.x > 900) {
                this.x = 0 + this.dx;
            }
            if (this.x < 0 - 300) {
                this.x = 900 + this.dx;
            }
        }
    }

}
