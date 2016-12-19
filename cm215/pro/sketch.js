
var obstacles = [];
var ballSize;
var vX, vY;
var pX, pY;
var aX, aY;
var f;
var R;
var bounce;
var score,timer;
var imag,imagBall,imagObst,imagMalus,imagGa;
var level;
var scoreLevel =[0,30,60];
/* *********************** ----- *********************** */

function preload() {
  imag = loadImage("bois.jpg");
  imagBall = loadImage("ball8.png");
  imagObst = loadImage("ball10.png");
  imagMalus = loadImage("ball13.png");
  imagBonus = loadImage("ball.png");
  imagGa = loadImage("over.png");
}
/* *********************** ----- *********************** */

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  imagBall = loadImage("ball8.png");
  imgaObst = loadImage("ball10.png");
  imagMalus = loadImage("ball13.png");
  imagBonus = loadImage("ball.png");
  imagGa = loadImage("over.png");
  ballSize = 50;
  pX = windowWidth / 2;
  pY = windowHeight / 2;
  vX = 0;
  vY = 0;
  f = 0.01;
  R = ballSize / 2;
  score = 0;
  timer = 1800;
  bounce = 0.8;
  level = 1;
  newObstacles(level);
}
/* *********************** ----- *********************** */

function draw() {
  background(imag, width / 2, height / 2);
  drawBall();
  displayTimer();
  displayScore();
  colision();
  newLevel();

}
/* *********************** ----- *********************** */

function newLevel(){
  if(score >= scoreLevel[level]){
  level++;
  newObstacles(level);
  timer=timer + 1800;
  }
}
/* *********************** ----- *********************** */

function newObstacles(newLevel) {
  var toto = 0;
  for (var i = 0; i < (3*newLevel); i++) {
  if (toto === 0) {
      obstacles[i] = new Obstacle("bonus");
      toto++;
    } else if (toto == 1) {
      obstacles[i] = new Obstacle("malus");
      toto++;
    } else if (toto == 2) {
      obstacles[i] = new Obstacle("neutre");
      toto = 0;
    }
  }
}
/* *********************** ----- *********************** */

function colision() {
  for (var i = 0; i < (level*3); i++) {
  if (dist(pX, pY, obstacles[i].xPos, obstacles[i].yPos) <= (R + obstacles[i].radius)) {
  if (obstacles[i].colision === false) {
      obstacles[i].colision = true;
      score += obstacles[i].valeur;
    }

  } else {
      obstacles[i].colision = false;
}
    obstacles[i].display();
  }
}
/* *********************** ----- *********************** */

function drawBall() {
  image(imagBall, pX, pY, ballSize, ballSize);
    aX = rotationY * f;
    vX += aX;
    pX += vX;
    aY = rotationX * f;
    vY += aY;
    pY += vY;
  if (pX + R > windowWidth) {
    vX = -vX * bN;
    pX = windowWidth - R;
  } else if (pX - R <= 0) {
    vX = -vX * bounce;
    pX = R;
  }

  if (pY + R > windowHeight) {
    vY = -vY * bounce;
    pY = windowHeight - R;
  } else if (pY - R < 0) {
    vY = -vY * bounce;
    pY = R;
  }
}
/* *********************** ----- *********************** */

function displayScore() {
  textSize(30);
  fill(255);
  text("SCORE:" + level + "/" + score, windowWidth / 2, 30);
}
/* *********************** ----- *********************** */

function displayTimer() {
  fill(255);
  rect(windowWidth / 2 + 20, 40, 60, 30,30);
  noStroke();
  textSize(20);
  fill(0);
  text(int(timer / 60), width / 2 + 40, 60);
  
 if (timer <= 0) {
    if(score >= scoreLevel[level]){
    level++;
    score=0;
    newObstacles(level);
    timer=timer + 1800;
    obstacles[i] = false;
    }else{
    gameOver();
    }
  
  }else{
    timer--;
  }
}
/* *********************** ----- *********************** */
function gameOver(){
  //fill(255);
  //textSize(20);
 image(imagGa, windowWidth / 2-120, windowHeight/2, 240,120);
}

/* *********************** ----- *********************** */

function Obstacle(genre) {
  this.type = genre;
  this.xPos = random(0, windowWidth);
  this.yPos = random(0, windowHeight);
  this.size = (30);
  this.color = color(0,255);
  this.radius = this.size / 2;
  this.colision = false;
  this.phot;

  if (genre == "bonus") {
    this.valeur = 10;
    this.phot = imagBonus;
  }

  if (genre == "malus") {
    this.valeur = -10;
    this.phot = imagMalus;
  }

  if (genre == "neutre") {
    this.valeur = 0;
    this.phot = imagObst;
  }
  
  this.display = function() {
  fill(this.color);
  image(this.phot, this.xPos, this.yPos, this.size, this.size);
}
}