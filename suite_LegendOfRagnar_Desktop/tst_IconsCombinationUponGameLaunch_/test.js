import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "images.js"));
source(findFile("scripts", "imageVerifications.js"));

function main()
{
    //clearCacheAndOpenGame(150);
    
    //clearCache(150);
    
    openGame('cocos',150,'','no');
    
    snooze(5);
    
    clickStartButton();

    verifyDefaultIcons(defaultIcons, defaultIconsTolerant);
}

