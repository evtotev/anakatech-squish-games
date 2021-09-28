import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "balanceVerifications_slot.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));

function main() {        
    
    openGame('cocos',150,'13243','no');
    
    waitForImage(startBtn);
    clickStartButton();
    
    let totalBet = getTotalBet();    
    test.log("totalBet: " + totalBet);

    let oldBalance = getBalance();
    test.log('Old balance: ' + oldBalance);
      
    clickPlayButtonImage();
    
    waitForImage(pickBonusBtn, pickBonusBtnTolerant);
    
    pickBonus();
    
    playBonusGame();
   
    waitForImage(playBtn, playBtnTolerant);
    snooze(1);
     
    let newBalance = getBalance();
    test.log('New balance: ' + newBalance);
    snooze(1);

    let totalWin = getTotalWin();
    test.log("totalWIn: " + totalWin);
    
    verifyBalance(totalBet, oldBalance, newBalance, totalWin);      
}
