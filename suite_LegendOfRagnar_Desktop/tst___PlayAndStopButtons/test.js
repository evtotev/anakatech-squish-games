import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "balanceVerifications_slot.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));
source(findFile("scripts", "imageVerifications.js"));

function main() 
{
    //clearCacheAndOpenGame(150,'!13223,!13223,!13223');
    
    openGame('cocos',150,'!13223,!13223,!13223','no');

    clickStartButton();
    
    clickPlayButtonImage();
    test.log('Play button clicked')
    
    clickStopButton();
    waitForImage(playBtn,{
    maxScale:117,
    	occurrence:2
    })
    test.log('Stop button clicked')
}
