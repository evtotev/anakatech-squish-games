import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "balanceVerifications_slot.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));
// at the end we just compare if the new balance is bigger because there is no way to take the bonus win
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
       
    clickPlayButtonImage();
    test.log('Balance: ' + getBalance());
    
    waitForImage(startBtnBonus, startBtnBonusTolerant);
    clickImg(startBtnBonus, startBtnBonusTolerant);
    
    snooze(3);
    
    let interrupt = "bonusSummary";
    playBonusGame(interrupt);
    
    closeCurrentTab();
    
    currentApplicationContext().detach();
    snooze(2);
    startApplication('__squish__webhook');
    
    openGame2('cocos',253,'','no');    
    
    clickStartButton();
    
    test.imagePresent(playBtn, playBtnTolerant);
    
    snooze(2);
    
    let newBalance = getBalance();
    test.log('New balance: ' + newBalance);
    
    if (newBalance > oldBalance){
        test.log('New balance is bigger than old balance')
    } else {
        test.log('New balance is not bigger than old balance')
    }
    //verifyBalance(totalBet, oldBalance, newBalance, bonusWin);      
}
