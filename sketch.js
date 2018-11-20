var myImage;

function preload(){
myImage = loadImage ('./assets/ship.png ');
imageVite = loadImage ('./assets/ship.png ');
myAlien = loadImage ('./assets/alien.png ')
myAlienvite = loadImage ('./assets/alien.png ');
sfondo = loadImage ('./assets/sfondo.jpg ');


};
var value = 0;
var myBall  = {};
var pallottole = [];
var balls = [];
var imX = 300;
var imY;
var c = 0;
var rectX = 0 ;
var rectY ;
var vitaAlien = 0;
var perdi = 0;
var shot = 0;
var spara = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  setInterval(contare,2500);

setShakeThreshold(20);
setMoveThreshold(20);

   // come se creassi una copia del mio ogggetto+
    for (var i = 0; i< 400; i++ ) {
      myBall = new Ball(-100, height-60, 5);
      balls.push(myBall);
  }
    for (var a = 0; a< 400; a++ ) {
  myPallottola = new pallottola(-100, 70, 10);
  pallottole.push(myPallottola);
}}



function draw() {
  background(200);
  image(sfondo, 0, 0, width, height );
  imageMode(CORNER)
  stroke('black');
  line(0,38,width,38);
  fill('white');
  noStroke();

if(c == 0) {
  textSize(12);
  textAlign(CENTER);
  text('Rotate the device to move the spaceship\nand shake it to shoot', width/2, height/2)
}

if( c == 1) {

  for (var  b= 0; b < 1; b++ ) {
      pallottole[shot].move();
      pallottole[shot].display();
      pallottole[shot].x = rectX ;
      var distanza = dist(0,pallottole[shot].y,0, imY)
      if((((imX+40) -  pallottole[shot].x) ** 2) + ((imY - pallottole[shot].y) ** 2) < 800 && distanza < 10) {
      perdi += 1;
      if(perdi >= 20) {perdi = 20; shot = 0}
      tint('red');
    } else(noTint())
  }}

  push();
  noTint();
  image(imageVite, 12, 7, 32, 24 );
  var viteship = map(perdi, 0,20, 100,0);
  rect(50,15,viteship,10, 45,45,45,45)
  pop();

  if(rotationY< -25) {
    imX -= 5;
    if(imX< 0) { imX = width-40}
  }
  if(rotationY > 25) {
    imX += 5;
    if(imX > width) { imX = -20}
  }
    imY = height-60;
    if(perdi < 20) {
    image(myImage, imX, imY, 80,60 );}

  if(rectX > width)(frameCount = -80 )
    rectX = frameCount;
    rectY = 80;
    //fill(0,0,0, opacity);
    imageMode(CENTER);
    push();
    noTint();
    var vitealien = map(vitaAlien, 0,255, 100,0);
    image(myAlienvite, width-150, 20, 63, 42 );
    rect(width-130,15,vitealien,10, 45,45,45,45);
    if(vitaAlien < 255) {
    image(myAlien, rectX, rectY, 135, 90 );}
    pop();
    imageMode(CORNER);
    //rect(rectX, rectY, 50,50);

  if(c == 1) {
    for (var  j= 0; j < 20; j++ ) {
         balls[value].display();
         balls[value].move();
         balls[value].x = imX+40 ;
         var distanza1 = dist(0,balls[value].y,0, rectY)
         if((((rectX -  balls[value].x) ** 2) +200)+ ((rectY - balls[value].y) ** 2) < 600 && distanza1 <10) {
           vitaAlien += 5;
           tint('red');
          if(vitaAlien >= 255) {vitaAlien = 255; }
        } else {noTint();}
         }
}

  textSize(25)

if(vitaAlien >= 255) {
  textAlign(CENTER);
  text('YOU WON', width/2, height/2);
  shot = 0;
  }


if(perdi >= 20) {
  textAlign(CENTER)
  text('GAME OVER', width/2, height/2);
  }
 }


function Ball(_x, _y, _diameter) {
  this.x = _x;
  this.y = _y;
  this.diameter = _diameter;
  this.color = 'white';
  this.speed = -2;
  noStroke();



  this.display = function() {
      fill(this.color);
      ellipse (this.x, this.y, this.diameter);
  }

  this.move = function() {
    this.y += this.speed ;
  }
}

function pallottola(_x,_y,_diameter) {
  this.x = _x;
  this.y = _y;
  this.diameter = _diameter;
  this.color = 'white';
  this.speed = 5;
  this.display = function() {
  fill(this.color);
  ellipse(this.x, this.y, this.diameter)
  }
  this.move = function() {
  this.y += this.speed
  }
}

function deviceShaken() {
  c = 1;
  value = value+1
}


function contare() {
  shot = shot +1;
}
