import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "verifications.js"));
source(findFile("scripts", "balanceVerifications_slot.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));
source(findFile("scripts", "imageVerifications.js"));

function main() {
    
    //clearCacheAndOpenGame(275, 692);
    
    clearCache(275);
    
    openGame2('construct2',275,'!692','no');

    clickStartButton();

    click(names.bet_less);
    let totalBetBeforeFS = getTotalBet();

    clickPlayButton();

    select4Horses();

    clickStartFS();

    verifyFSFields();
    totalBetDuringFS = getTotalBet();
    test.compare(totalBetBeforeFS, totalBetDuringFS);

    closeCurrentTab();
    
    currentApplicationContext().detach();
    snooze(2);
    startApplication('__squish__webhook');
    
    openGame2('construct2',275,'','no');
    
    verifyFSFields();
    totalBetAfterInterrupt = getTotalBet();
    test.compare(totalBetDuringFS, totalBetAfterInterrupt);

    playFS();

    test.imagePresent(playBtn, playBtnTolerant);
    totalBetAfterFS = getTotalBet();
    test.compare(totalBetAfterInterrupt, totalBetAfterFS);

}
