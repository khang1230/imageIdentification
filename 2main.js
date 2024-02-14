var objects = []
var status = ""

function preload() {
    lego = loadImage("2.png")
}

function setup() {
    canvas = createCanvas(700, 500)
    canvas.center()
    objectDetector = ml5.objectDetector("cocossd", modelLoaded)
}

function modelLoaded() {
    console.log("Model Loaded!")
    document.getElementById("status").innerHTML = "Status: Detecting Objects"
    status = true
    objectDetector.detect(lego, gotResults)
}

function gotResults(error, results) {
    if (error) {
        console.log(error)
    } else {
        console.log("works")
        console.log(results)
        //console.log(results[2].label, results[2].width, results[2].height, results[2].x, results[2].y)
        console.log(results[0].label)
        objects = results
    }
}

function draw() {
    image(lego, 0, 0, 700, 500)
    console.log(objects.length)
    document.getElementById("objectsDetected").innerHTML = "Objects in the Image: "+ objects.length
    for (var i = 0; i < objects.length; i++) {
        noFill()
        stroke("green")
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
    }

}

function back(){
    window.location = "index.html"
}