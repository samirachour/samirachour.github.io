document.ontouchmove = function(event){
  event.preventDefault();
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  rect(CENTER);
  stroke(0);
  noFill();
  strokeWeight(5);
}

function draw() {
  background(255);
  
  for(var i=0;i<touches.length;i++){
    rect(touches[i].x,touches[i].y,150,150);
  }
}

function touchStarted() {
  
}