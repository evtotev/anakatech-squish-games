import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "balanceVerifications_slot.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));
source(findFile("scripts", "imageVerifications.js"));

function main() 
{
    //clearCacheAndOpenGame(253, '!13797,!13797,!13797');
        
    openGame('cocos',253,'!13797,!13797,!13797','no');

    clickStartButton();
    
    clickPlayButtonImage();
    test.log('Play button clicked')
    
    clickStopButton();
    
    waitForImage(playBtn,{
    maxScale:106
    })
    test.log('Stop button clicked')
}
