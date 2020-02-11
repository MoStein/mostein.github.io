namespace aufgabe13 {
    export class BewegteDinge extends AlleObjekte {
        dx: number;
        dy: number;

        constructor() {
            super();
            //
        } 

        draw(): void {
            //
        }

        update(): void {
            this.move();
            this.draw();
            this.throw();
        }

        move(): void {
            this.x += this.dx;
            this.y += this.dy;
        }

        throw() {
            //
        }
    }
}