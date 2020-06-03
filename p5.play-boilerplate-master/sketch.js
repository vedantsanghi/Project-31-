const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles =  [];
var plinkos =  [];
var divisions =  [];
var divisionHeight = 300;

function setup() {
  createCanvas(482,600);
  engine = Engine.create();
  world = engine.world;
  for (var k = 0; k<=width; k = k + 80){
    divisions.push(new Division(k, 450, 10, divisionHeight))
  } 
  for (var k = 0; k<=width; k = k + 50){
    plinkos.push(new Plinko(k, 125))
  }
  for (var k = 0; k<=width; k = k + 72){
    plinkos.push(new Plinko(k, 175))
  } 
  for (var k = 0; k<=width; k = k + 65){
    plinkos.push(new Plinko(k, 225))
  } 
  ground = new Ground();
}

function draw() {
  background(0);
  Engine.update(engine)

  for (var k = 0; k<divisions.length; k++){
    divisions[k].display();
  }
  for (var k = 0; k < plinkos.length; k++){
    plinkos[k].display();
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(20,400),10))
  }
  for (var k = 0; k<particles.length; k++){
    particles[k].display();
  }
   ground.display();
  
  drawSprites();
}