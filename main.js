function setup(){
canvas = creatCanavas(550, 550);
canvas.position(560, 150);
video = createCapture(VIDEO);
video.size(550, 550);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses);
}

function modelLoaded(){
console.log("posenet is initialised (no one will read this)")
}

function draw(){
background("#969A97")
}

function gotPoses(results){
if(results.lenght > 0){
    console.log(results);
}
}