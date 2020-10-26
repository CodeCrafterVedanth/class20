var fixedRect;
var movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(500, 200, 100, 50);
  fixedRect.shapeColor="red";
  //fixedRect.debug = true;

  
  movingRect = createSprite(200, 200, 50, 100); 
  movingRect.shapeColor="red";
 // movingRect.debug = true;

}

function draw() {
  background(145,254,222);  

//console.log(fixedRect.x - movingRect.x);
movingRect.x=mouseX;
movingRect.y=mouseY;
  
if(fixedRect.x - movingRect.x < fixedRect.width/2+ movingRect.width/2  &&
  movingRect.x - fixedRect.x < fixedRect.width/2+ movingRect.width/2 &&
  fixedRect.y - movingRect.y < fixedRect.height/2+ movingRect.height/2  &&
  movingRect.y - fixedRect.y < fixedRect.height/2+ movingRect.height/2 
  ){
  fixedRect.shapeColor="purple";
  movingRect.shapeColor="purple";

}
else{

  fixedRect.shapeColor="red";
  movingRect.shapeColor="red";

}

  drawSprites();
}