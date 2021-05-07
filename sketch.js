
var wall,thickness ;
var bullet,speed,weight ;


function setup() {
  createCanvas(1600,400);
 
 bullet = createSprite(50,100,50,50);
 bullet.shapeColor = "green"; 
 
 bullet2 = createSprite(50,300,50,50);
 bullet2.shapeColor = "yellow"; 
 
 bullet3 = createSprite(50,500,50,50);
 bullet3.shapeColor = "red"; 
 
 
 
 wall = createSprite(1200,200,thickness,height/2);
 
 wall2 = createSprite(1200,200,thickness,height/2);
 
 wall3 = createSprite(1200,200,thickness,height/2);


speed = random(223,321)
weight = random(30,52)
thickness = random(22,83)


}

function draw() {
  background(255,255,255);  
 
 bullet.velocityX = speed;

 bullet2.velocityX = speed;
 
 bullet3.velocityX = speed;

 

 bullet.collide(wall);

 bullet2.collide(wall);

 bullet3.collide(wall);

 if(hasCollided(bullet,wall)){
   bullet.velocityX=0;
   var damage=0.5 *weight*speed*speed/(thickness*thickness*thickness);

  
  
  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }

  if(damage<10){

    wall.shapeColor=color(0,255,0);
  }
 }
 


 if(hasCollided(bullet,wall)){
  bullet2.velocityX=0;
  var damage=0.5 *weight*speed*speed/(thickness*thickness*thickness);

 
 if(damage>10){
   wall2.shapeColor=color(255,0,0);
 }

 if(damage<10){

   wall2.shapeColor=color(0,255,0);
 }
}



if(hasCollided(bullet,wall)){
  bullet3.velocityX=0;
  var damage=0.5 *weight*speed*speed/(thickness*thickness*thickness);

 
 if(damage>10){
   wall3.shapeColor=color(255,0,0);
 }

 if(damage<10){

   wall3.shapeColor=color(0,255,0);
 }
}

hasCollided();



 
 drawSprites();
}


function hasCollided(Lbullet,Lwalll){

  bulletRightEdge=bullet.x +bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge){

    return true
  }

return false;

}


