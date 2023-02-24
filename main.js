function t_s(){
    if (document.getElementById("f").value = "png"){
    save('pick.png');
    }
    if (document.getElementById("f").value = "jpg"){
        save('pick.jpg');
        }
}

function preload() {
    img = loadImage('download.jpg')
}

function setup() {
   createCanvas(2000, 1000)
}

function draw() {
    rect(100, 100, 800, 100)
    rect(100, 1900, 800, 100)
    rect(100, 100, 100, 1900)
    rect(800, 100, 100, 1900)
    image(img, 200, 200, 600, 1000)
}