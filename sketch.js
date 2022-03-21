//Create variables here
var dog, happyDog, database, foodS, foodStock

function preload()
{
	//load images here
  dogImage=loadImage("images/dogImg");
  dogHappyImage=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);

  dog=createSprite(50,300,60,100);
  dog.addImage(dogImage);

  database=firebase.database()
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46, 139, 87)
 
  //add styles here
if(keyWentDown(UP_ARROW))
{
  writeStock(foodS)
  dog.addImage("dogHappyImage");
}

drawSprites();

text("NOTE: Press UP_ARROW Key To Feed Drago Milk!",250,5);
fill("white");
textSize(35);

}

function readStock(data)
{
  foodS=data.val();
}

function writeStock(x)
{
  if(x<=0)
  {
    x=0;
  }
  else
  {
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}
