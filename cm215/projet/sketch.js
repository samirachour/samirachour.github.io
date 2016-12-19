var obstacles = [];
var ballSize;
var vX, vY;
var pX, pY;
var aX, aY;
var f, bounce;
var R;
var score;
var colision;
var typeObstacle;
var imgBack,imgBall,imgObs;
/*********************************************************=============*******************************************************/
function preload(){
  imgBack=loadImage("bois.jpg");
  imgBall=loadImage("ball8.png");
  imgObs=loadImage("ball.png");
}

function setup() {

  createCanvas(windowWidth, windowHeight);
   ellipseMode(CENTER);
   imgBall=loadImage("ball8.png");
   
  var typeObstacle = 0;
  for (var i = 0; i < 3; i++) {
    //imgObs=loadImage("ball.png");
    obstacles[0] = new Balle("bonus");
    obstacles[1] = new Balle("malus");
    obstacles[2] = new Balle("mur");
   
  }

  vX = 0;
  vY = 0;
  f = 0.01;
  bounce = 0.5;
  R = ballSize / 2;
  score = 0;
  ballSize = 50;
  bSize = 30;
  pX = windowWidth / 2;
  pY = windowHeight / 2;
}
/*********************************************************=============*******************************************************/
function draw() {

  background(imgBack,100);
  drawBall();
  textSize(30);
  fill(255);
  for (i = 0; i < 3; i++) {
  obstacles[i].drawAccident();
  }

  aX = rotationY * f;
  vX += aX;
  pX += vX;
  aY = rotationX * f;
  vY += aY;
  pY += vY;
  
  text("score:" + score, windowWidth/2, 50);
  
if ((pX + ballSize / 2) >= windowWidth) {
    vX = -vX * bounce;
    pX = windowWidth - ballSize / 2;
  
  
} else if ((pX - ballSize / 2 <= 0)) {
    vX = -vX * bounce;
    pX = ballSize / 2;
  
  
}if ((pY + ballSize / 2 )>= windowHeight) {
    vY = -vY * bounce;
    pY = windowHeight - ballSize / 2;
  
    
  } else if (pY - ballSize / 2 <= 0) {
    vY = -vY * bounce;
    pY = ballSize / 2;
  }


  for (i = 0; i < 3; i++) {
    if (dist(pX, pY, obstacles[i].pX, obstacles[i].pY) <= ballSize / 2 + obstacles[i].size / 2) {

      if (obstacles[i].type === "mur") {
        vX = -vX * bounce;
        vY = -vY * bounce;
        
        

      } else if (obstacles[i].type === "bonus") {
        if (obstacles[i].colision === false) {
            obstacles[i].colision = true;
            score += 10;
            
        }
      } else if (obstacles[i].type === "malus") {
             if (obstacles[i].colision === false) {
                obstacles[i].colision = true;
                score -= 5;
                imgMalus=loadImage("ball13.png");
        }
      }
    } else {
      obstacles[i].colision = false;
    }
  }
}
/*********************************************************=============*******************************************************/
function drawBall() {

  //fill(0);
  //ellipse(pX, pY, ballSize, ballSize);
  image(imgBall,pX, pY, ballSize, ballSize);
}
/*********************************************************=============*******************************************************/
function Balle(genre) {
  this.type = genre;
  this.pX = random(0, windowWidth);
  this.pY = random(0, windowHeight);
  this.size = 30;
  this.couleur = color(random(0, 255), random(0, 255), random(0, 255));
  if (this.type == "mur") {
    this.color = color(0);
  }

  this.colision = false;

  this.drawAccident = function() {
    //fill(this.couleur);
   //ellipse(this.pX, this.pY, this.size, this.size);
   image(imgObs,this.pX, this.pY, this.size, this.size);
   
    
  }
}