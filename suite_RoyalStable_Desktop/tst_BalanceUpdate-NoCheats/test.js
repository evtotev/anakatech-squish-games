import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "balanceVerifications_slot.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));

function main()
{
    //clearCacheAndOpenGame(275);
        
    openGame('construct2',275,'','no');
    
    clickStartButton();
    
    let totalBet = getTotalBet();
    test.log("totalBet: " + totalBet);

    let bet = getBet();
    test.log("bet: " + bet);
    
    let gamesToPlay = 5;
    while (gamesToPlay > 0) {
        let oldBalance = getBalance();
        test.log('Old balance: ' + oldBalance);
          
        test.pass(clickPlayButton());
        
        handleBonusFSGames();
        snooze(1);
         
        let newBalance = getBalance();
        test.log('New balance: ' + newBalance);
        snooze(1);
        
        let totalWin = getTotalWin();
        test.log("totalWIn: " + totalWin);
        
        test.log('' + gamesToPlay);
        
        verifyBalance(totalBet, oldBalance, newBalance, totalWin);      
      
        gamesToPlay--;
    } 
}