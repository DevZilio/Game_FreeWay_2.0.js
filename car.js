//Code car Normal Game
let xCarsLeft = [600, 600, 600, 600, 600, 600, 600];
let yCarsLeft = [50, 87, 108, 197, 220, 244, 2];
let speedCarsLeft = [1.2,1.9, 3, 2.2,4,2.3,1.3];
let wCarsLeft = [100,180, 110, 100, 120, 100, 50]
let hCarsLeft = [60,60,80,50,60,80,50]

function showCarLeft(){
  for (let i = 0; i < carImagesLeft.length; i ++){
    image(carImagesLeft[i], xCarsLeft[i], yCarsLeft[i], wCarsLeft[i], hCarsLeft[i]);
  }
}

function moveCarLeft(){
  for (let i = 0; i < carImagesLeft.length; i ++){
    xCarsLeft[i] -= (speedCarsLeft[i] + myScore/2);
  }
}

function backstartpositionLeft(){
  for (let i = 0; i < carImagesLeft.length; i ++){
    if (passAllBoardLeft(xCarsLeft[i])){
      xCarsLeft[i] = 600;
    }
  }
}


  
function passAllBoardLeft(xCarro){
  return xCarro < - 190;
}







//Code car Hard Game

//Up side 4un - A
let xCarsA = [600, 600, 600, 600];
let yCarsA = [50, 87, 108, 2];
let speedCarsA = [1.5,3.5, 2, 1.2];
let wCarsA = [100,180, 110, 50];
let hCarsA = [60,60,80,50]

//Down side 3un - B
let xCarsB = [0, 0, 0];
let yCarsB = [197, 220, 244];
let speedCarsB = [-2.5,-1.8,-1.3];
let wCarsB = [100, 120, 100,];
let hCarsB = [50,60,80]


function showCarA(){
  for (let i = 0; i < carImagesA.length; i ++){
    image(carImagesA[i], xCarsA[i], yCarsA[i], wCarsA[i], hCarsA[i]);
  }
}

function showCarB(){
  for (let i = 0; i < carImagesB.length; i ++){
    image(carImagesB[i], xCarsB[i], yCarsB[i], wCarsB[i], hCarsB[i]);
  }
}

function moveCarA(){
  for (let i = 0; i < carImagesA.length; i ++){
    xCarsA[i] -= (speedCarsA[i] + myScore);
  }
}

function moveCarB(){
  for (let i = 0; i < carImagesB.length; i ++){
    xCarsB[i] -= (speedCarsB[i] - myScore);
  }
}

function backstartpositionA(){
  for (let i = 0; i < carImagesA.length; i ++){
    if (passAllBoardA(xCarsA[i])){
      xCarsA[i] = 600;
    }
  }
}

function backstartpositionB(){
  for (let i = 0; i < carImagesB.length; i ++){
    if (passAllBoardB(xCarsB[i])){
      xCarsB[i] = -100;
    }
  }
}

  
function passAllBoardA(xCarroA){
  return xCarroA < - 200;
}


function passAllBoardB(xCarroB){
  return xCarroB > 700;
}