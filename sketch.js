var monkey, monkeyImg;

var rock, rockImg;

var banana, bananaImg;

var background1, backgroundImg1, ground;

var count = 0;

function preload() {

  monkeyImg = loadAnimation("monkey1.png","monkey2.png","monkey3.png,monkey4.png,monkey5.png,monkey6.png,monkey7.png,monkey8.png, monkey9.png, monkey10.png");
  
  backgroundImg1 = loadImage("jungle.png")
  
  rockImg = loadImage("stone.png");
 
  bananaImg = loadImage("banana.png");
}

function setup() {
  createCanvas(600, 200);
  
  monkey = createSprite(50,180,20,50);
  monkey.addAnimation("monkey", monkey);
  trex.scale = 0.5;
  
  background1 = createSprite(300,100,600,200);
  background1.addImage("ground", backgroundImg);
  background1.x = background.width /2;
  background1.velocityX = -2;
  
  ground = createSprite(190,0,600,20);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
}

function draw() {
  background(220);
  
  if(keyDown("space") && monkey.y>=159) {
    monkey.velocityY = -10;
  }
  
  
  rocks();
  
  bananas();
  
  if(monkey.isTouching(banana)) {
   
    count = count+2;
    banana.destroyEach;
  }
  
  drawSprites();
  
   stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
}

function rocks(){
  if(frameCount % 100 === 0) {
    rock = createSprite(185,540,10,40);
    rock.velocityX = - (6);
    
    rock.addImage("stone.png");
    
    rock.scale = 0.2;
    rock.lifetime = 370;
    
  }
}

function bananas() {
 
   if (frameCount % 80 === 0) {
    banana = createSprite(580,270,40,10);
    banana.velocityX = - (6);

    banana.addImage("banana.png");
    banana.scale = 0.05;
    
    banana.y = randomNumber(50,100);
    
    banana.lifetime = 370;
    
    banana.depth = monkey.depth;
    banana.depth = monkey.depth + 1;
    
    bananaGroup.add(banana);
   }
  
}