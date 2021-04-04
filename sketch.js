const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, rubber1, stone1, iron1;
var plane, plane2, plane3, plane4;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    plane2 = new Plane(600, 0, 1200, 20);
    plane3 = new Plane(width, 600, 20, 1200);
    plane4 = new Plane(0, 600, 20, 1200);
    hammer = new Hammer(10,100);

    rubber1 = new Rubber(700, 100, 50);
    stone1 = new Stone(500, 50, 70, 50);
    iron1 = new Iron(100, 200, 30, 30);
  
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    plane2.display();
    plane3.display();
    plane4.display();
    hammer.display();

    stone1.display();
    rubber1.display();
    iron1.display();
    

}