import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "balanceVerifications_slot.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));

function main()
{
    clearCache(282);
    
    openGame2('construct2',282,'!13159','no');
        
    clickStartButton();
    
    let totalBet = getTotalBet();    
    test.log("totalBet: " + totalBet);
    
    let oldBalance = getBalance();
    test.log('Old balance: ' + oldBalance);
      
    clickPlayButton();
    test.log('Balance: ' + getBalance());
    
    snooze(6);
    
    waitForImage(pickBonusBtn, pickBonusBtnTolerant);
    
    snooze(3);
    
    closeCurrentTab();
    
    currentApplicationContext().detach();
    snooze(2);
    startApplication('__squish__webhook');
    
    openGame2('construct2',282,'','no');
    
    snooze(5);
    
    waitForImage(pickBonusBtn, pickBonusBtnTolerant);
        
    playBonusGame();
    
    waitForImage(playBtn, playBtnTolerant);
    snooze(5);
    
    let totalWin = getTotalWin();
    test.log("totalWin: " + totalWin);
    
    let newBalance = getBalance();
    test.log('New balance: ' + newBalance);
        
    verifyBalance(totalBet, oldBalance, newBalance, totalWin);      
}
