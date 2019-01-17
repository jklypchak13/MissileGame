let canvas = document.getElementById("c");
let missles = [];
//let person = new Person();
let background = new Image();
//background.src = "filename";
setup();

function setup() {
    setInterval(main, 10);
    missles.push(new Missle(0, 50, 10, 10, 1, null, 1, 0));
}


function main() {
    let ctx = canvas.getContext("2d");
    //ctx.drawImage(this.image, 400, 144);
    ctx.fillStyle = "black";
    console.log(missles[0]);
    ctx.fillRect(0, 0, 400, 144);
    for (let i = 0; i < missles.length; i++) {
        //if (person.hit(missles[i])) {
        //    console.log("HIT, GAME OVER");
        //}
        missles[i].update();
        missles[i].display();
    }
}

function createNewMissle() {
    let x = Math.floor(Math.random() * 144);
}