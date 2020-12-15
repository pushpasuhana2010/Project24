
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground;
var part1, part2, part3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 300);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,290,width,10);

	paper = new Paper(100,240);

	part1 = new Dustbin(900,277,230,15);
	part2 = new Dustbin(780,233,15,100);
	part3 = new Dustbin(1020,233,15,100);
	
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  paper.display();
  part1.display();
  part2.display();
  part3.display();

  drawSprites();
 
}

function keyPressed(){
 if (keyCode === UP_ARROW) {

   Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

 }

}


