var dogImg1, dogImg2;
var dog, happydog;
var database, foodStockRef, foodStock;

function preload(){
  dogImg1 = loadImage("images/Dog.png");
  dogImg2 = loadImage("images/happydog.png");
}

function setup() {
	createCanvas(800, 600);
  dog = createSprite(250, 250, 20, 20);
  dog.addImage(dogImg1);
  dog.scale = 0.2;

  database = firebase.database();
  foodStockRef = database.ref('Food');
  foodStockRef.on("value", function(data){
    foodStock = data.val();
  });

}


function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    foodStock = foodStock - 1;
    updateFoodStock(foodStock);
    dog.addImage(dogImg2);
  }
  drawSprites();
  //add styles here
  fill("white");
  textSize(15);
  text("Press UP ARROW to feed the dog \n Food left: " + foodStock , 520, 50);

}

function updateFoodStock(stock){
  foodStockRef = database.ref('/');
  foodStockRef.update({
    'Food' : stock
  });
}



