
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var block
var block2
var block3
var plane
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var block_opitions = {
		restitution : 0.5,
		friction : 0.02,
		frictionAir : 0,
	}
	var block2_opitions = {
		restitution : 0.7,
		friction : 0.01,
		frictionAir : 0.1,
	}
	var block3_opitions = {
		restitution : 0.01,
		friction : 1,
		frictionAir : 0.3,
	}
	var plane_options={ isStatic: true } 
	plane = Bodies.rectangle(600,580,1200,2,plane_options); 
	World.add(world,plane);

	block = Bodies.circle(200,10,10,block_opitions);
	World.add(world,block);

	block2 = Bodies.rectangle(110,50,10,10,block2_opitions);
	World.add(world,block2)

	block3 = Bodies.rectangle(350,50,10,10,block3_opitions);
	World.add(world,block3)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(block.position.x,block.position.y,30);
  rect(block2.position.x,block2.position.y,50,50);
  rect(block3.position.x,block3.position.y,100,50);
  rect(plane.position.x,plane.position.y,1200);
  drawSprites();
 
}



