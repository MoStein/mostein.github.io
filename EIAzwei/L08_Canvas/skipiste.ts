namespace skipiste {
    interface Vector {
        x: number;
        y: number;
    }
    window.addEventListener("load", handleLoad);
    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;



    function handleLoad(_event: Event): void {
        console.log("Hi");
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");

        let posMountains: Vector;

        drawBackground();
        drawSun({ x: 100, y: 75 });
        drawCloud({x: 550, y:80}, {x: 100, y:75});
        drawPist();
        drawHouse();
        drawLift();
        drawSkier();
        drawSnow({x: 800, y:600},{x: 1800, y:600});

    }
    function drawBackground(): void {
        console.log("Background");
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(1, "white");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

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
    function drawCloud(_position: Vector, _size: Vector): void {
        crc2.save();
        crc2.translate(_position.x, _position.y);

        let nParticles: number = 20;
        let radiusParticle: number = 50;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();


        crc2.restore();
        console.log("Cloud", _position);
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
    function drawLift (){
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
    function drawHouse (){
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
    function drawSkier(x: number, y: number): void{
        console.log("Skier");
        let color: string[] = ["green", "red","blue", "orange","purple"];
        let random: string = color[Math.floor(Math.random() * color.length)];
        crc2.fillStyle = random;
        crc2.strokeStyle = crc2.fillStyle;
        let radius: number = 5;
        crc2.beginPath();
        crc2.moveTo(x, y);
        crc2.lineTo(x - 5, y + 25);
        crc2.lineTo(x + 15, y + 25);
        crc2.lineTo(x + 5, y);
        crc2.arc(x + 5, y, radius, 0, 2 * Math.PI);
        crc2.lineTo(x - 5, y + 25);

        crc2.closePath();
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(x, y + 25);
        crc2.lineTo(x - 25, y + 40);
        crc2.lineTo(x - 20, y + 40);
        crc2.lineTo(x + 5, y + 25);
        crc2.lineTo(x - 5, y + 25);

        crc2.lineTo(x + 10, y + 25);
        crc2.lineTo(x - 15, y + 40);
        crc2.lineTo(x - 10, y + 40);
        crc2.lineTo(x + 15, y + 25);
        crc2.lineTo(x, y + 25);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.restore();
    }
    function drawSnow(_position: Vector, _size: Vector): void {
        console.log("Snowflake is drawing", _position, _size);

        let nParticles: number = 500;
        let radiusParticle: number = 2;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "Azure");
        gradient.addColorStop(0, "lightgrey");


        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
    }
}
