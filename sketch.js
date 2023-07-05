noseX = 0;
noseY = 0;

selected =1;
function preload(){
  creeper = loadImage("creeper.png");
  enderman = loadImage("enderman.png");
  steve = loadImage("steve.png");
  picareta = loadImage("Picareta.png");
  espada = loadImage("Espada.png");
  diamante = loadImage("diamond.png");
  arco = loadImage("Arco.webp");
  pig = loadImage("Pig.png");
  creative = loadImage("command.jpg");
  axolote = loadImage("axolotl.png");
  esqueleto = loadImage("skeleton.png");
  aranha = loadImage("spider.jfif");
  teia = loadImage("Spider Web.webp");
  zumbi = loadImage("zombie.jfif");
  warden = loadImage("warden.png");
  wardenChest = loadImage("WardenHeart.jpg");
}

function setup() {
  canvas = createCanvas(400, 400);
  video = createCapture(VIDEO);
  video.size(400,400);
  video.hide();
  
  poseNet = ml5.poseNet(video,modelLoaded);
  poseNet.on("pose",gotPoses);
}

function draw() {
  background(220);
  image(video,0,0,400,400);
  fill(255,0,0);
  stroke(255,0,0);
  if (selected == 1){
  image(creeper,noseX - 50,noseY - 60,90,90);
  }else if (selected == 2){
  image(enderman,noseX - 50,noseY - 60,90,90);
  }else if (selected == 3){
  image(steve,noseX - 50,noseY - 60,90,90);
  image(picareta,noseX - 100,noseY +150,70,70);
  image(diamante,noseX + 100,noseY +150,60,60);
  }else if(selected == 4){
  image(steve,noseX - 50,noseY - 60,90,90);
  image(espada,noseX - 100,noseY +150,70,70);
  image(arco,noseX + 100,noseY +150,60,60);
  }else if(selected == 5){
    image(pig,noseX - 50,noseY - 60,90,90);
  }else if(selected == 6){
    image(steve,noseX - 50,noseY - 60,90,90);
    image(creative,noseX - 100,noseY + 150,200,90);
  }else if(selected == 7){
    image(axolote,noseX - 55,noseY - 100,150,145);
  }else if(selected == 8){
    image(esqueleto,noseX - 50,noseY - 60,90,90);
    image(arco,noseX + 100,noseY +150,60,60);
  }else if(selected == 9){
    image(aranha,noseX - 50,noseY - 60,90,90);
    image(teia,noseX + 30,noseY +150,80,80);
    image(teia,noseX + 110,noseY +157,80,80);
    image(teia,noseX - 30,noseY +160,80,80);
    image(teia,noseX - 110,noseY +150,80,80);
    image(teia,noseX - 150,noseY +170,80,80);
  }else if(selected == 10){
    image(zumbi,noseX - 50,noseY - 60,90,90);
  }else if(selected == 11){
    image(warden,noseX - 50,noseY - 60,90,90);
    image(wardenChest,noseX - 50,noseY + 130,100,100);
  }
}

function takeSnapshot(){
  save("I_am_a_MINECRAFT-MOB.png");
}

function modelLoaded(){
  console.log("Model Loaded");
}

function gotPoses(results){
  if (results.length > 0){
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
  }
}
function Select(mob){
selected = mob;
console.log(mob);
}