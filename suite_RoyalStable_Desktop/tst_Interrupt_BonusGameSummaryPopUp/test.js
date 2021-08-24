import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "balanceVerifications_slot.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));

function main()
{
    //clearCacheAndOpenGame(275,719);
    
    clearCache(275);
    
    openGame2('construct2',275,'!719','no');
    
    clickStartButton();
      
    let totalBet = getTotalBet();    
    test.log("totalBet: " + totalBet);
    
    let oldBalance = getBalance();
    test.log('Old balance: ' + oldBalance);
       
    clickPlayButton();
    
    waitForImage(trophyIcon, trophyIconTolerant);    
    clickImg(trophyIcon, trophyIconTolerant);    
    waitForImage(backBtn, backBtnTolerant);
    
    let multiplier = getMultiplier();
    
    const bonusWin = totalBet * multiplier;
    test.log('bonusWin: ' + bonusWin);
    
    closeCurrentTab();
    
    currentApplicationContext().detach();
    snooze(2);
    startApplication('__squish__webhook');
    
    openGame2('construct2',275,'','no');
    
    clickStartButton();
    
    test.imagePresent(playBtn, playBtnTolerant);
    
    let newBalance = getBalance();
    test.log('New balance: ' + newBalance);
    
    verifyBalance(totalBet, oldBalance, newBalance, bonusWin);      
}
