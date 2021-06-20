const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;

var computerArcher;
var playerArcher;

var arrow;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  World.add(world, playerBase);

  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
  World.add(world, player);
 
  //Create Player Archer Object

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
   World.add(world, computerBase);

  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  World.add(world, computer);

  computerArcher = new ComputerArcher(
    width - 340,
    computerBase.body.position.y - 180,
    120,
    120
  );
  World.add(world, computerArcher);

  playerArcher = new PlayerArcher(
    width - 340,
    computerBase.body.position.y - 180,
    120,
    120
  );
  World.add(world, playerArcher);
  
  //Create an arrow Object
  arrow = new PlayerArrow(0, 0, 0, 0);

  World.add(world, arrow)








  Engine.run(engine);
  
  
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerArcher.display();
  computerArcher.display()


  //Display arrow();
  
  //if Space (32) key is pressed call shoot function of playerArrow
  if(keyCode === 32){
    //Call shoot() function and pass angle of playerArcher
    arrow.shoot(playerArcher.body,angle);
    


  }
}



