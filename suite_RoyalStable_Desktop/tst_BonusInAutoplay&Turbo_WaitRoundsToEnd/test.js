import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "balanceVerifications_slot.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));
source(findFile("scripts", "imageVerifications.js"));

function main() {
    
    //clearCacheAndOpenGame(275, "!719,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830");
        
    openGame('construct2',275,'!719,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830','no');
    
    clickStartButton();

    click(names.turbo_btn);

    //    let totalBet = getTotalBet();
    //    test.log("totalBet: " + totalBet);
    //
    //    let bet = getBet();
    //    test.log("bet: " + bet);
    //
    //    let oldBalance = getBalance();
    //    test.log("oldBalance: " + oldBalance);
    //
    //    let multiplier = 0;

    startAutoplay();

    waitForImage(trophyIcon, trophyIconTolerant);
    waitForImage(backBtn, backBtnTolerant);
    //    multiplier = getMultiplier();

    //    let totalWin = getTotalWin();
    //    test.log('totalWin: ' + totalWin);
    //
    //    let bonusWin = totalBet * multiplier;
    //    test.log('bonusWin: ' + bonusWin);
    //
    //    totalWin += bonusWin;
    //
    //    let newBalance = getBalance();
    //    test.log("newBalance: " + newBalance);
    //
    //    verifyBalance(totalBet, oldBalance, newBalance, totalWin);

    while (true) {
        testSettings.imageNotFoundDebugging = false;

        try {
            if (findImage(playTurboBtn, playBtnTolerant)) {
                break;
            }
        } catch (e) {

        }
    }

    test.imagePresent(playTurboBtn, playBtnTolerant);
}
