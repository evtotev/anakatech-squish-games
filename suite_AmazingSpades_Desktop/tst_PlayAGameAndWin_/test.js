import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "scratch_functions.js"));
source(findFile("scripts", "balanceVerifications_scratch.js"));
source(findFile("scripts", "images.js"));

function main()
{
    //clearCacheAndOpenGame(217, 354);
        
    openGame('construct2',217,'354','no');

    let totalBet = getTotalBet();
    test.log('Total bet: ' + totalBet);    
    
    let oldBalance = getBalance();
    test.log('Old balance: ' + oldBalance);
      
    play();

    waitForImage(playBtn, playBtnTolerant);
    
    let newBalance = getBalance();
    test.log('New balance: ' + newBalance);
    
    let bet = getBet();
    test.log("bet: " + bet);

    verifyBalanceWhenWin(newBalance, oldBalance, totalBet, bet, 12);
}
