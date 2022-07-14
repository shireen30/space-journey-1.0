var spacebg, rocketimg
var spacebgimg , rocket 


function preload(){
  spacebgimg = loadImage("assets/spacebg.jpg");
  rocketimg = loadImage("assets/rocket.png");
}

function setup(){
  
createCanvas(windowWidth,windowHeight);

spacebg = createSprite(windowWidth/2, windowHeight/2)
spacebg.addImage("spacebg", spacebgimg);
spacebg.scale = 2.5
spacebg.velocityY=3;

rocket = createSprite(300,600,20,50)
rocket.addImage("rocket", rocketimg)
rocket.scale = 0.5
}

function draw() {
background(0)
console.log(windowHeight)

if(spacebg.y>windowHeight/2+100){
  spacebg.y=windowHeight/2;
}


rocket.x=mouseX


  drawSprites()
  
  
  
  
  }



