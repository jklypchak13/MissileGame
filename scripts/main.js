let canvas = document.getElementById("c");
let missles = [];
let person = new Person();
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
    //ctx.fillStyle = "black";
    //ctx.fillRect(0, 0, 400, 144);
    for (let i = 0; i < missles.length; i++) {
        if (person.hit(missles[i])) {
            console.log("HIT, GAME OVER");
        }
        missles[i].update();
        missles[i].display();
    }
    counter++;
    if (counter == limit) {
        createNewMissle();
        counter = 0;
        limit -= 1;
    }

}

function createNewMissle() {
    let x = Math.floor(Math.random() * 400);
    let y = Math.floor(Math.random() * 2) + 1
    if (y == 1) {
        missles.push(new Missle(x, 0, 20, 20, 1, null, 0, 1));
    } else {
        missles.push(new Missle(x, 144, 20, 20, 1, null, 0, -1));
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
