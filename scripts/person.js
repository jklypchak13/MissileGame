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
        if (this.x > canvas.width) {
            this.x = 0;
        } else if (this.x < 0) {
            this.x = canvas.width;
        }
        this.y += this.changeY;
        if (this.y > canvas.height) {
            this.y = 0;
        } else if (this.y < 0) {
            this.y = canvas.height;
        }
        this.display();
    }

    /**
     * History:
     *      1/16/19: Created and Implemented -Nick
     * Description:
     *      Detects if a meteor has collided with this person.
     * Arguments:
     *      meteor: a Meteor Object, with an x, y, width, and height attribute.
     * Returns:
     *      true iff this has collided with the meteor.
     *      false otherwise.
     */
    hit(meteor) {
        // TODO: make it not suck
        if (this.x == meteor.x && this.y == meteor.y) {
            return true;
        }
        return false;
    }
}