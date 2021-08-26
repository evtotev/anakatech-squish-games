import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "balanceVerifications_slot.js"));
source(findFile("scripts", "images.js"));

function main()
{
    //clearCacheAndOpenGame(150,13233);
    
    openGame('cocos',150,'!13233','no');
    
    clickStartButton();

    let totalBet = getTotalBet();
    
    let oldBalance = getBalance();
    test.log('Old balance: ' + oldBalance);
      
    clickPlayButtonImage();

    waitForImage(playBtn,{maxScale:104,threshold:99.57});
    
    let newBalance = getBalance();
    test.log('New balance: ' + newBalance);
    
    let bet = getBet();
    test.log("bet: " + bet);

    verifyBalanceWhenWin(newBalance, oldBalance, totalBet, bet, 100);
}
