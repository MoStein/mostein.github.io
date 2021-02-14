"use strict";
var silvester;
(function (silvester) {
    console.log("main here, how're you doing?");
    let form;
    let url = "https://ikaja.herokuapp.com/";
    window.addEventListener("load", handleLoad);
    let canvas;
    let fireworks = [];
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
        alert(responseText);
    }
    silvester.sendFireWork = sendFireWork;
    async function retrieveFireworks() {
        let response = await fetch(url + "?" + "command=retrieve"); //url + "?" + "command=retrieve"
        let savedArray = (JSON.parse(await response.text()));
        console.log(savedArray.length);
        console.log(savedArray);
        let select = document.getElementById("saved");
        for (let i = 0; i < savedArray.length; i++) {
            let options = savedArray[i];
            let element = document.createElement("option");
            element.textContent = options.fireworkname;
            select.appendChild(element);
            select.addEventListener("change", recreateFirework);
        }
        function recreateFirework(_event) {
            let saved = savedArray[select.selectedIndex];
            console.log(saved.fireworklifetime);
            let nameTarget = document.getElementById("name");
            nameTarget.value = saved.fireworkname;
            let typeTarget = document.getElementById("type");
            typeTarget.value = saved.fireworktype;
            let colorTarget = document.getElementById("colour");
            colorTarget.value = saved.fireworkcolour;
            let speedTarget = document.getElementById("speed");
            speedTarget.value = saved.fireworkspeed;
            let amountTarget = document.getElementById("amount");
            amountTarget.value = saved.fireworkamount;
            let particleTarget = document.getElementById("pSize");
            particleTarget.value = saved.fireworkparticle;
            let lifeTimeTarget = document.getElementById("lifetime");
            lifeTimeTarget.value = saved.fireworklifetime;
        }
    }
})(silvester || (silvester = {}));
//# sourceMappingURL=main.js.map