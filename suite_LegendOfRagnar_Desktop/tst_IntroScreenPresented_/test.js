import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "images.js"));
source(findFile("scripts", "imageVerifications.js"));

function main() 
{    
    //clearCacheAndOpenGame(150);
    clearCache(150);

    openGame2('cocos',150,'','no');
    snooze(10);

    verifyIntroScreenPresented(introScreen, introScreenTolerant);
   
    clickStartButton();
    snooze(3);
    
    reloadBrowserTab();

    snooze(5);
    verifyIntroScreenPresented(introScreen, introScreenTolerant);
}
