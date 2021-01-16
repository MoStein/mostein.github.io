namespace skipiste {
    export abstract class Moveable {
        public position: Vector;
        public velocity: Vector;
        protected hitRadius: number = 0;
        

        constructor(_position: Vector, _size?: Vector) {

            let x: number = 800 * Math.random();
            let y: number = 600 * Math.random();
            this.position = new Vector(x,y);
            this.velocity = new Vector(0, 0);
            
        }

        public move(): void {


            this.position.add(this.velocity);
            console.log(this.position);

            if (this.position.y > 600){
                this.position.y = 0;
            }
            if (this.position.x < 0){
                this.position.x = 800;
            }



        }


        public abstract draw(): void;
        
    }
}
