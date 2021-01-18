class Game{
    constructor(){
       
    }
    getState(){
    var  gameStateRef =  database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
            }
            
         );
      
        
    }

    update(state){
    database.ref('/').update({
        'gameState': state
    });
    }

    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
        car1 = createSprite(100, 200)
        car1.addImage(car1Img)
        car2 = createSprite(300, 200)
        car2.addImage(car2Img)
        car3 = createSprite(500,200)
        car3.addImage(car3Img)
        car4 = createSprite(700, 200)
        car4.addImage(car4Img)

        cars = [car1, car2, car3, car4]
    }

    play(){
        form.hide();
        Player.getPlayerInfo();
        textSize(30);
        text("Game Started", 120, 100);
        //allPlayers contains name and distance 
        if(allPlayers !== undefined){
            // write code to display track
            background("grey");
            image(track, 0, -displayHeight*4, displayWidth, displayHeight*5);
            var display_position = 130;
          
            var index =0;
            var x=200;
            var y;
            for(var plr in allPlayers){
               /*  display_position += 20;
                textSize(15);
                text(allPlayers[plr].name + " : "+ allPlayers[plr].distance, 120, display_position) */
            
                index= index+1;
                x=x+200;
                y = displayHeight - allPlayers[plr].distance;
                cars[index-1].x = x;
                cars[index-1].y = y;
                if(index === player.index){
                   // cars[index-1].shapeColor = "red";
                   fill("lime")
                   ellipse(x,y,60,100);
                   text("you", x-50, y+100)
                   
                    camera.position.x = displayWidth/2
                    camera.position.y = cars[index-1].y
                }
            }

        }

        if(player.distance > 3860){
            gameState = 2
        }

        if(keyIsDown(UP_ARROW) && player.index !=null){
           player.distance += 50;
           player.update();
        }
        drawSprites();
    }
    end(){
        console.log("game endeddddd")
    }



}
