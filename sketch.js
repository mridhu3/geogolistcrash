
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObject,groundObject,paperObject;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new trash(200,650,50);
	groundObject=new ground(width/2,670,width,20);
	dustbinObject=new dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObject.display();

}
function keypressed ()
{
if(keyCode === UP_ARROW)
{
Matter.Body.applyForce(paper.Body,paper.Body.position,{x:15,y:-15})
}
}

