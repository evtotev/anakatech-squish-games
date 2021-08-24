import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));

function main() 
{
    //clearCacheAndOpenGame(275);
        
    openGame('construct2',275,'','no');

    clickStartButton();
    
    startAutoplay();
    
    snooze(3);
    
    clickImg(stopAutoplayBtn);

    test.imagePresent(playBtn);
}
