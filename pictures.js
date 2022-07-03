//Pictures of the game
let roadImage;
let playerImage;
let car1Image;
let car2Image;
let car3Image;
let car4Image;
let skater;

//Music of the game
let collidedM;
let scoreM;
let themeM;

function preload(){
  roadImage = loadImage("Pictures/road.png")
  playerImage = loadImage("Pictures/Actor.png")
  car1Image = loadImage("Pictures/FOODTRUCK.png")
  car2Image = loadImage("Pictures/POLICE.png")
  car3Image = loadImage("Pictures/TRUCK.png")
  car4Image = loadImage("Pictures/GREENCAR.png")
  car5Image = loadImage("Pictures/TRUCK2.png")
  car6Image = loadImage("Pictures/BIGTRUCK.png")
  car7Image = loadImage("Pictures/GREENCARLEFT.png")
  car8Image = loadImage("Pictures/TRUCK2LEFT.png")
  car9Image = loadImage("Pictures/BIGTRUCKLEFT.png")
  skater = loadImage("Pictures/SKATER.png")
  carImagesA = [car1Image, car2Image, car3Image, skater];
  carImagesB = [car4Image, car5Image, car6Image];
  carImagesLeft = [car1Image, car2Image, car3Image, car7Image, car8Image, car9Image, skater];
  collidedM = loadSound("music/collided.wav");
  scoreM = loadSound("music/score.wav");
  themeM = loadSound("music/theme.wav");
  backgroundMainGame = loadImage("Pictures/main.png")

}