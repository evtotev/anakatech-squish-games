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
    
    checkDontShowThisAgain(checkbox, checkboxTolerant);
    test.log('Checkbox clicked');
     
    clickStartButton();
    
    snooze(5);
    
    reloadBrowserTab();

    snooze(5);
    
    test.compare(waitForObjectExists(names.hud).visible, true);
}
