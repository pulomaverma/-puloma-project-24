
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	papper=new Papper(200,600,70) 
	dustbin1=new Dustbin(600,650,200,20)
	dustbin2=new Dustbin(700,620,20,100)
	dustbin3=new Dustbin(500,620,20,100)
	ground=new Ground(400,690,800,20) 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  papper.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
 ground.display();
 keyPressed();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode==UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85})
	}
}






