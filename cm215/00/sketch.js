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
vertex(touches[i].x,touches[i].y,30, 75);
vertex(touches[i].x,touches[i].y,40, 20);
vertex(touches[i].x,touches[i].y,50, 75);
vertex(touches[i].x,touches[i].y,60, 20);
vertex(touches[i].x,touches[i].y,70, 75);
vertex(touches[i].x,touches[i].y,80, 20);
endShape();
    //line(touches[i].x,touches[i].y,touches[i+1].x,touches[i+1].y);
    }
 else{
beginShape(TRIANGLES);
vertex(touches[i].x,touches[i].y,30, 75);
vertex(touches[i].x,touches[i].y,40, 20);
vertex(touches[i].x,touches[i].y,50, 75);
vertex(touches[i].x,touches[i].y,60, 20);
vertex(touches[i].x,touches[i].y,70, 75);
vertex(touches[i].x,touches[i].y,80, 20);
endShape();
   // line(touches[i].x,touches[i].y,touches[0].x,touches[0].y);
}
                                   
    ellipse(touches[i].x,touches[i].y,150,150);
   
  }
}

function touchStarted() {
  
 fill(random(0,255),random(0,255),random(0,255)); 
}