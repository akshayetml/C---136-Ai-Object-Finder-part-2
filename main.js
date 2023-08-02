video="";

function preload(){
    video=createvideo();
    video.hide();
}

function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    video=createvideo(video);
    video.hide();
}

function draw(){
    image(video, 0, 0, 500, 500);
}

function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status : Detecting Objects";
}

function modelLoaded(){
    console.log("modelLoaded")
}