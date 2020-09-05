var rect1,rect2;
function setup() {
  createCanvas(1368,768);
  rect1=createSprite(400, 200, 50, 50);
  rect2=createSprite(100,200,50,50);
  rect1.shapeColor="yellow";
 rect1.velocityX=-2;
  rect2.shapeColor="orange";
  rect2.velocityX=2;
}



function draw() {
  background(0);  
  drawSprites();
 // rect2.x=World.mouseX;
  //rect2.y=World.mouseY;
  if (rect1.x-rect2.x<rect1.width/2+rect2.width/2&&
    rect2.x-rect1.x<rect2.width/2+rect1.width/2){
      rect1.velocityX=rect1.velocityX*(-1);
  rect2.velocityX=rect2.velocityX*(-1);    }
//rect1.y-rect2.y<rect1.height/2+rect2.height/2&&
   // rect2.y-rect1.y<rect2.height/2+rect1.height/2){
//rect2.shapeColor="orange";

  //}
  //else{
    //.shapeColor="yellow";
 // }
}