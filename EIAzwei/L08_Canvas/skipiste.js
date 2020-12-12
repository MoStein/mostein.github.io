var skipiste;
(function (skipiste) {
    window.addEventListener("load", handleLoad);
    let canvas;
    let crc2;
    function handleLoad(_event) {
        console.log("Hi");
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        let posMountains;
        drawBackground();
        drawSun({ x: 100, y: 75 });
        drawCloud({ x: 550, y: 80 }, { x: 100, y: 75 });
        drawPist();
        drawHouse();
        drawLift();
        drawSkier();
        drawSnow({ x: 800, y: 600 }, { x: 1800, y: 600 });
    }
    function drawBackground() {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(1, "white");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 30;
        let r2 = 150;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawCloud(_position, _size) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        let nParticles = 20;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
        crc2.restore();
        console.log("Cloud", _position);
    }
    function drawPist() {
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
    function drawSkier(x, y) {
        console.log("Skier");
        let color = ["green", "red", "blue", "orange", "purple"];
        let random = color[Math.floor(Math.random() * color.length)];
        crc2.fillStyle = random;
        crc2.strokeStyle = crc2.fillStyle;
        let radius = 5;
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
    function drawSnow(_position, _size) {
        console.log("Snowflake is drawing", _position, _size);
        let nParticles = 500;
        let radiusParticle = 2;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "Azure");
        gradient.addColorStop(0, "lightgrey");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
    }
})(skipiste || (skipiste = {}));
//# sourceMappingURL=skipiste.js.map