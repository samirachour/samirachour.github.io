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

function setup() {

  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  var typeObstacle = 0;
  for (var i = 0; i < 3; i++) {
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

function draw() {

  background(255);
  drawBall();
  textSize(50);
  fill(0, 0, 255);
  for (i = 0; i < 3; i++) {
    obstacles[i].drawAccident();
  }

  aX = rotationY * f;
  vX += aX;
  pX += vX;
  aY = rotationX * f;
  vY += aY;
  pY += vY;

  text("score:" + score, 100, 250);

  if ((pX + ballSize / 2) > windowWidth) {
    vX = -vX * bounce;
    pX = windowWidth - ballSize / 2;


  } else if ((pX - ballSize / 2 <= 0)) {
    vX = -vX * bounce;
    pX = ballSize / 2;


  }
  if ((pY + ballSize / 2) >= windowHeight) {
    vY = -vY * bounce;
    pY = windowHeight - ballSize / 2;


  } else if (pY - ballSize / 2 <= 0) {
    vY = -vY * bounce;
    pY = ballSize / 2;
  }


  for (i = 0; i < 3; i++) {
    if (dist(pX, pY, obstacles[i].pX, obstacles[i].pY) <= (R + (obstacles[i].size) / 2)) {

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
          score += obstacles[i].result;
        }
      }
    } else {
      obstacles[i].colision = false;
    }
  }
}
 /*score += obstacles[i].result;
  

  obstacles[i].display();

*/
function drawBall() {

  fill(0);
  ellipse(pX, pY, ballSize, ballSize);

}

function Balle(genre) {
  this.type = genre;
  this.pX = random(0, windowWidth);
  this.pY = random(0, windowHeight);
  this.size = 30;
  this.couleur = color(random(0, 255), random(0, 255), random(0, 255));
  if (this.type == "mur") {
    this.color = color(0);
  }

   if (obstacles == "bonus") {
  this.result = 5;
}
if (obstacles == "malus") {
  this.result = -3;
}
if (obstacles == "mur") {
  this.result = 0;
}
this.colision = false;

this.drawAccident = function() {
  fill(this.couleur);
  ellipse(this.pX, this.pY, this.size, this.size);
}
}