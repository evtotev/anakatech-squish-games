import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "verifications.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));

function main()
{
    //clearCacheAndOpenGame(150, 13243);
    clearCache(150);
    
    openGame2('cocos',150,'13243','no');
    
    clickStartButton();

    clickPlayButtonImage();
    
    clickImg(pickFSbtn, pickFSbtnTolerant);
        
    verifyFSFields();
    
    snooze(1);
    
    closeCurrentTab();
    
    currentApplicationContext().detach();
    snooze(2);
    startApplication('__squish__webhook');
    
    openGame2('cocos',150,'','no');
    
    snooze(5);

    verifyFSFields();

    playFS();
    
    test.imagePresent(playBtn, playBtnTolerant);
}
