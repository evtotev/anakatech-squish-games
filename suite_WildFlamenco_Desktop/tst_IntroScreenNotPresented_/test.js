import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "images.js"));
source(findFile("scripts", "imageVerifications.js"));
source(findFile("scripts", "urls.js"));

function main()
{
    clearCache(282);
        
    openGame('construct2',282,'','no');
    
    snooze(5);
    
    verifyIntroScreenPresented(introScreen, introScreenTolerant);
    
    clickImg(checkbox, checkboxTolerant);
    
    waitForImage(startBtn);
    
    clickStartButton();
    snooze(5);
    
    refreshTab();
    
    snooze(5);
    
    test.compare(waitForObjectExists(names.hud).visible, true);
}
