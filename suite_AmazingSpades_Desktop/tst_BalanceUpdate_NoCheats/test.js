import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "scratch_functions.js"));
source(findFile("scripts", "balanceVerifications_scratch.js"));
source(findFile("scripts", "images.js"));

function main()
{
    //clearCacheAndOpenGame(217);
        
    openGame('construct2',217,'','no');
    
    let totalBet = getTotalBet();
    test.log("totalBet: " + totalBet);

    let bet = getBet();
    test.log("bet: " + bet);
    
    let gamesToPlay = 5;
    while (gamesToPlay > 0) {
        let oldBalance = getBalance();
        test.log('Old balance: ' + oldBalance);
          
        test.pass(play());
        waitForImage(playBtn, playBtnTolerant);
        
        let totalWin = getTotalWin();
        test.log("totalWIn: " + totalWin);
        
        let newBalance = getBalance();
        test.log('New balance: ' + newBalance);
        snooze(1);
        
        test.log('' + gamesToPlay);
        
        verifyBalance(totalBet, oldBalance, newBalance, totalWin);      
      
        gamesToPlay--;
    } 
}