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
  
  for(var i=0;i<touches.length;i++){
    if((i+1)<touches.length){
      beginShape(LINES);
vertex(touches[i].30, touches[i].20);
vertex(touches[i].85, touches[i].20);
vertex(touches[i+1].85, touches[i+1].75);
vertex(touches[i+1].30, touches[i+1].75);
endShape();
    //line(touches[i].x,touches[i].y,touches[i+1].x,touches[i+1].y);
    }
 else{
beginShape(LINES);
vertex(touches[i].30, touches[i].20);
vertex(touches[i].85, touches[i].20);
vertex(touches[i+1].85, touches[i+1].75);
vertex(touches[i+1].30, touches[i+1].75);
endShape();
   // line(touches[i].x,touches[i].y,touches[0].x,touches[0].y);
}
                                   
    ellipse(touches[i].x,touches[i].y,150,150);
   
  }
}

function touchStarted() {
  
 fill(random(0,255),random(0,255),random(0,255)); 
}