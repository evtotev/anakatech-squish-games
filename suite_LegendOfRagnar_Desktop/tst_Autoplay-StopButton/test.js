import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));

function main() 
{
    //clearCacheAndOpenGame(150,'!13223,!13223,!13223');
    
    openGame('cocos',150,'!13223,!13223,!13223','no');
    
    clickStartButton();
    
    startAutoplay();
        
    snooze(3);
    
    clickImg(stopAutoplayBtn);

    test.imagePresent(playBtn);
}
