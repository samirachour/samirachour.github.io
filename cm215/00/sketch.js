document.ontouchmove = function(event){
  event.preventDefault();
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  ellipseMode(CENTER);
  stroke(0);
  noFill();
  strokeWeight(5);
}

function draw() {
  background(255);
  noFill();
  for(var i=0;i<touches.length;i++){
  ellipse(touches[i].x,touches[i].y,50,50);   
 
  } 
  
  fill(150,150,50);

  beginShape();
  for(var i=0;i<touches.length;i++){
  vertex(touches[i].x, touches[i].y);
  }
  endShape(CLOSE);
    
  }


//function touchStarted() {
  
// fill(random(0,255),random(0,255),random(0,255)); 
//}