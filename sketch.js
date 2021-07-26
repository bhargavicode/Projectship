var sea,ship,seaIng,shipIng
function preload(){
seaIng=loadImage ("sea.png")
shipIng=loadAnimation("ship1.png","ship2.png","ship3.png","ship4.png")
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(400,200)
  sea.addImage(seaIng)
  sea.velocityX=-5
  sea.scale=0.3
  ship=createSprite(130,200,30,30)
  ship.addAnimation("movingship",shipIng)
  ship.scale=0.25
}

function draw() {
  background("blue");
  sea.velocityX=-3
  if(sea.x<0){
    sea.x=sea.widght/8
  }
 drawSprites()
}