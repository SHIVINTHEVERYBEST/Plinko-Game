const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

var ground;

function setup() {
  createCanvas(1200, 400);
  
  ground = new Ground(600, height, 1200, 20);
  
 

 
}

function draw() {
  background(0, 0, 0);  
  
  Engine.update(engine);

  if(frameCount%60 === 0){
    particles.push(new Particle(random(width/2 - 10, width/2 + 10), 10, 10));
  }
  
  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }
  
  ground.display();
  
}