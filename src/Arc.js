export default class Arc {
    constructor({x, y, dx, dy, radius}) {
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        Arc.arcArr.push(this);
    }

    static arcArr = [];

    static  getRandomParams = (windWidth, windWHeight) => {
        const radius = 30;
        const getRandXY = (direction) => Math.random() * (direction - 2 * radius) + radius;
        let randX = getRandXY(windWidth);
        let randY = getRandXY(windWHeight);
        let i = 0;
        while (true) {
            i++;
            if (i > 200) {
                console.log('слишком много шаров для данного экрана');
                break;
            }
            const stumble = Arc.arcArr.some((arc) => {
                return Math.sqrt((arc.x - randX)**2 + (arc.y - randY)**2) < 2 * radius
            });
            if (stumble) {
                randX = getRandXY(windWidth);
                randY = getRandXY(windWHeight);
            } else break;
        }
        return {
            x: randX,
            y: randY,
            radius: radius,
            dx: Math.random(),
            dy: Math.random()
        }
    };

    draw = (canvasContext) => {
        const color = 'yellow';
        canvasContext.beginPath();
        canvasContext.strokeStyle = color;
        canvasContext.fillStyle = color;
        canvasContext.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        canvasContext.fill();
        canvasContext.stroke();
    };

    update = (canvasContext, windWidth, windWHeight) => {
        this.draw(canvasContext);
        const radius = this.radius;
        if (this.x + radius > windWidth || this.x - radius < 0) {
            this.dx *= -1;
        }
        if (this.y + radius > windWHeight || this.y - radius < 0) {
            this.dy *= -1;
        }
        Arc.arcArr.forEach((arc, index) => {
            if (arc !== this) {
                if (Math.sqrt((arc.x - this.x)**2 + (arc.y - this.y)**2) < 2 * radius) {
                    this.dx *= -1;
                    this.dy *= -1;
                    Arc.arcArr.splice(index, 1)
                }
            }
        });
        this.x += this.dx;
        this.y += this.dy;
    };
}