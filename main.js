function preload(){

}

function setup() {
    canvas = createCanvas(640, 400);
    canvas.position(110, 250);
}

function draw() {
    stroke('#000000')
    fill('#000000')
    rect(30, 20, 640, 400)
}
function s(){
    save('png.png');
}