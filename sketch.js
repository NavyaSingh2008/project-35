//Create variables here
var dog, happyDog,food,foodStock,dogImage;
var database,foodS;
function preload()
{
  //load images here
  dogImage=loadImage('images/dogImg.png');
  happyDog=loadImage('images/dogImg1.png');
}

function setup() {
	createCanvas(800, 700);
  database = firebase.database();
	createCanvas(500, 500);
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImage);
  dog.scale=0.2
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  

  background(46,139,87)
  if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
  }
  
    drawSprites();
    textSize(22);
    fill("yellow");
    text("Remaining food "+foodS,160,150); 
    
    
  
  }
  
  function readStock(data){
    foodS=data.val();
  }
  function writeStock(x){
    if(x<=0){
     x=0;
    }else{
      x=x-1;
    }
    database.ref('/').update({
      'Food':x
    })
  }
  //add styles here




