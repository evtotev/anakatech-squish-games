import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "scratch_functions.js"));
source(findFile("scripts", "balanceVerifications_scratch.js"));
source(findFile("scripts", "images.js"));

function main()
{
    //clearCacheAndOpenGame(217, 323);
        
    openGame('construct2',217,'323','no');

    const totalBet = getTotalBet();
    test.log('Total bet: ' + totalBet);

    const oldBalance = getBalance();
    test.log('Old balance: ' + oldBalance);
    
    play(); 
      
    waitForImage(playBtn, playBtnTolerant);
    
    const newBalance = getBalance();
    test.log('New balance: ' + newBalance);

    verifyBalanceWhenLose(newBalance, oldBalance, totalBet);
}

