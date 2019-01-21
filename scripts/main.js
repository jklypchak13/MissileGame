let canvas = document.getElementById("c");
let ctx = canvas.getContext("2d");

let meteors = [];
let person = new Person(30, 30);

let background = new Image();

let counter = 0;
let limit = 100;

setup();

function setup() {
    background.src = "img/background.png";
    setInterval(main, 10);

}



function main() {

    document.onkeypress = userInputMovement;
    //Re-Draw the Background.
    ctx.drawImage(background, 0, 0);

    //Update and Display the Person.
    person.update();

    //Go through the meteors to see if a hit has occurred, and update them.
    for (let i = meteors.length - 1; i >= 0; i--) {
        if (person.hit(meteors[i])) {
            meteors.splice(i, 1);
        } else {
            meteors[i].update();
        }

    }

    //Check to Create a new meteor.
    counter++;
    if (counter == limit) {
        createNewMeteor();
        counter = 0;
        if (limit > 1) {
            limit -= 1;
        }

    }

}
/**
 * History:
 *      1/16/19: Created and Implemented -Jarod
 * Description:
 *      Creates a new Meteor and adds it to the meteor array.
 * Arguments:
 *      None.
 * Returns:
 *      None.
 */
function createNewMeteor() {
    let x = Math.floor(Math.random() * 400);
    let y = Math.floor(Math.random() * 2) + 1
    if (y == 1) {
        meteors.push(new Meteor(x, 0, 20, 20, .5, person));
    } else {
        meteors.push(new Meteor(x, 144, 20, 20, .5, person));
    }
}

/**
 * History:
 *      1/16/19: Created and Implemented -Nick
 *      1/17/19: Changed to recognize WASD controls -Jarod
 * Description:
 *      Gets user input from the keyboard.
 * Arguments:
 *      event:the keyboard event that was receieved.
 * Returns:
 *      None.
 */
function userInputMovement(event) {

    if (event.key === "a" || event.key === "h") {
        person.move(-1, 0);
    } else if (event.key === "d" || event.key === "l") {
        person.move(1, 0);
    } else if (event.key === "s" || event.key === "j") {
        person.move(0, 1);
    } else if (event.key === "w" || event.key === "k") {
        person.move(0, -1);
    }
}