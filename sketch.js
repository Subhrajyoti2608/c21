var runner
var wood
var jungle
var ghost
var stone


var score=0
var PLAY=1
var END=0
var gameState=1

var stoneG
var woodG


function preload(){
runnerImg=loadImage("runner.png")
jungleImg=loadAnimation("jungle.png","jungle2.png","jungle3.png","junglebook.png")
ghostImg=loadImage("ghost.png")
stoneImg=loadImage("stone.png")
woodImg=loadImage("pngtree-wood-log-cartoon-wood-png-image_356604.jpg")

}

function setup() {
 createCanvas(600,200)
 
 jungle = createSprite(200,200)
 jungle.addImage(jungleImg);
 jungle.velocityX = -4

 runner = createSprite(40,20,20,20)
 runner.addImage(runner.png)
 runner.scale = 0.5

 ghost = createSprite(50,30,20,20)
 ghost.addImage(ghost.png)
 ghost.scale=0.5

 stoneG=new Group();
 woodG=new Group();
 
}

function draw() {
    if(gameState===PLAY){
background(0);
runner.x=World.mouseX

edges=createEdgeSprites();
runner.collide(edges);

if(jungle>200){
 jungle = 200/2   
}
  createStone();
  createWood();

  if(woodG.isTouching(runner)){
      woodG.destroyEach()
      score=score+1
  }else{
    if(stoneG.isTouching(runner)){
        gameState=END
       runner.addImage(runnerImg);
       runner.x=200
       runner.y=100
       runner.scale=0.5

       stoneG.destroyEach();
       woodG.destroyEach();

       stoneG.setVelocityYEach(0);
       woodG.setVelocityYEach(0);

         }
  }
  drawSprites();
  textSize(20)
  fill(255)
  text("score:"+ score,150,50)
}
 
}

function createWood(){
    if (World.frameCount % 200 == 0){
var wood = createSprite(Math.round(50,350),40,10,10)
wood.addImage(woodImg);
  wood.scale=0.12;
  wood.velocityX = 3;
  wood.lifetime = 150;
  woodG.add(wood);

    }


}

function createStone(){
    if(World.frameCount % 200 ==0){
var stone = createSprite(Math.round(50,350),40,10,10)
stone.scale=0.12
stone.addImage(stoneImg)
stone.velocityX=3
stone.lifetime=150
stoneG.add(stone)
    }
}

