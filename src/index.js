import Arc from './Arc';

const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');
let windWidth;
let windWHeight;
function setCanvasSize() {
    windWidth = window.innerWidth;
    windWHeight = window.innerHeight;
    canvas.width = windWidth;
    canvas.height = windWHeight;
}

setCanvasSize();
window.onresize = setCanvasSize;

const length = 450;

for (let i = 0; i < length; i++) {
    new Arc(Arc.getRandomParams(windWidth, windWHeight))
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, windWidth, windWHeight);
    Arc.arcArr.forEach((arc) => {
        arc.update(c, windWidth, windWHeight);
    });
}

animate();