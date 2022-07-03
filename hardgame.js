function setup() {
  createCanvas(600, 400);
  themeM.loop();
}


function hardGame(){
  background(roadImage);
  showPlayer();
  showCarA();
  showCarB();
  moveCarA();
  moveCarB();
  movePlayer();
  backstartpositionA();
  backstartpositionB();
  checkCollideA();
  checkCollideB();
  showScore();
  addScore();
  canMove();
}