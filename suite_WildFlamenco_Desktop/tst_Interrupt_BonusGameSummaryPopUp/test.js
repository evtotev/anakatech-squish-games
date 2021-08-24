import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "balanceVerifications_slot.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));
//pop up closing too fast
function main()
{
    clearCache(282);
    
    openGame2('construct2', 282, 13159,'no');
    
    clickStartButton();
      
    let totalBet = getTotalBet();    
    test.log("totalBet: " + totalBet);
    
    let oldBalance = getBalance();
    test.log('Old balance: ' + oldBalance);
       
    clickPlayButton();
    test.log('Balance: ' + getBalance());
    
    waitForImage(pickBonusBtn, pickBonusBtnTolerant);
    
    playBonusGameToSummary();
    
    closeCurrentTab();
    
    currentApplicationContext().detach();
    snooze(2);
    startApplication('__squish__webhook');
    
    openGame2('construct2',282,'','no');
    
    snooze(5);
    
    clickStartButton();
    
    test.imagePresent(playBtn, playBtnTolerant);
    
    let newBalance = getBalance();
    test.log('New balance: ' + newBalance);
    
    verifyBalance(totalBet, oldBalance, newBalance, bonusWin);      
}
