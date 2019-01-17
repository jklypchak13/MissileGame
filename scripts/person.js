class Person {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.x = canvas.width / 2 + .5 * this.width;
        this.y = canvas.height / 2 + .5 * this.height;
        this.image = new Image();
        this.image.src = "img/person.png";
        this.changeX = 1;
        this.changeY = 0;
    }

    move(x, y) {
        this.changeX = x;
        this.changeY = y;
    }

    display() {
        let ctx = canvas.getContext("2d");
        ctx.drawImage(this.image, this.x - .5 * this.width, this.y - .5 * this.height, this.width, this.height);
    }

    update() {
        this.x += this.changeX;
        this.y += this.changeY;
        this.display();
    }

    hit(missile) {
        // TODO: make it not suck
        if (this.x == missile.x && this.y == missile.y) {
            return true;
        }
        return false;
    }
}