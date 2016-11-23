var obstacles = [];
var ballSize,bSize;
var vX, vY;
var pX, pY, pX1, pY1, pX2, pY2, pX3, pY3;
var aX, aY;
var f;
var R, r1, r2, r3;

function setup() {
  
 createCanvas(windowWidth,windowHeight);
 ellipseMode(CENTER);
 ballSize = 50;
 bSize = 30;
 pX = windowWidth/2;
 pY = windowHeight/2;
 
 pX1 = random(5,windowWidth);
 pY1 = random(5,windowHeight);
 
 pX2 = random(5,windowWidth);
 pY2 = random(5,windowHeight);
 
 pX3 = random(5,windowWidth);
 pY3 = random(5,windowHeight);
 vX = 0;
 vY = 0;
 f  = 0.01;
 R  = ballSize/2;
 r1 = bSize/2;
 r2 = bSize/2;
 r3 = bSize/2;
 
 for (var i=0; i < 100; i++){
   obstacles[i] = new Obstacle("malus");
 }
 
}

function draw() {
  
 background(255);
 drawBall();
 textSize(20);
 fill(0,0,255),
 text("Rx: " + floor(rotationX), 100, 100);
 text("Ry: " + floor(rotationY), 100, 150);
 text("Rz: " + floor(rotationZ), 100, 200);
 text("Score:" + score, 100,200);
 
 aX = rotationY * f;
 vX += aX;
 pX += vX;
 
 aY = rotationX  * f;
 vY += aY;
 pY += vY;

 if (pX + ballSize/2 >= windowWidth || pX - ballSize/2 <= 0  ){
   vX = -vX;
 }
 
 if (pY + ballSize/2 > windowHeight || pY - ballSize/2 < 0  ){
   vY = -vY;
 }
 
  if (dist(pX, pY, pX1, pY1)<=(R+r1)){
 text("Waw", windowWidth/2, windowHeight/2, 200,200);
}
if (dist(pX, pY, pX2, pY2)<=(R+r2)){
 text("Go", windowWidth/2, windowHeight/2, 200,200);
}
if (dist(pX, pY, pX3, pY3)<=(R+r3)){
 text("Yah", windowWidth/2, windowHeight/2, 200,200);
}
for (var i=0; i < 100; i++){
  obstacles[i].display();
}
}




function drawBall(){
  
 fill(0);
 ellipse(pX, pY, ballSize,ballSize);
 
 fill(255,255,0);
 ellipse(pX1, pY1, bSize,bSize);
 
 fill(255,0,0);
 ellipse(pX2, pY2, bSize,bSize);
 
 fill(0,255,0);
 ellipse(pX3, pY3, bSize,bSize);

}

function Obstacle(genre){
  this.type = genre;
  this.x = random(0,windowWidth);
  this.y = random(0,windowHeight);
  this.size = random(20,50);
  this.couleur = color(random(0,255),random(0,255),random(0,255));
  
  this.display = function(){
    fill(this.couleur);
    ellipse(this.x,this.y,this.size,this.size);
  }
}