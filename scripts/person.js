class Person {
    constructor(height, width) {
		this.x = canvas.width;
		this.y = canvas.height;
		this.height = height;
		this.width = width;
		this.image = new Image();
		this.image.src = "img";
		this.changeX = 0;
		this.changeY = 0;
    }

    move(x, y) {
		this.changeX = x;
		this.changeY = y;
    }

	display() {
		let ctx = canvas.getContext("2d");
		ctx.drawImage(this.image, this.width, this.height);
	}

	update() {
		this.x += this.changeX;
		this.y += this.changeY;
		ctx.drawImage(this.image, this.x, this.y);
	}

	hit(missile) {
		// TODO: make it not suck
		if (this.x == missile.x && this.y == missile.y) {
			return true;
		}
		return false;
	}
}
