import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "images.js"));
source(findFile("scripts", "imageVerifications.js"));

function main()
{
    //clearCacheAndOpenGame(275);
        
    openGame('construct2',275,'','no');
    
    snooze(5);
    
    clickStartButton();

    verifyDefaultIcons(defaultIcons);
}