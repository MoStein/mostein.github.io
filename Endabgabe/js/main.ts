namespace silvester {
    
    console.log("main here, how're you doing?");
    export let crc2: CanvasRenderingContext2D;

    window.addEventListener("load", handleLoad);
    let canvas: HTMLCanvasElement;

    let fireworks: Firework [] = [];

    let fps: number = 100;

    async function handleLoad(_event: Event):Promise<void> {
        console.log("Load");

        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");

        let btnSubmit: HTMLElement = document.getElementById("submit");

        canvas.addEventListener("click", handleCanvasClick);
        btnSubmit.addEventListener("click", sendFireWork);

        crc2.fillStyle = "black";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        crc2.fill

        window.setInterval(update, 1000/fps);

    }
    
    function handleCanvasClick(_event: MouseEvent): void {

        let tempPosition: Vector = new Vector(_event.offsetX, _event.offsetY);

        createFirework(tempPosition);

    }
    export async function sendFireWork(_event: MouseEvent):Promise<void> {
        console.log("submit fire work");
        // let url : string = "https://hyfolia.herokuapp.com/send"
    }
    function createFirework (tempPosition: Vector){
        console.log("create firework");

        let sound = document.querySelector("audio");
        sound.play();

        let typeTarget: HTMLElement = document.getElementById("type");
        let typeValue = typeTarget.value;

        let colorTarget: HTMLElement = document.getElementById("colour");
        let colorValue = colorTarget.value;

        let radiusTarget: HTMLElement = document.getElementById("size");
        let radiusValue = radiusTarget.value; 

        let amountTarget: HTMLElement = document.getElementById("amount");
        let amountValue = amountTarget.value;

        let particleTarget: HTMLElement = document.getElementById("pSize");
        let particleValue = particleTarget.value;

        let lifeTimeTarget: HTMLElement = document.getElementById("lifetime");
        let lifeTimeValue = lifeTimeTarget.value;
        
        let firework: Firework = new Firework(tempPosition, typeValue, colorValue, radiusValue, amountValue, particleValue, lifeTimeValue*fps);
        fireworks.push(firework);
    }
    
    function update (){
        crc2.globalAlpha = 0.05;
        crc2.fillStyle = "black";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        crc2.fill
        crc2.globalAlpha = 1;
        

        for (let i: number = fireworks.length -1; i >= 0; i--){
            fireworks[i].draw();
            fireworks[i].update();
            if(!fireworks[i].isAlive()){
                fireworks.splice(i,1);
            }
        }
    }

}