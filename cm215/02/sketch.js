var obstacles = [];
var ballSize;
var vX, vY;
var pX, pY;
var aX, aY;
var f, bounce;
var R;
var score;

function setup() {

  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  ballSize = 50;
  bSize = 30;
  pX = windowWidth / 2;
  pY = windowHeight / 2;
  vX = 0;
  vY = 0;
  f = 0.01;
  R = ballSize / 2;

  for (var i = 0; i < 3; i++) {
    var typeBalle = random(0,3);
    
      if(typeBalle > 1){
        typeBalle = "bonus";
      }else if(typeBalle < 1){
        typeBalle = "malus";
      }else{
        typeBalle = "obstacle";
      }
    obstacles[i] = new Balle(typeBalle);
    
  }

}

function draw() {

  background(255);
  drawBall();
  textSize(40);
  fill(0, 0, 255),
    text("Rx: " + floor(rotationX), 100, 100);
  text("Ry: " + floor(rotationY), 100, 150);
  text("Rz: " + floor(rotationZ), 100, 200);
  text("Score:" + score, 100, 200);

  aX = rotationY * f;
  vX += aX;
  pX += vX;

  aY = rotationX * f;
  vY += aY;
  pY += vY;

  if (pX + ballSize / 2 >= windowWidth) {
    vX = -vX * bounce;
    pX = windowWidth - ballSize / 2;
  } else if (pX - ballSize / 2 <= 0) {
    vX = -vX * bounce;
   
  }

  if (pY + ballSize / 2 > windowHeight) {
    vY = -vY * bounce;
    pY = windowHeight - ballSize / 2;
  } else if (pY - ballSize / 2 < 0){
    vY = -vY * bounce;
  }




  /*if (dist(pX, pY, pX1, pY1) <= (R + r1)) {
    text("Waw", windowWidth / 2, windowHeight / 2, 200, 200);
  }
  if (dist(pX, pY, pX2, pY2) <= (R + r2)) {
    text("Go", windowWidth / 2, windowHeight / 2, 200, 200);
  }
  if (dist(pX, pY, pX3, pY3) <= (R + r3)) {
    text("Yah", windowWidth / 2, windowHeight / 2, 200, 200);
  }*/
  for (var i = 0; i < 3; i++) {
    obstacles[i].display();
  }
}




function drawBall() {

  fill(0);
  ellipse(pX, pY, ballSize, ballSize);

}

function Balle(genre) {
  this.type = genre;
  this.x = random(0, windowWidth);
  this.y = random(0, windowHeight);
  this.size = 30;
  this.couleur = color(random(0, 255), random(0, 255), random(0, 255));

  this.display = function() {
    fill(this.couleur);
    ellipse(this.x, this.y, this.size, this.size);
  }
}