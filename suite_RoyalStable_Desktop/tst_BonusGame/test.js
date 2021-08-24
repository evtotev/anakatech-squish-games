import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "balanceVerifications_slot.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));

function main()
{
    //clearCacheAndOpenGame(275, 719);
        
    openGame('construct2',275,'!719','no');
    
    clickStartButton();
    
    let bet = getBet();
    test.log('bet: ' + bet);
    
    let totalBet = getTotalBet();    
    test.log("totalBet: " + totalBet);

    let oldBalance = getBalance();
    test.log('Old balance: ' + oldBalance);
      
    clickPlayButton();
    
    const multiplier = playBonusGame();
   
    waitForImage(playBtn, playBtnTolerant);
    snooze(1);
     
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
