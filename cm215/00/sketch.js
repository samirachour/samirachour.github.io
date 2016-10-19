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
  
  ellipse(touches[i].x,touches[i].y,50,50);   
    if((i+1)<touches.length){
     
fill(150,150);
beginShape();
for(var i=0;i<touches.length;i++){
vertex(touches[i].x, touches[i].y);

endShape(CLOSE);
    
    }
  }
}

//function touchStarted() {
  
// fill(random(0,255),random(0,255),random(0,255)); 
//}