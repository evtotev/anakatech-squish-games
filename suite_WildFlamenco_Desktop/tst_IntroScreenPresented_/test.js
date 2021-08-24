import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "images.js"));
source(findFile("scripts", "imageVerifications.js"));

function main() 
{    
    //clearCacheAndOpenGame(282,'');
    
    clearCache(282);
        
    openGame2('construct2',282,'','no');
   
    snooze(10);
    verifyIntroScreenPresented(introScreen, introScreenTolerant);
   
    clickStartButton();
    
    snooze(1);
    
    refreshTab();
    
    snooze(2);

    verifyIntroScreenPresented(introScreen, introScreenTolerant);
}
