"use strict";
var silvester;
(function (silvester) {
    console.log("main here, how're you doing?");
    let form;
    let url = "https://ikaja.herokuapp.com/";
    // let url: string = "http://localhost:5002"; 
    window.addEventListener("load", handleLoad);
    let canvas;
    let fireworks = [];
    let savedArray = [];
    let fps = 100;
    //Load
    async function handleLoad(_event) {
        console.log("Load");
        form = document.getElementById("form");
        canvas = document.querySelector("canvas");
        silvester.crc2 = canvas.getContext("2d");
        let btnSubmit = document.getElementById("submit");
        canvas.addEventListener("click", handleCanvasClick);
        btnSubmit.addEventListener("click", sendFireWork);
        silvester.crc2.fillStyle = "black";
        silvester.crc2.fillRect(0, 0, canvas.width, canvas.height);
        silvester.crc2.fill;
        window.setInterval(update, 1000 / fps);
        retrieveFireworks();
        createOptions();
    }
    //Canvas 
    function handleCanvasClick(_event) {
        let tempPosition = new silvester.Vector(_event.offsetX, _event.offsetY);
        createFirework(tempPosition);
    }
    function createFirework(tempPosition) {
        console.log("create firework");
        let sound = document.querySelector("audio");
        sound.play();
        let typeTarget = document.getElementById("type");
        let typeValue = typeTarget.value;
        let colorTarget = document.getElementById("colour");
        let colorValue = colorTarget.value;
        let speedTarget = document.getElementById("speed");
        let speedValue = speedTarget.value;
        let amountTarget = document.getElementById("amount");
        let amountValue = amountTarget.value;
        let particleTarget = document.getElementById("pSize");
        let particleValue = particleTarget.value;
        let lifeTimeTarget = document.getElementById("lifetime");
        let lifeTimeValue = lifeTimeTarget.value;
        let firework = new silvester.Firework(tempPosition, typeValue, colorValue, speedValue, amountValue, particleValue, lifeTimeValue * fps);
        fireworks.push(firework);
    }
    function update() {
        silvester.crc2.globalAlpha = 0.05;
        silvester.crc2.fillStyle = "black";
        silvester.crc2.fillRect(0, 0, canvas.width, canvas.height);
        silvester.crc2.fill;
        silvester.crc2.globalAlpha = 1;
        for (let i = fireworks.length - 1; i >= 0; i--) {
            fireworks[i].draw();
            fireworks[i].update();
            if (!fireworks[i].isAlive()) {
                fireworks.splice(i, 1);
            }
        }
    }
    //Server & Database
    async function sendFireWork(_event) {
        console.log("submit fire work");
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "?" + query.toString());
        let responseText = await response.text();
        savedArray.push(JSON.parse(await response.text()));
        alert(responseText);
    }
    silvester.sendFireWork = sendFireWork;
    async function retrieveFireworks() {
        // let retrieveUrl: string = "https://ikaja.herokuapp.com/retrieve";
        let response = await fetch(url + "?" + "command=retrieve");
        savedArray.push(JSON.parse(await response.text()));
        // let responseText : string = await response.text();
        // savedArray.push(responseText);
    }
    async function createOptions() {
        let select = document.getElementById("saved");
        for (let i = 0; i < savedArray.length; i++) {
            let options = savedArray[i];
            let element = document.createElement("option");
            element.textContent = options.fireworkcolor;
            element.value = options.fireworklifetime;
            select.appendChild(element);
            element.addEventListener("click", recreateFirework);
        }
    }
    function recreateFirework(_event) {
        let g = savedArray.keys();
        for (let key of g) {
            savedArray[key];
            // let nameTarget: HTMLTextAreaElement = <HTMLTextAreaElement>document.getElementById("name";
            // nameTarget.value = g.fireworkname;
            let typeTarget = document.getElementById("type");
            typeTarget.value = g.fireworktype;
            let colorTarget = document.getElementById("colour");
            colorTarget.value = g.fireworkcolor;
            let speedTarget = document.getElementById("speed");
            speedTarget.value = g.fireworkspeed;
            let amountTarget = document.getElementById("amount");
            amountTarget.value = g.fireworkamount;
            let particleTarget = document.getElementById("pSize");
            particleTarget.value = g.fireworkparticle;
            let lifeTimeTarget = document.getElementById("lifetime");
            lifeTimeTarget.value = g.fireworklifetime;
        }
    }
})(silvester || (silvester = {}));
//# sourceMappingURL=main.js.map