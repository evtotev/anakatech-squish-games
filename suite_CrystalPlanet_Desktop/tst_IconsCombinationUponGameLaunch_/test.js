import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "images.js"));
source(findFile("scripts", "imageVerifications.js"));

function main()
{
    //clearCacheAndOpenGame(253, '');
        
    openGame('cocos',253,'','no');
    
    clickStartButton();

    verifyDefaultIcons(defaultIcons, defaultIconsTolerant);
}

