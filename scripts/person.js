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
     *      1/17/19: Updated to properly calculate hit boxes - Jarod
     * Description:
     *      Detects if a meteor has collided with this person.
     * Arguments:
     *      meteor: a Meteor Object, with an x, y, width, and height attribute.
     * Returns:
     *      true iff this has collided with the meteor.
     *      false otherwise.
     */
    hit(meteor) {
        let corners = calculateCorners(meteor);
        for (let i = 0; i < 4; i++) {
            if (containsPoint(this, corners[i * 2], corners[i * 2 + 1])) {
                return true;
            }
        }
        return false;
    }



}
/**
 * History:
 *      1/17/19: Created and Implemented -Jarod
 * Description:
 *      Finds the x,y coordinates of each of the 4 corners of a square.
 * Arguments:
 *      square: The square whose corners need to be known
 *          with x, y, width, and height attributes
 * Return:
 *      An array of length 8, containing the x,y coordinates of the corners.
 */
function calculateCorners(square) {
    let result = [];
    result[0] = square.x - square.width / 2;
    result[1] = square.y - square.height / 2;
    result[2] = result[0] + square.width;
    result[3] = result[1];
    result[4] = result[2];
    result[5] = result[3] + square.height;
    result[6] = result[0];
    result[7] = result[5];
    return result;
}

/**
 * History:
 *      1/17/19: Created and Implemented -Jarod
 * Description:
 *      Returns if the x and y coordinates specified are currently in the given square.
 * Arguments:
 *      square: The square whose corners need to be known
 *          with x, y, width, and height attributes
 *      x: the x coordinate to be tested
 *      y: the y coordinate to be tested
 * Return:
 *      An array of length 8, containing the x,y coordinates of the corners.
 */
function containsPoint(square, x, y) {
    let corners = calculateCorners(square);
    return (corners[0] < x && corners[2] > x && corners[1] < y && corners[5] > y);

}