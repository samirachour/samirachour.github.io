document.ontouchmove = function(event){
  event.preventDefault();
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  rect(CENTER);
  stroke(0);
  noFill();
  strokeWeight(5);
  line(CENTER);
}

function draw() {
  background(255);
  
  for(var i=0;i<touches.length;i++){
    rect(touches[i].x,touches[i].y,150,150);
    line(25,25,75,75);
  }
}

function touchStarted() {
  //line(25,25,75,75);
  
}