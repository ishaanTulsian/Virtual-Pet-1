//Create variables here
var dog, dogHappy, foodS, foodStock, dogImg, database;   

function preload()
{
  //load images here
  dogImg = loadImage('images/dogImg.png');
  dogHappy = loadImage('images/dogImg1.png');

}

function setup() {
  database = firebase.database();
  
  createCanvas(500, 500);
  dog = createSprite(250,250);
  image(dogImg,250,250);
  dog.scale = 0.5;

  foodStock=database.ref('Food');
  foodStock.on('value', readStock)

}


function draw() {  
  background(46, 139, 87)
  
  
  /*if(keyWentDown(UP_ARROW)){
    database.ref('/').update({
      'Food':stock
      });
  }*/

  if(keyWentDown(UP_ARROW)){
    var stock = foodS-1;
    writeStock(stock);
    dog.addImage(dogHappy);
  }

  text(foodS,250,100);

  drawSprites();
  //add styles here
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  });
}



