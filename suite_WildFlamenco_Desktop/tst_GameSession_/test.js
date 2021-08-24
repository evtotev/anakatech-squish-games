import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "images.js"));
source(findFile("scripts", "suiteFunctions.js"));

function main() 
{
    //clearCacheAndOpenGame(282,'13147,13147,13147');
        
    openGame('construct2',282,'!13147,!13147,!13147','no');
    
    clickStartButton();
    
    let oldGameSession = '';
    
    for (i = 0; i < 3; i++) {
        
        if (i != 0) {
            oldGameSession = getGameSession();
        }
        
        clickPlayButton();
        
       // handleBonusFSGames();
        
        let newGameSession = test.pass(getGameSession());
        
            if (oldGameSession != newGameSession) {
                test.pass("Game session ID is disfferent for the new round");  
            } else {
                test.fail("Game session ID didn't change")
            }
        
    }
}
