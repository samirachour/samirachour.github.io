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
    ellipse(touches[i].x,touches[i].y);         
    if((i+1)<touches.length){
     
      beginShape();
   stroke(random(255),random(255),random(255));  
vertex(touches[i].x, touches[i].y);
stroke(random(255),random(255),random(255));
vertex(touches[i].x, touches[i].y);
stroke(random(255),random(255),random(255));
vertex(touches[i+1].x, touches[i+1].y);
stroke(random(255),random(255),random(255));
vertex(touches[i+1].x, touches[i+1].y);
endShape(CLOSE);
    //line(touches[i].x,touches[i].y,touches[i+1].x,touches[i+1].y);
    }
 else{
 
beginShape();
stroke(random(255),random(255),random(255));
vertex(touches[i].x, touches[i].y);
stroke(random(255),random(255),random(255));
vertex(touches[i].x, touches[i].y);
stroke(random(255),random(255),random(255));
vertex(touches[0].x, touches[0].y);
stroke(random(255),random(255),random(255));
vertex(touches[0].x, touches[0].y);
endShape(CLOSE);
   // line(touches[i].x,touches[i].y,touches[0].x,touches[0].y);
}
                                   
    
   
  }
}

//function touchStarted() {
  
 //fill(random(0,255),random(0,255),random(0,255)); 
//}