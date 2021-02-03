namespace silvester {
    export class Firework{

        public position: Vector;
        public color: string;
        public radius: number;
        public particleRadius: number;
        private lifeTime: number;

        protected particleArray: Particle[] = []; 




        constructor(_position: Vector,_type:string, _color: string, _speed: number, _particleRadius: number, _lifetime: number){
            console.log(_lifetime);
            this.color = _color;
            this.position = _position;
            this.particleRadius = _particleRadius; 
            this.lifeTime = _lifetime;

            switch (_type){
            case "circle": 
            for (let i:number = 0; i < 20; i++){
                this.particleArray.push(new Circle (this.position,Vector.getuberVector(_speed, Vector.getRandom(-1,1))));
            }
            break;

            case "cone": 
            for (let i:number = 0; i < 20; i++){
                this.particleArray.push(new Cone (this.position,Vector.getuberVector(_speed, Vector.getRandom(-1,1))));
            }
            break;

            case "heart": 
            for (let i:number = 0; i < 20; i++){
                this.particleArray.push(new Heart (this.position,Vector.getuberVector(_speed, Vector.getRandom(-1,1))));
            }
            break;

            case "arch": 
            //createCircle();

            default: console.log("Diesen Typ gibt es nicht");
            return; }

        
            

            
        }
        public draw(): void {

            for (let i:number = 0; i < this.particleArray.length; i++){

                this.particleArray[i].draw(this.color, this.particleRadius);
            }


        }
        public update(): void {
            console.log(this.lifeTime);
            this.lifeTime--;
            for (let i: number = 0; i <this.particleArray.length; i++){
                this.particleArray[i].move();
                        }

        }
        public isAlive(): boolean {
            if (this.lifeTime ==0){
                return false;
            } 
            else {
                return true;
            }
        }
        

    }
    
    
}