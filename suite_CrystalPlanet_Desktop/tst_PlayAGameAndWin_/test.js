import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "balanceVerifications_slot.js"));
source(findFile("scripts", "images.js"));

function main()
{
    //clearCacheAndOpenGame(253, '!13066');    
        
    openGame('cocos',253,'!13066','no');
    
    clickStartButton();

    let totalBet = getTotalBet();
    
    let oldBalance = getBalance();
    test.log('Old balance: ' + oldBalance);
      
    clickPlayButton();

    waitForImage(playBtn,{maxScale:106,threshold:99.374});
    
    let newBalance = getBalance();
    test.log('New balance: ' + newBalance);
    
    let bet = getBet();
    test.log("bet: " + bet);

    verifyBalanceWhenWin(newBalance, oldBalance, totalBet, bet, 315);
}
