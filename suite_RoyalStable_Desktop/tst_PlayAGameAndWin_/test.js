import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "balanceVerifications_slot.js"));
source(findFile("scripts", "images.js"));

function main() {
    //clearCacheAndOpenGame(275, 863);

    openGame('construct2', 275, '863', 'no');
    
    snooze(5);

    clickStartButton();

    let totalBet = getTotalBet();

    let oldBalance = getBalance();
    test.log('Old balance: ' + oldBalance);

    clickPlayButtonImage();

    waitForImage(playBtn, playBtnTolerant);

    let newBalance = getBalance();
    test.log('New balance: ' + newBalance);

    let bet = getBet();
    test.log("bet: " + bet);

    verifyBalanceWhenWin(newBalance, oldBalance, totalBet, bet, 10);
}