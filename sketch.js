const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var canvas, bg; 
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var form, player, game;
var obstacles;
var plr1, plr2;

function preload(){
 // bg = loadImage("images/bg.jpg");
 plr1Img = loadImage("images/player1.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight - 30);

  engine = Engine.create();
  world = engine.world;
  
  database = firebase.database();
  game = new Game();
  game.gameState();
  game.start();

  Engine.run(engine);
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  
  if(gameState === 1){
    clear();
    game.play();
  }

  drawSprites();  
}

