const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,preda,rubber,iron;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    preda = new Preda(700,320,100,100)
    rubber = new Rubber (900,450,70)
    iron = new Iron (100,200,70,30)
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    preda.display();
    rubber.display();
    iron.display();
    
 
}