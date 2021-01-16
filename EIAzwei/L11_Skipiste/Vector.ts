namespace skipiste{
    export class Vector{
        public x: number;
        public y: number;
        public length: number;

        constructor(_x: number, _y: number){
            this.x = _x;
            this.y = _y;
            this.calcLength();
        }

        public calcLength(): void{
            this.length = Math.sqrt((this.x*this.x)+(this.y*this.y));
        }
        public add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
}