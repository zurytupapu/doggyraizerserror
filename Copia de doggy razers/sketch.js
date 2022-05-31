var database, canvas;

var gameState =0;
var playerCount=0;
var distance=0;
var skin1img
var skin2img
var skin3img
var skin4img

var allplayers, player1;

var car1, car2, car3, car4, cars; //4 autos y matriz para guardar autos

function preload(){
  //perritoEsperaImg = loadImage("fotos/perritoEspera.png")
  skin1img=loadImage("fotos/skin1.png")
  skin2img=loadImage("fotos/skin2.png")
  skin3img=loadImage("fotos/skin3.png")
  skin4img=loadImage("fotos/skin4.png")
  
}

function setup(){
    canvas = createCanvas(displayWidth -20,  displayHeight-30); //Ajusta automáticamente el tamaño de la pantalla del dispositivo
    database = firebase.database(); //Crea una base de datos en firebase

    game1 = new Game();
    console.log("PASO 1: game1.getState()");
    game1.getState();

    console.log("PASO 2: game1.start()");
    game1.start();
}//Fin setup


function draw(){
   background(205, 92, 92); //RGB rojoIndian
    
    if(playerCount === 4){
        game1.update(1); //Actualiza el estado del juego, pasando 1 como parámetro a la función update de Game.js
    }//Fin if

    if(gameState === 1){
        clear(); //?????????????????????
        game1.play(); //Manda a llamar la función play() de Game.js
    }//Fin if
}//Fin draw






/*var database; 
var gameState=0
var playerCount=0
var distance=0
var form1
var player1
var game1
var carSpritev1
var  carSpritev2
var  carSpritev3
var  carSpritev4
var cars= []
var allplayers
var perritoEsperaImg

function preload(){
  perritoEsperaImg = loadImage("fotos/perritoEspera.png")
}

function setup(){
    createCanvas(windowWidth,windowHeight)
    database=firebase.database()
 
    game1=new Game();
    game1.getState()
    game1.start()

}

function draw(){
  background("white");
  
  if(playerCount === 4){
    game1.update(1); 
  }//Fin if

if(gameState === 1){

    game1.play(); 
}
  
}*/


