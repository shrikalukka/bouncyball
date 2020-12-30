var fixedrectangle,movingrectangle;
function setup() {
  createCanvas(1200,800);
  createSprite(400, 200, 50, 50);
  fixedrectangle=createSprite(600,400,60,80);
  movingrectangle=createSprite(400,200,80,30);
  fixedrectangle.shapeColor="blue";
  movingrectangle.shapeColor="yellow";
  
}

function draw() {
  background(255,255,255);  
  movingrectangle.x=mouseX;
  movingrectangle.y=mouseY;
  if(movingrectangle.x-fixedrectangle.x<movingrectangle.width/2+fixedrectangle.width/2&&
    fixedrectangle.x-movingrectangle.x<movingrectangle.width/2+fixedrectangle.width/2&&
    movingrectangle.y-fixedrectangle.y<movingrectangle.height/2+fixedrectangle.height/2&&
    fixedrectangle.y-movingrectangle.y<movingrectangle.height/2+fixedrectangle.height/2){
movingrectangle.shapeColor="green";
fixedrectangle.shapeColor="green";
  }else{
    movingrectangle.shapeColor="red";
    fixedrectangle.shapeColor="red";
  }
    
  
  drawSprites();
}