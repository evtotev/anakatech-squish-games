import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "images.js"));
source(findFile("scripts", "imageVerifications.js"));

function main() 
{    
    //clearCacheAndOpenGame(275);
    
    clearCache(275);
    
    openGame2('construct2',275,'','no');
    
    snooze(10);

    verifyIntroScreenPresented(checkbox);

    clickStartButton();
    
    snooze(4);
    
    reloadBrowserTab();
    
    snooze(5);

    verifyIntroScreenPresented(checkbox);
}
