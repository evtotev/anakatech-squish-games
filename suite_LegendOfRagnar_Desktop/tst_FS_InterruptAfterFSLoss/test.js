import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "verifications.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));

function main()
{
    //clearCacheAndOpenGame(150, '!13680,,!13299,!13299,!13299,!13299,!13299');
    
    clearCache(150);
    
    openGame2('cocos',150,'!13680,,!13299,!13299,!13299,!13299,!13299','no');
    
    clickStartButton();

    clickPlayButton();
    
    waitForImage(pickFSbtn, {timeout:35000});

    pickFS();
    snooze(4);
    
    verifyFSFields();
     
    while (true) {
        testSettings.imageNotFoundDebugging = false;
        try{
            if (getSpinWin() === 0) {
                snooze(3);
                closeCurrentTab();     
                snooze(5);
                break;
            }
        } catch(e) {
            test.log('TotalBet > 0');
        }
    }
    
    currentApplicationContext().detach();
    snooze(2);
    startApplication('__squish__webhook');
    
    openGame2('cocos',150,'','no');
    
    snooze(5);

    verifyFSFields();

    playFS();
    
    test.imagePresent(playBtn, playBtnTolerant);
}
