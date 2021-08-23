import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "images.js"));
source(findFile("scripts", "suiteFunctions.js"));

function main() 
{
    //clearCacheAndOpenGame(253, '!13064');
        
    openGame('cocos',253,'!13064','no');
    
    clickStartButton();
    
    clickPlayButton();
    
    let oldGameSession = getGameSession();
    
    snooze(25);
           
    waitForImage(playBtn,playBtnTolerant);
                
    let newGameSession = getGameSession();
        
    test.compare(oldGameSession + ' (2)',newGameSession)
    
    clickImg(betDecrease); // just to stop win line animation
        
    waitForImage(wildExpanded,{
    maxScale:115,
    	occurrence:2
    });
    test.log('Wild expanded!')
}
