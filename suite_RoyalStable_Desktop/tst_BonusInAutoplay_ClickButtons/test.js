import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));
source(findFile("scripts", "verifications.js"));
source(findFile("scripts", "balanceVerifications_slot.js"));

//total win is not displayed on this version - so can't verify the bonus win and balance update

function main() {
    
    //clearCacheAndOpenGame(275,'!719,830,830,830,830,830,830,830,830,830,830,830,830,830');
        
    openGame('construct2',275,'!719,830,830,830,830,830,830,830,830,830,830,830,830,830','no');
    
    clickStartButton();
    
    let bet = getBet();
    test.log('bet: ' + bet);
    
    let totalBet = getTotalBet();    
    test.log("totalBet: " + totalBet);

    let oldBalance = getBalance();
    test.log('Old balance: ' + oldBalance);

    startAutoplay();
    
    waitForImage(backBtn, backBtnTolerant);
    let multiplier = getMultiplier();    
    
    while (true) {

        testSettings.imageNotFoundDebugging = false;
       
        try {
            if (findImage(playBtn, playBtnTolerant)) {
                break;
            }
        } catch (e) {
            
        }
    }

    test.imagePresent(playBtn);
    let newBalance = getBalance();
    test.log('New balance: ' + newBalance);
    snooze(1);
    
    const bonusWin = totalBet * multiplier;
    test.log('bonusWin: ' + bonusWin);
    
    let totalWin = getTotalWin();
    test.log("totalWin: " + totalWin);
    
    test.compare(bonusWin, totalWin);
    
    verifyBalance(totalBet, oldBalance, newBalance, totalWin); 
}
