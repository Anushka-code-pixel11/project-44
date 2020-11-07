class Game {
    constructor(){}
    
    gameState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
     
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    start(){
      if(gameState === 0){
        player = new Player();
        player.getCount();
        form = new Form()
        form.display();
      }
    }
  
    play(){
      form.hide();
      
      fill("blue");
      stroke("red");
      textSize(30);
      textFont("comic sans ms");
      text("Game Start",120,100);
  
      Player.getPlayerInfo();
  
      if(allPlayers !== undefined){
        for(var plr in allPlayers){
          obstacles = createSprite(200,200,50,50);
          plr1 = createSprite(400,400,20,20);
          plr1.addImage(plr1Img);
          plr1.scale = 0.1; 
        }
      }
      
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance += 50;
        player.update();
      }
      drawSprites();  
    }

  }
  