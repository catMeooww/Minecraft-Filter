noseX = 0;
noseY = 0;

selected = 1;
function preload() {
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
  villager = loadImage("villager.png");
  esmerald = loadImage("esmerald.png");
  wolf = loadImage("wolf.png");
  blazebody = loadImage("blaze.png");
  blaze = loadImage("blazeface.jfif");
  hotbar = loadImage("survival.png");
}

wwidth = window.screen.width - 11;
wheight = window.screen.height - 175;

function setup() {
  canvas = createCanvas(wwidth,wheight);
  canvas.parent("canvas")
  video = createCapture(VIDEO);
  video.size(wwidth, wheight);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}

function draw() {
  background(220);
  image(video, 0, 0, wwidth, wheight);
  fill(255, 0, 0);
  stroke(255, 0, 0);
  if (selected == 1) {
    image(creeper, noseX - 95, noseY - 105, 190, 190);
  } else if (selected == 2) {
    image(enderman, noseX - 95, noseY - 105, 190, 190);
  } else if (selected == 3) {
    image(steve, noseX - 95, noseY - 105, 190, 190);
    image(picareta, noseX - 100, noseY + 180, 140, 140);
    image(diamante, noseX + 100, noseY + 180, 120, 120);
  } else if (selected == 4) {
    image(steve, noseX - 95, noseY - 105, 190, 190);
    image(espada, noseX - 100, noseY + 180, 140, 140);
    image(arco, noseX + 100, noseY + 180, 120, 120);
  } else if (selected == 5) {
    image(pig, noseX - 95, noseY - 105, 190, 190);
  } else if (selected == 6) {
    image(steve, noseX - 95, noseY - 105, 190, 190);
    image(creative, noseX - 150, noseY + 150, 280, 150);
  } else if (selected == 7) {
    image(axolote, noseX - 155, noseY - 190, 290, 290);
  } else if (selected == 8) {
    image(esqueleto, noseX - 95, noseY - 105, 190, 190);
    image(arco, noseX + 100, noseY + 180, 120, 120);
  } else if (selected == 9) {
    image(aranha, noseX - 95, noseY - 105, 190, 190);
    image(teia, noseX + 40, noseY + 180, 160, 160);
    image(teia, noseX + 120, noseY + 187, 160, 160);
    image(teia, noseX - 40, noseY + 190, 160, 160);
    image(teia, noseX - 120, noseY + 170, 160, 160);
    image(teia, noseX - 160, noseY + 190, 160, 160);
  } else if (selected == 10) {
    image(zumbi, noseX - 95, noseY - 105, 190, 190);
  } else if (selected == 11) {
    image(warden, noseX - 95, noseY - 105, 190, 190);
    image(wardenChest, noseX - 95, noseY + 150, 200, 200);
  } else if (selected == 12) {
    image(villager, noseX - 95, noseY - 105, 190, 190);
    image(esmerald, noseX - 100, noseY + 180, 140, 140);
    image(esmerald, noseX + 100, noseY + 180, 120, 120);
  } else if (selected == 13) {
    image(wolf, noseX - 200, noseY - 125, 390, 290);
  } else if (selected == 14) {
    image(steve, noseX - 95, noseY - 105, 190, 190);
    image(hotbar, noseX - 150, noseY + 150, 270, 240);
  }else if (selected == 15){
    image(blazebody, noseX - 95, noseY, 190, 280);
    image(blaze, noseX - 95, noseY - 105, 190, 190);
  }
}

function takeSnapshot() {
  save("I_am_a_MINECRAFT-MOB.png");
}

function modelLoaded() {
  console.log("Model Loaded");
}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
  }
}
function Select(mob) {
  selected = mob;
  console.log(mob);
}

function toggleMenu(){
  if(document.getElementById("options").style.visibility == "hidden"){
    document.getElementById("options").style.visibility = "visible";
    document.getElementById("options").style.height = (wheight/2-50)+"px";
    document.getElementById("collapser").innerHTML = "^";
  }else{
    document.getElementById("options").style.visibility = "hidden";
    document.getElementById("options").style.height = "0px";
    document.getElementById("collapser").innerHTML = "=";
  }
}

function MoreSite(){
  window.location = "https://catmeooww.github.io/CatMeooww/catmeoowwProjects.html";
}