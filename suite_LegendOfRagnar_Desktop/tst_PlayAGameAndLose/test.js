import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "balanceVerifications_slot.js"));
source(findFile("scripts", "images.js"));

function main()
{
    //clearCacheAndOpenGame(150,13223);
    
    openGame('cocos',150,'!13223','no');
    
    clickStartButton();

    let totalBet = getTotalBet();
    test.log('Total bet: ' + totalBet);

    let oldBalance = getBalance();
    test.log('Old balance: ' + oldBalance);
    
    clickPlayButtonImage(); 
      
    let newBalance = getBalance();
    test.log('New balance: ' + newBalance);

    waitForImage(playBtn);

    verifyBalanceWhenLose(newBalance, oldBalance, totalBet);
}

