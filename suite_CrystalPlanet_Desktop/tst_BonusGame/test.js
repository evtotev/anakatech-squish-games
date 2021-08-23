import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "balanceVerifications_slot.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));
function main()

//https://netomedia.atlassian.net/browse/GSE-447

{
    //clearCacheAndOpenGame(253, '!13063');
        
    openGame('cocos',253,'!13063','no');
    
    clickStartButton();
    
    let totalBet = getTotalBet();    
    test.log("totalBet: " + totalBet);

    let oldBalance = getBalance();
    test.log('Old balance: ' + oldBalance);
      
    clickPlayButton();
    
    waitForImage(startBtnBonus, startBtnBonusTolerant);
    
    clickImg(startBtnBonus, startBtnBonusTolerant);
    
    snooze(4);
    
    playBonusGame();
    
    snooze(8);
   
    waitForImage(playBtn, playBtnTolerant);
    snooze(1);
     
    let newBalance = getBalance();
    test.log('New balance: ' + newBalance);
    snooze(1);

    let totalWin = getTotalWin();
    test.log("totalWIn: " + totalWin);
    
    verifyBalance(totalBet, oldBalance, newBalance, totalWin);      
}
