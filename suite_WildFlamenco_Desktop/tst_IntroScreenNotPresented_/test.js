import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "images.js"));
source(findFile("scripts", "imageVerifications.js"));
source(findFile("scripts", "urls.js"));

function main()
{
    clearCache(282);
        
    openGame2('construct2',282,'','no');
    
    snooze(10);
    
    verifyIntroScreenPresented(introScreen, introScreenTolerant);
    
    checkDontShowThisAgain(checkbox,checkboxTolerant);
    test.log('Checkbox clicked');
    
    waitForImage(startBtn);
    
    clickStartButton();
    
    snooze(5);
    
    reloadBrowserTab();

    snooze(5);
    
    test.compare(waitForObjectExists(names.hud).visible, true);
}
