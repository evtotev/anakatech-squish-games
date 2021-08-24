import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "images.js"));
source(findFile("scripts", "imageVerifications.js"));

function main()
{
    //clearCacheAndOpenGame(275);
    
    clearCache(275);
    
    openGame2('construct2',275,'','no');
    
    verifyIntroScreenPresented(checkbox);
    
    checkDontShowThisAgain(checkbox);
    
    clickStartButton();
    snooze(3);
    
    refreshTab();

    snooze(5);
    
    test.compare(waitForObjectExists(names.hud).visible, true);
}
