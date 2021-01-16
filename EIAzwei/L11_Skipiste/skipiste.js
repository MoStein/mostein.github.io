var skipiste;
(function (skipiste) {
    let moveables = [];
    let imageData;
    window.addEventListener("load", handleLoad);
    let canvas;
    function handleLoad(_event) {
        console.log("Hi");
        canvas = document.querySelector("canvas");
        skipiste.crc2 = canvas.getContext("2d");
        drawBackground();
        drawSun(new skipiste.Vector(100, 75));
        drawPist();
        drawHouse();
        drawLift();
        drawTree();
        imageData = skipiste.crc2.getImageData(0, 0, canvas.width, canvas.height);
        createSkier(10);
        createSnow(50);
        canvas.addEventListener("click", handleClick);
        window.setInterval(update, 20);
    }
    function drawBackground() {
        console.log("Background");
        let gradient = skipiste.crc2.createLinearGradient(0, 0, 0, skipiste.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(1, "white");
        skipiste.crc2.fillStyle = gradient;
        skipiste.crc2.fillRect(0, 0, skipiste.crc2.canvas.width, skipiste.crc2.canvas.height);
        skipiste.crc2.closePath();
    }
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 30;
        let r2 = 150;
        let gradient = skipiste.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        skipiste.crc2.save();
        skipiste.crc2.translate(_position.x, _position.y);
        skipiste.crc2.fillStyle = gradient;
        skipiste.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        skipiste.crc2.fill();
        skipiste.crc2.restore();
    }
    function drawPist() {
        console.log("Piste");
        skipiste.crc2.fillStyle = "white";
        skipiste.crc2.strokeStyle = "white";
        skipiste.crc2.save();
        skipiste.crc2.beginPath();
        skipiste.crc2.moveTo(0, 600);
        skipiste.crc2.lineTo(0, 450);
        skipiste.crc2.lineTo(800, 225);
        skipiste.crc2.lineTo(800, 600);
        skipiste.crc2.closePath();
        skipiste.crc2.fill();
        skipiste.crc2.stroke();
        skipiste.crc2.restore();
    }
    function drawLift() {
        console.log("Lift");
        skipiste.crc2.fillStyle = "black";
        skipiste.crc2.strokeStyle = "black";
        skipiste.crc2.save();
        skipiste.crc2.beginPath();
        skipiste.crc2.moveTo(95, 360);
        skipiste.crc2.lineTo(800, 180);
        skipiste.crc2.closePath();
        skipiste.crc2.fill();
        skipiste.crc2.stroke();
        skipiste.crc2.restore();
    }
    function drawHouse() {
        console.log("House");
        skipiste.crc2.fillStyle = "brown";
        skipiste.crc2.strokeStyle = "brown";
        skipiste.crc2.save();
        skipiste.crc2.beginPath();
        skipiste.crc2.moveTo(20, 460);
        skipiste.crc2.lineTo(20, 360);
        skipiste.crc2.lineTo(60, 340);
        skipiste.crc2.lineTo(100, 360);
        skipiste.crc2.lineTo(100, 460);
        skipiste.crc2.closePath();
        skipiste.crc2.fill();
        skipiste.crc2.stroke();
        skipiste.crc2.restore();
    }
    function drawTree() {
        console.log("Trees");
        skipiste.crc2.beginPath();
        skipiste.crc2.moveTo(90, 450);
        skipiste.crc2.lineTo(110, 370);
        skipiste.crc2.lineTo(130, 450);
        skipiste.crc2.closePath();
        skipiste.crc2.fillStyle = "green";
        skipiste.crc2.fill();
        skipiste.crc2.save();
        skipiste.crc2.beginPath();
        skipiste.crc2.moveTo(210, 400);
        skipiste.crc2.lineTo(230, 340);
        skipiste.crc2.lineTo(250, 400);
        skipiste.crc2.closePath();
        skipiste.crc2.fillStyle = "darkgreen";
        skipiste.crc2.fill();
        skipiste.crc2.save();
        skipiste.crc2.restore();
    }
    function createSkier(_nSkier) {
        console.log("create Skier");
        for (let i = 0; i < _nSkier; i++) {
            let skier = new skipiste.Skier();
            moveables.push(skier);
            console.log(moveables);
        }
    }
    function createSnow(_nSnowflake) {
        console.log("create Snow");
        for (let i = 0; i < _nSnowflake; i++) {
            let snow = new skipiste.Snowflake();
            moveables.push(snow);
            console.log(moveables);
        }
    }
    function handleClick(_event) {
        console.log("Skier kill");
        //let hitRadius: number = 20;
        let hotspot = new skipiste.Vector(_event.clientX - skipiste.crc2.canvas.offsetLeft, _event.clientY - skipiste.crc2.canvas.offsetTop);
        let skierKill = getSkierKill(hotspot);
        console.log(hotspot);
        if (skierKill)
            killSkier(skierKill);
    }
    function getSkierKill(_hotspot) {
        console.log("get skier kill");
        for (let moveable of moveables) {
            if (moveable instanceof skipiste.Skier && moveable.isHit(_hotspot))
                return moveable;
        }
        return null;
    }
    function killSkier(_skier) {
        console.log("kill skier");
        if (_skier.isHit(_hotspot)) {
            _skier.position.x = 800;
            _skier.position.y = 225 + Math.random() * 20;
        }
    }
    function update() {
        console.log("Update");
        skipiste.crc2.putImageData(imageData, 0, 0);
        for (let i = 0; i < moveables.length; i++) {
            moveables[i].move();
            moveables[i].draw();
        }
    }
})(skipiste || (skipiste = {}));
//# sourceMappingURL=skipiste.js.map