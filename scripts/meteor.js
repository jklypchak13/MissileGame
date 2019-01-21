let meteorImageFile = "img/meteor.png";
class Meteor {

    /**
     * History:
     *      1/16/19: Created and Implemented -Jarod
     * Description:
     *      Constructor for Meteors.
     * Arguments:
     *      x: the starting x position of this.
     *      y: the starting y position of this.
     *      w: the width of this meteor.
     *      h: the height of this meteor.
     *      speed: the starting speed that this should move at.
     *      target: the target that this meteor is moving towards.
     * Returns:
     *      The new Meteor object.
     */
    constructor(x, y, w, h, speed, target) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.speed = speed;
        this.xVelocity;
        this.yVelocity;
        this.target = target;
        this.image = new Image();
        this.image.src = meteorImageFile;
        this.calculateVelocity();
    }

    /**
     * History:
     *      1/16/19: Created and Implemented -Jarod
     * Description:
     *      Displays this to the canvas.
     * Arguments:
     *      None.
     * Returns:
     *      None.
     */
    display() {
        ctx.drawImage(this.image, this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
    }

    /**
     * History:
     *      1/16/19: Created and Implemented -Jarod
     * Description:
     *      Updates the x and y velocity of this, and moves it according to that x and y velocity.
     * Arguments:
     *      None.
     * Returns:
     *      None.
     */
    update() {
        this.calculateVelocity();
        this.x += this.xVelocity;
        this.y += this.yVelocity;
        this.display();
    }

    /**
     * History:
     *      1/17/19: Created and Implemented -Jarod
     * Description:
     *      Changes the velocity of this to move toward it's target.
     * Arguments:
     *      None.
     * Returns:
     *      None.
     */
    calculateVelocity() {
        let tempX;
        let tempY;
        let angle;

        tempX = this.x - this.target.x;
        tempY = this.target.y - this.y;
        angle = Math.atan((tempY / tempX));

        this.xVelocity = this.speed * Math.cos(angle);
        this.yVelocity = this.speed * Math.sin(angle);
        if (this.x > this.target.x) {
            this.xVelocity *= -1;
        } else {
            this.yVelocity *= -1;
        }
    }


}