import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "balanceVerifications_slot.js"));
source(findFile("scripts", "verifications.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));

function main()
{
    //clearCacheAndOpenGame(275, '692,,,,,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830');
        
    openGame('construct2',275,'692,,,,,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830','no');
    
    clickStartButton();

    let totalBet = getTotalBet();
    test.log("totalBet: " + totalBet);
    
    let oldBalance = getBalance();
    test.log('Old balance: ' + oldBalance);
    
    clickPlayButton();
    snooze(10);
    
    select4Horses();
    
    clickStartFS();
    test.log("Start button clicked");
    
    verifyFSFields();
    
    playFS();
    
    snooze(2);
    test.imageNotPresent(backBtn);
    
    let newBalance = getBalance();
    test.log('New balance: ' + newBalance);
    snooze(1);
    
    let totalWin = getTotalWin();
    test.log("totalWIn: " + totalWin);
    
    verifyBalanceWhenLose(newBalance, oldBalance, totalBet);
    
    waitForImage(playBtn, playBtnTolerant);
    test.pass(clickPlayButton());
    
}
