//Varible for know what page should be show
let screen = 0;

function setup(){
  createCanvas(600, 400);
  themeM.loop();
  
}


function draw() {
  if(screen==0){
    mainGame();
  }
  if(screen==1){
    normalGame(); 
  }
  if(screen==2){
    hardGame();
  }
}


console.log("By DevZilio")



