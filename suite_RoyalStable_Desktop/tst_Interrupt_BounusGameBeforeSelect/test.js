import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "balanceVerifications_slot.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));
// doesn't update the balance there is open bug for this
function main()
{
    clearCache(275);
    
    openGame2('construct2',275,'!719','no');    
    
    clickStartButton();
    
    let totalBet = getTotalBet();    
    test.log("totalBet: " + totalBet);
    
    let oldBalance = getBalance();
    test.log('Old balance: ' + oldBalance);
      
    clickPlayButton();
    test.log('Balance: ' + getBalance());
    
    trophyIconTolerant.timeout = 30000;
    
    waitForImage(trophyIcon, trophyIconTolerant);

    closeCurrentTab();
    
    currentApplicationContext().detach();
    snooze(2);
    startApplication('__squish__webhook');
    
    openGame2('cocos',275,'!719','no');

    snooze(5);    
    
    waitForImage(trophyIcon,trophyIconTolerant);
    
    const multiplier = playBonusGame();
    
    waitForImage(playBtn, playBtnTolerant);
    snooze(5);
    
    const bonusWin = totalBet * multiplier;
    test.log('bonusWin: ' + bonusWin);
    
    let totalWin = getTotalWin();
    test.log("totalWin: " + totalWin);
    
    let newBalance = getBalance();
    test.log('New balance: ' + newBalance);
    
    test.compare(bonusWin, totalWin);
    
    verifyBalance(totalBet, oldBalance, newBalance, totalWin);      
}
