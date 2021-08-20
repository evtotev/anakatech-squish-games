import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "scratch_functions.js"));

function main() {
    //clearCacheAndOpenGame(217, '');
        
    openGame('construct2',217,'','no');   
    
    let oldGameSession = '';
    
    for (i = 0; i < 3; i++) {
        
        if (i != 0) {
            oldGameSession = getGameSession();
        }
        
        play();
        
        let newGameSession = test.pass(getGameSession());
        
            if (oldGameSession != newGameSession) {
                test.pass("Game session ID is disfferent for the new round");  
            } else {
                test.fail("Game session ID didn't change")
            }
        
    }
}
