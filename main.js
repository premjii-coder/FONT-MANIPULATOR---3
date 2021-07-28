 RIGHTWRISTX=0;
 LEFTWRISTX=0;
 function preload(){

 }
function setup(){
camera=createCapture(VIDEO);
camera.size(300,300);
canvas=createCanvas(500,500);
poseNet=ml5.poseNet(camera,model_loaded);
poseNet.on('pose',gotresult);
}

function model_loaded(){
    console.log("model is loaded")
}

function gotresult(result){
if(result.length>0){
    console.log(result);
RIGHTWRISTX=result[0].pose.rightWrist.x;
LEFTWRISTX=result[0].pose.leftWrist.x;
rd=floor(RIGHTWRISTX);
ld=floor(LEFTWRISTX);
length=rd-ld;
}
}

function draw(){
background("#f0e678");
textSize(length);
fill('#78d6f0')
text('PREMJII',200,200);

}