import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "verifications.js"));
source(findFile("scripts", "balanceVerifications_slot.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));
source(findFile("scripts", "imageVerifications.js"));

function main() {
    
    //clearCacheAndOpenGame(282, '13168,!13602,!13602,!13602,!13602,!13602,!13602,!13602,!13602');    

    clearCache(282);
    
    openGame2('construct2',282,'13168,!13602,!13602,!13602,!13602,!13602,!13602,!13602,!13602','no');
    
    clickStartButton();

    click(names.bet_less);
    let totalBetBeforeFS = getTotalBet();

    clickPlayButton();

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
    
    openGame2('construct2',282,'','no');

    snooze(5);

    verifyFSFields();
    
    totalBetAfterInterrupt = getTotalBet();
    
    test.compare(totalBetDuringFS, totalBetAfterInterrupt);

    playFS();

    test.imagePresent(playBtn, playBtnTolerant);
    
    totalBetAfterFS = getTotalBet();
    
    test.compare(totalBetAfterInterrupt, totalBetAfterFS);

}
