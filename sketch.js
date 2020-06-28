const Engine = Matter.Engine ;
const World = Matter.World ;
const Bodies = Matter.Bodies ;
const Constraint = Matter.Constraint ;

var world , engine ;

var log, chain , rock  ;

var backgroundImg,tableImg,chairImg ;

var table , comp , chair , plant ;

function preLoad (){
backgroundImg = loadImage ("sprites/officeBg.png");
tableImg = loadImage ("sprites/table.png");
chairImg = loadImage ("sprites/chair.png");

}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  table = Bodies.rectangle (1200,500,100,100);
  World.add(world,table);

  chair = Bodies.rectangle (1200,200,100,100);
  World.add(world,chair);

  log = Bodies.rectangle (200,500,25,50);
  rock = Bodies.rectangle (200,600,25,25);
  var options = {
    bodyA : rock.body ,
    bodyB: log.body ,
    'stiffness' : 0.04,
    'length' : 10 ,

  }
  chain = Constraint.create(options);
  World.add(world,chain);

}

function draw() {
  background(backgroundImg);  

    Engine.update(engine);

  imageMode (CENTER);
  image (tableImg,1200,500,400,250);

  imageMode (CENTER);
  image (chairImg,1200,500,400,250);

  drawSprites();
}