import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "verifications.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));

function main()
{
    //clearCacheAndOpenGame(282, 13168);

    clearCache(282);
    
    openGame2('construct2',282,'13168','no');
    
    clickStartButton();
    
    const totalBet = getTotalBet();

    clickPlayButton();
    
    test.imagePresent(pickFSbtn, pickFSbtnTolerant);
   
    clickStartFS();
    
    verifyFSFields(totalBet);
    
    closeCurrentTab();
    
    currentApplicationContext().detach();
    snooze(2);
    startApplication('__squish__webhook');
    
    openGame2('construct2',282,'','no');

    snooze(5);

    verifyFSFields(totalBet);

    playFS();
    
    test.imagePresent(playBtn, playBtnTolerant);
}
