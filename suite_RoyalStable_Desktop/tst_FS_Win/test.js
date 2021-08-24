import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "balanceVerifications_slot.js"));
source(findFile("scripts", "verifications.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));

function main()
{
    //clearCacheAndOpenGame(275, '692,,,,,!863');
    
    openGame('construct2',275,'692,,,,,!863','no');
   
    clickStartButton();
    
    let totalBet = getTotalBet();
    test.log("totalBet: " + totalBet);
    
    let oldBalance = getBalance();
    test.log('Old balance: ' + oldBalance);  
        
    clickPlayButton();
   
    select4Horses();
   
    enterFSRouns();
    
    snooze(2);
 
    verifyFSFields();
    
    playFS();
    
    snooze(5);
    
    let totalWin = getTotalWin();
    test.log("totalWIn: " + totalWin);
    
    let newBalance = getBalance();
    test.log('New balance: ' + newBalance);
    snooze(1);
    
    verifyBalance(totalBet, oldBalance, newBalance, totalWin);      
}
