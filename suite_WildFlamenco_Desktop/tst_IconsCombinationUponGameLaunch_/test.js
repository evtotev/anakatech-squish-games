import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "images.js"));
source(findFile("scripts", "imageVerifications.js"));

function main()
{
    //clearCacheAndOpenGame(282,'');
        
    openGame('construct2',282,'','no');
    
    snooze(5);
    
    clickStartButton();

    verifyDefaultIcons(defaultIcons, defaultIconsTolerant);
}