import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "verifications.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));

function main()
{
    //clearCacheAndOpenGame(275, 692);
    
    clearCache(275);
    
    openGame2('construct2',275,'!692','no');
    
    clickStartButton();

    clickPlayButtonImage();
    
    select4Horses();
    
    clickStartFS();
    
    verifyFSFields();
    
    closeCurrentTab();
    
    currentApplicationContext().detach();
    snooze(2);
    startApplication('__squish__webhook');
    
    openGame2('construct2',275,'','no');
    
    snooze(3);

    verifyFSFields();

    playFS();
    
    test.imagePresent(playBtn, playBtnTolerant);
}
