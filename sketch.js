
var monkey , monkey_running
var banana ,bananaImage, bananaGroup, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var obstacle, obstacle2, obstacle3


function preload(){
  
  
  monkey_running =                     loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacle1 = loadImage("obstacle.png");
   obstacleImage = loadImage("obstacle.png");
    obstacle2 = loadImage("obstacle.png");
    obstacle3 = loadImage("obstacle.png");
}



function setup() {
  createCanvas(600, 200)
monkey= createSprite(50,170, 20, 20 )
  monkey.addAnimation("running", monkey_running)
  monkey.scale=0.1
  
  ground = createSprite(0,200,1200,10);
          ground.x=ground.width / 2;

      
 bananaGroup = new Group()
  obstaclesGroup = new Group()
  

  
}


function draw() {
 background(255);
  
    if(keyDown("space")) {
      monkey.velocityY = -12;
    }
      monkey.velocityY = monkey.velocityY + 0.4
   monkey.collide(ground);
  
  
  spawnBanana()
  spawnObstacles()
  
  drawSprites()
}

function spawnBanana() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
   banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    bananaGroup.add(banana);
    
  }
  
}

function spawnObstacles(){
   if(frameCount % 300 === 0) {
    var obstacle = createSprite(600,165,10,40);    
    //generate random obstacles
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: obstacle.addImage(obstacle2);
              break;
      case 2: obstacle.addImage(obstacle1);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
    }
 obstacle.velocityX = -3
 obstacle.scale = 0.2;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
}
}


