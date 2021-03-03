var wall,thickness;
var speed,weight,bullet;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50,200,50,5);
  bullet.velocityX=speed;
  bullet.shapeColor=color("white");

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(230,230,230);
  
}

function draw() {
  background(0,0,0)

  

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight * speed * speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor=color("red");
    }

    if(damage<10){
      wall.shapeColor=color("green");
    }
  }

  textSize(20);
  fill("red"); 
  text("Wall Not Effective if Damage > 10",150,240); 

  fill("green"); 
  text("Wall Effective if Damage < 10",150,270); 

  fill("blue"); 
  text("Damage:"+Math.round(0.5*weight*speed*speed/(thickness*thickness*thickness)),850,350);

  drawSprites();
}

function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x + bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>= wallLeftEdge)
  {
    return true
  }
  return false;
  
}

