import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "verifications.js"));
source(findFile("scripts", "balanceVerifications_slot.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));
source(findFile("scripts", "imageVerifications.js"));

function main() {
    
    //clearCacheAndOpenGame(150,'!13680,,!13364,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13364');

    clearCache(150);
    
    openGame2('cocos',150,'!13680,,!13364,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13364','no');
    
    clickStartButton();

    click(names.bet_less);
    let totalBetBeforeFS = getTotalBet();

    clickPlayButtonImage();

    snooze(10);
    
    waitForImage(pickFSbtn, {timeout:35000});

    pickFS();
    
    snooze(4);
    
    verifyFSFields();
    
    totalBetDuringFS = getTotalBet();
    
    test.compare(totalBetBeforeFS, totalBetDuringFS);
    
    snooze(1);
    
    closeCurrentTab();
    
    currentApplicationContext().detach();
    snooze(2);
    startApplication('__squish__webhook');
    
    openGame2('cocos',150,'','no');
    
    snooze(5);

    click(names.clearCheat);
    
    openGameOnNewTab();
    
    snooze(5);

    verifyFSFields();
    
    totalBetAfterInterrupt = getTotalBet();
    
    test.compare(totalBetDuringFS, totalBetAfterInterrupt);

    playFS();

    test.imagePresent(playBtn, playBtnTolerant);
    
    totalBetAfterFS = getTotalBet();
    
    test.compare(totalBetAfterInterrupt, totalBetAfterFS);

}
