namespace skipiste {

    export let crc2: CanvasRenderingContext2D;

    let moveables: Moveable[] = [];
    let imageData: ImageData;


    window.addEventListener("load", handleLoad);
    let canvas: HTMLCanvasElement;




    function handleLoad(_event: Event): void {
        console.log("Hi");
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");

        drawBackground();
        drawSun(new Vector(100, 75));
        drawPist();
        drawHouse();
        drawLift();
        drawTree();
        imageData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        
        createSkier(10);
        createSnow(50);

        canvas.addEventListener("click", handleClick);

        window.setInterval(update, 20);



    }
    function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(1, "white");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        crc2.closePath();

    }




    function drawSun(_position: Vector): void {
        console.log("Sun", _position);
        let r1: number = 30;
        let r2: number = 150;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore()

    }
    function drawPist(): void {
        console.log("Piste");
        crc2.fillStyle = "white";
        crc2.strokeStyle = "white";
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(0, 600);
        crc2.lineTo(0, 450);
        crc2.lineTo(800, 225);
        crc2.lineTo(800, 600);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.restore();
    }
    function drawLift() {
        console.log("Lift");
        crc2.fillStyle = "black";
        crc2.strokeStyle = "black";
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(95, 360);
        crc2.lineTo(800, 180);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.restore();

    }
    function drawHouse() {
        console.log("House");
        crc2.fillStyle = "brown";
        crc2.strokeStyle = "brown";
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(20, 460);
        crc2.lineTo(20, 360);
        crc2.lineTo(60, 340);
        crc2.lineTo(100, 360);
        crc2.lineTo(100, 460);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.restore();
    }
    function drawTree(): void {
        console.log("Trees");


        crc2.beginPath();
        crc2.moveTo(90, 450);
        crc2.lineTo(110, 370);
        crc2.lineTo(130, 450);
        crc2.closePath();

        crc2.fillStyle = "green";
        crc2.fill();
        crc2.save();


        crc2.beginPath();
        crc2.moveTo(210, 400);
        crc2.lineTo(230, 340);
        crc2.lineTo(250, 400);
        crc2.closePath();

        crc2.fillStyle = "darkgreen";
        crc2.fill();
        crc2.save();


        crc2.restore();

    }

    function createSkier(_nSkier: number): void {
        console.log("create Skier");
        for (let i: number = 0; i < _nSkier; i++) {
            let skier: Skier = new Skier();
            moveables.push(skier);
            console.log(moveables);
        }
    }
    function createSnow(_nSnowflake: number): void {
        console.log("create Snow");
        for (let i: number = 0; i < _nSnowflake; i++) {
            let snow: Snowflake = new Snowflake();
            moveables.push(snow);
            console.log(moveables);
        }

    }
    function handleClick(_event: MouseEvent): void {
        console.log("Skier kill");

        //let hitRadius: number = 20;
        let hotspot: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
        let skierKill: Skier | null = getSkierKill(hotspot);
        console.log(hotspot);
        if (skierKill) 
        killSkier(skierKill);
        
    }
    function getSkierKill(_hotspot: Vector): Skier | null {
        console.log("get skier kill");
        for (let moveable of moveables){
            if (moveable instanceof Skier && moveable.isHit(_hotspot))
            return moveable;
        }
        return null;
    }
    function killSkier(_skier: Skier): void {
        console.log("kill skier");
        if (_skier.isHit(_hotspot)){
            _skier.position.x = 800
            _skier.position.y = 225 + Math.random()*20;
        }
        
    }
    
    function update(): void {
        console.log("Update");
        crc2.putImageData(imageData, 0, 0);

        for (let i: number = 0; i< moveables.length; i++) {
            moveables[i].move(); 
            moveables[i].draw();
        }
    }



}



