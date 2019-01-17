let canvas = document.getElementById("c");
let meteors = [];
let person = new Person(30, 30);
let background = new Image();
let counter = 0;
background.src = "img/background.png";
setup();

function setup() {
    setInterval(main, 10);
}

let limit = 100;

function main() {
    let ctx = canvas.getContext("2d");
    document.onkeypress = userInputMovement;

    ctx.drawImage(background, 0, 0);
    person.update();
    //ctx.fillStyle = "black";
    //ctx.fillRect(0, 0, 400, 144);
    for (let i = 0; i < meteors.length; i++) {
        if (person.hit(meteors[i])) {
            console.log("HIT, GAME OVER");
        }
        meteors[i].update();
        meteors[i].display();
    }
    counter++;
    if (counter == limit) {
        createNewmeteor();
        counter = 0;
        if (limit > 1) {
            limit -= 1;
        }

    }

}

function createNewMeteor() {
    let x = Math.floor(Math.random() * 400);
    let y = Math.floor(Math.random() * 2) + 1
    if (y == 1) {
        meteors.push(new meteor(x, 0, 20, 20, 1, null, 0, 1));
    } else {
        meteors.push(new meteor(x, 144, 20, 20, 1, null, 0, -1));
    }
}

function userInputMovement(event) {
    if (event.keyCode === 37 || event.key === "h") {
        person.move(-1, 0);
    } else if (event.keyCode === 39 || event.key === "l") {
        person.move(1, 0);
    } else if (event.keyCode === 40 || event.key === "j") {
        person.move(0, 1);
    } else if (event.keyCode === 38 || event.key === "k") {
        person.move(0, -1);
    }
}