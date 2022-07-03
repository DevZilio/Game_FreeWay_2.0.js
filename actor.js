//Player variables
let yPlayer = 366;
let xPlayer = 100;
let collide = false;
let wPlayer = 60;
let hPlayer = 50;
let myScore = 0;

function showPlayer(){
  image(playerImage, xPlayer, yPlayer, wPlayer, hPlayer);
}

function movePlayer(){
  if (keyIsDown(UP_ARROW)){
    yPlayer -= (3 +(myScore/2));
  }
  if (keyIsDown(DOWN_ARROW)){
    if (canMove())
    yPlayer += (3 +(myScore/2));
  }
  if (keyIsDown(RIGHT_ARROW)){
    xPlayer += (3 +(myScore/2));
}
  if (keyIsDown(LEFT_ARROW)){
    xPlayer -= (3 +(myScore/2));
  }
}

function checkCollideA(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < carImagesA.length; i ++){collide = collideRectCircle(xCarsA[i], yCarsA[i], wCarsA[i], hCarsA[i], xPlayer, yPlayer, 15)
    if (collide){
    collided();
    collidedM.play();
      if (scorePlusZero()){
    myScore -= 1;
      }  
    }
  }
}

//check collision
function checkCollideB(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < carImagesB.length; i ++){collide = collideRectCircle(xCarsB[i], yCarsB[i], wCarsB[i], hCarsB[i], xPlayer, yPlayer, 15)
    if (collide){
    collided();
    collidedM.play();
      if (scorePlusZero()){
    myScore -= 1;
      }  
    }
  }
}

function checkCollideLeft(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < carImagesLeft.length; i ++){collide = collideRectCircle(xCarsLeft[i], yCarsLeft[i], wCarsLeft[i], hCarsLeft[i], xPlayer, yPlayer, 15)
    if (collide){
    collided();
    collidedM.play();
      if (scorePlusZero()){
    myScore -= 1;
      }  
    }
  }
}
function collided(){
  yPlayer = 400;
}

function showScore(){
  textAlign(CENTER);
  fill(color(255,249,60))
  textSize(25);
  text(myScore, 415, 378);
  text("My Score", 335, 378)
  
}

function addScore(){
  if (yPlayer < 20){
    myScore += 1;
    collided();
    scoreM.play();
  }
}

//check score, if score > 0, then mine 1 from myscore
function scorePlusZero(){
  return myScore > 0;
}

//check if actor can move, if true, can't back out board
function canMove(){
  return yPlayer < 367; 
}