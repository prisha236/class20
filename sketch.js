var fixedrectangle, movingrectangle;

function setup() {
  createCanvas(800,400);
 fixedrectangle= createSprite(400, 200, 50, 50);
 movingrectangle=createSprite(100,100,50,50);
 fixedrectangle.shapeColor="red";
 movingrectangle.shapeColor="red";
}

function draw() {
  background(255,255,255);
  movingrectangle.x=mouseX;
  movingrectangle.y=mouseY;
  if(movingrectangle.x-fixedrectangle.x<=movingrectangle.width/2+fixedrectangle.width/2 && fixedrectangle.x-movingrectangle.x<=fixedrectangle.width/2+movingrectangle.width/2 && fixedrectangle.y-movingrectangle.y<=fixedrectangle.height/2+movingrectangle.height/2 && movingrectangle.y-fixedrectangle.y<=movingrectangle.height/2+fixedrectangle.height/2 ){
    movingrectangle.shapeColor="blue";
    fixedrectangle.shapeColor="blue";
  }
  else
   {
   movingrectangle.shapeColor="red"
   fixedrectangle.shapeColor="red"; 
   }
  drawSprites();
}