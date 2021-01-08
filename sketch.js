const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var engine,world;
var ground1;
var dustbin1,paper1;
 
function setup() {
 
  createCanvas(1200, 400);
 
  engine = Engine.create();
  world = engine.world;
 
  //Create the Bodies Here.
 
  paper1=new paper(150,320,70);
   ground1=new ground(600,392.5,1200,15);
   dustbin1=new dustbin(960,380);

   Engine.run(engine);

}
 
function draw() {
  
  background("white");
 
  rectMode(CENTER);
  
  paper1.display();
  ground1.display();
  dustbin1.display();
  
}

function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
    Body.applyForce(paper1.body,paper1.body.position,{x:125,y:-125});
  }
}