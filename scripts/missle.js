class Missle {
    constructor(x, y, w, h, speed, target, vx, vy) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.speed = speed;
        this.xVelocity = 1;
        this.yVelocity = 0;
        this.target = target;
        this.image = new Image();
        //this.image.src = "image/person???";
        //this.calculateVelocity();
    }

    display() {
        var ctx = canvas.getContext("2d");
        //ctx.drawImage(this.image, this.width, this.height);
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    update() {
        //this.calculateVelocity();
        this.x += this.xVelocity;
        this.y += this.yVelocity;
    }

    calculateVelocity() {
        let xDistance = this.x - this.target.x;
        let yDistance = this.y - this.target.y;

    }


}