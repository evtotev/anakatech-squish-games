import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "balanceVerifications_slot.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));
//known issue, already opened SF-648
function main()
{
    //clearCacheAndOpenGame(253, '!13063');
    
    clearCache(253);
    
    openGame2('cocos',253,'!13063','no');
    
    clickStartButton();
    
    let totalBet = getTotalBet();    
    test.log("totalBet: " + totalBet);
    
    let oldBalance = getBalance();
    test.log('Old balance: ' + oldBalance);
      
    clickPlayButton();
    test.log('Balance: ' + getBalance());
    
    clickImg(startBtnBonus, startBtnBonusTolerant);
    
    waitForImage(spinBtn);
    
    snooze(1);
    
    closeCurrentTab();
    
    currentApplicationContext().detach();
    snooze(2);
    startApplication('__squish__webhook');
    
    openGame2('cocos',253,'','no');

    snooze(5);
    
    waitForImage(spinBtn);
    
    playBonusGame();
    
    waitForImage(playBtn, playBtnTolerant);
    snooze(5);
    
    let totalWin = getTotalWin();
    test.log("totalWin: " + totalWin);
    
    let newBalance = getBalance();
    test.log('New balance: ' + newBalance);
        
    verifyBalance(totalBet, oldBalance, newBalance, totalWin);      
}
