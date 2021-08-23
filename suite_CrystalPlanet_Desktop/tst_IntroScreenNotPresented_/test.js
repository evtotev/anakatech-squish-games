import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "images.js"));
source(findFile("scripts", "imageVerifications.js"));

function main()
{
    //clearCacheAndOpenGame(253, '');
        
    openGame2('cocos',253,'','no');
    
    snooze(5);
    
    verifyIntroScreenPresented(checkbox, checkboxTolerant);
    
    clickImg(checkbox, checkboxTolerant);
    test.log('Checkbox clicked');
     
    clickStartButton();
    snooze(3);
    
//    closeCurrentTab();
//    
//    currentApplicationContext().detach();
//    snooze(2);
//    startApplication('__squish__webhook');
    
    reloadBrowserTab();

    snooze(5);
    
    test.compare(waitForObjectExists(names.hud).visible, true);
}
