
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Trex;
var ground;
var  Play = 1;
var gameState = Play;

function preload()
{
}
function setup() {
	createCanvas(displayWidth - 10, displayHeight -10);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Trex = createSprite(displayWidth/4,displayHeight/2 + 150,50,20);


	ground = createSprite(displayWidth/2, displayHeight/2 + 200,displayWidth,50);

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  if(gameState === Play){
		
	ground.velocityX = 6;
	
}
if (ground.x > displayWidth){
	ground.x = displayWidth/2;
  }

  
  drawSprites();

  
 
}


