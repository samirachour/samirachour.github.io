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
      beginShape(TRIANGLES);
vertex(touches[i].x,touches[i].y,touches[i+1].30, touches[i+1].75);
vertex(touches[i].x,touches[i].y,touches[i+1].40, touches[i+1].20);
vertex(touches[i].x,touches[i].y,touches[i+1].50, touches[i+1].75);
vertex(touches[i].x,touches[i].y,touches[i+1].60, touches[i+1].20);
vertex(touches[i].x,touches[i].y,touches[i+1].70, touches[i+1].75);
vertex(touches[i].x,touches[i].y,touches[i+1].80, touches[i+1].20);
endShape();
    //line(touches[i].x,touches[i].y,touches[i+1].x,touches[i+1].y);
    }
 else{
beginShape(TRIANGLES);
vertex(touches[i].x,touches[i].y,touches[0].30, touches[0].75);
vertex(touches[i].x,touches[i].y,touches[0].40, touches[0].20);
vertex(touches[i].x,touches[i].y,touches[0].50, touches[0].75);
vertex(touches[i].x,touches[i].y,touches[0].60, touches[0].20);
vertex(touches[i].x,touches[i].y,touches[0].70, touches[0].75);
vertex(touches[i].x,touches[i].y,touches[0].80, touches[0].20);
endShape();
   // line(touches[i].x,touches[i].y,touches[0].x,touches[0].y);
}
                                   
    ellipse(touches[i].x,touches[i].y,150,150);
   
  }
}

function touchStarted() {
  
 fill(random(0,255),random(0,255),random(0,255)); 
}