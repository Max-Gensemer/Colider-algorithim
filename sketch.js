var coliding_object, moving_object;


function setup() {
  createCanvas(800,400);


  coliding_object = createSprite(400, 200, 50, 50);
  coliding_object.shapeColor = "green";

  moving_object = createSprite(450,200,50,50);
  moving_object.shapeColor = "green";
}

function draw() {

  moving_object.y = World.mouseY;

  moving_object.x = World.mouseX;

 if(moving_object.y - coliding_object.y < coliding_object.height/2 + moving_object.height/2 &&
  coliding_object.y - moving_object.y < coliding_object.height/2 + moving_object.height/2 &&
  moving_object.x - coliding_object.x < coliding_object.width/2 + moving_object.width/2 &&
  coliding_object.x - moving_object.x < coliding_object.width/2 + moving_object.width/2 ){

  coliding_object.shapeColor = "blue";

  moving_object.shapeColor = "blue";

 }

else{

  coliding_object.shapeColor = "green";
  moving_object.shapeColor = "green";
}

  background("red");  
  drawSprites();
}