function setup() {
  createCanvas(600, 400);
  themeM.loop();
}


function normalGame(){
  background(roadImage);
  showPlayer();
  showCarLeft();
  moveCarLeft();
  movePlayer();
  backstartpositionLeft();
  checkCollideLeft();
  showScore();
  addScore();
  canMove();
}