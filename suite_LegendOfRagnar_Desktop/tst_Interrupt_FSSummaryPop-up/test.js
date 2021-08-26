import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "verifications.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));
source(findFile("scripts", "imageVerifications.js"));

function main()
{
    //clearCacheAndOpenGame(150, 13243);
    
    clearCache(150);
    
    openGame2('cocos',150,'13243','no');
    
    clickStartButton();

    clickPlayButtonImage();
        
    clickImg(pickFSbtn, pickFSbtnTolerant);
        
    verifyFSFields();
    
    const interrupt = 'fsSummary';
    playFS(interrupt);
    
    snooze(1);
    
    closeCurrentTab();
    
    currentApplicationContext().detach();
    snooze(2);
    startApplication('__squish__webhook');
    
    openGame2('cocos',150,'','no');
    
    snooze(5);
    
    clickStartButton();
    
    snooze(5);
    
    verifyDefaultIcons(defaultIcons, defaultIconsTolerant);

}
