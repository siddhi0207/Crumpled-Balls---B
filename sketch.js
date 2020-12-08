const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var  ball, ground;
var world;
var rect1,rect2,rect3;
function setup(){
	createCanvas(1600,700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	rect1 = new Dustbin(1200,650,200,20);
	rect2 = new Dustbin(1100,610,20,100);
	rect3 = new Dustbin(1300,610,20,100);
    ball = new Paper(200,450,40);
	ground = new Ground(width/2,670,width,20);
	//Create a Ground

	Engine.run(engine);
}

function draw(){

	rectMode(CENTER);
	background("white"); 

    ball.display();
	ground.display();
	rect1.display();
    rect2.display();
    rect3.display();

}

function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
		
	}
	

}