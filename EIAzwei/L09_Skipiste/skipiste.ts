namespace skipiste {

    export let crc2 : CanvasRenderingContext2D;

    let skiers: Skier[] = [];
    let snowing: Snowflake[] = [];
    
    let imgData: ImageData;
    
    
    window.addEventListener("load", handleLoad);
    let canvas: HTMLCanvasElement;
    



    function handleLoad(_event: Event): void {
        console.log("Hi");
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");

        //let imageData: ImageData;
        

        drawBackground();
        drawSun(new Vector (100, 75));
        drawPist();
        drawHouse();
        drawLift();
        drawTree();
        //drawSnow({x: 800, y:600},{x: 1800, y:600});

        //createSkier(12);
        //createSnow(500);

        window.setInterval(update, 20);

        for (let i: number = 0; i < 5000; i++) {
            snowing[i] = new Snowflake(Math.random() * 800, Math.random() * 600);
            console.log("it's snowing");
        }
        for (let i: number = 0; i < 20; i++) {
            skiers[i] = new Skier(Math.random() * 500 + 750,
                                             Math.random() * 200 - 25,
                                             Math.random() * 1.5 - 3.5,
                                             Math.random() * 1 + 1,
                                             "hsl(" + Math.random() * 360 + ", 100%, 50%)");
            console.log("for Skifahrer init");

            create();
        }
        
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
    function drawTree(): void {
        console.log("Trees");

        
        crc2.beginPath();
        crc2.moveTo(550, 600);
        crc2.lineTo(600, 425);
        crc2.lineTo(650, 600);
        crc2.closePath();

        crc2.fillStyle = "green";
        crc2.fill();
        crc2.save();

        
        crc2.beginPath();
        crc2.moveTo(100, 600);
        crc2.lineTo(135, 425);
        crc2.lineTo(170, 600);
        crc2.closePath();

        crc2.fillStyle = "darkgreen";
        crc2.fill();
        crc2.save();

        
        crc2.beginPath();
        crc2.moveTo(525, 600);
        crc2.lineTo(550, 500);
        crc2.lineTo(575, 600);
        crc2.closePath();

        crc2.fillStyle = "darkgreen";
        crc2.fill();

        crc2.save();     
 
        crc2.restore();

    }
    function create (){
        for (let i: number = 0; i < snowing.length; i++) {
            snowing[i].update();
        }
        for (let i: number = 0; i < skiers.length; i++) {
            skiers[i].update();
        }

    }
    //function createSkier(_nSkier: number): void{
    //    console.log("create Skier");
    //    for (let i: number = 0; i < _nSkier; i++) {
    //        let x: number = Math.random() * (300 - 150) + 150;
    //        let skier: Skier = new Skier(1.0, x, 300);
     //       skiers.push(skier);
    //}
    //function createSnow(_nSnowflake: number): void{
    //    console.log("create Snow");
     //   for (let i: number = 0; i < _nSnowflake; i++){
     //       let x: number = Math.random() * (300 - 150) + 150;
     //       let snow: Snowflake = new Snowflake(x, 300);
     //       snowing.push(snow);
      //  }

    //}
    //function drawSkier(): void {
          //  console.log("Skier");

          //  let skier: number = 20;
      //  console.log("ski1");
      //  for (let drawn: number = 0; drawn < skier; drawn++) {

         //   let x: number = Math.random() * (800 - 300) + 300;
        //    let y: number = Math.random() * (500 - 200) + 200;
        //    drawSki(x, y);
        //    crc2.fill();

    //}
   // function drawSki(x: number, y: number): void {
       // console.log("hey");
     //   crc2.save();
      //  let colors: string[] = ["red", "darkblue", "lightgreen", "darkviolet", "blue", "yellow"];
     //   let random: string = colors[Math.floor(Math.random() * colors.length)];
      //  crc2.fillStyle = random;
      //  crc2.strokeStyle = "black";
      //  console.log(random);
      //  let radius2: number = 5;
      //  console.log("xy" + x + " " + y);
      //  crc2.beginPath();
      //  crc2.moveTo(x, y);
      //  crc2.lineTo(x - 5, y + 25);
       // crc2.lineTo(x + 15, y + 25);
       // crc2.lineTo(x + 5, y);
       // crc2.arc(x + 5, y, radius2, 0, 2 * Math.PI);
       // crc2.lineTo(x - 5, y + 25);

       // crc2.closePath();
       // crc2.fill();

       // crc2.beginPath();
       // crc2.moveTo(x, y + 25);
       // crc2.lineTo(x - 25, y + 40);
        //crc2.lineTo(x - 20, y + 40);
       // crc2.lineTo(x + 5, y + 25);
       // crc2.lineTo(x - 5, y + 25);

       // crc2.lineTo(x + 10, y + 25);
       // crc2.lineTo(x - 15, y + 40);
       // crc2.lineTo(x - 10, y + 40);
        //crc2.lineTo(x + 15, y + 25);
        //crc2.lineTo(x, y + 25);
        //crc2.closePath();
       // crc2.fill();
       // crc2.stroke();

       // crc2.restore();
    //}
    
    //function update(): void {
     //   console.log("Update");
     //   crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

     //   for (let skier of skiers) {
     //       skier.move(); //1 / 50
     //       skier.draw();
    //    }
    window.setTimeout(create, 20);
    
    
}

    

