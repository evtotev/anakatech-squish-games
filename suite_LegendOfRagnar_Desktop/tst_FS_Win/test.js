import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "balanceVerifications_slot.js"));
source(findFile("scripts", "verifications.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));

function main()
{
    //clearCacheAndOpenGame(150,'13243,,!13299,!13364,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299');
           
    openGame('cocos',150,'13243,,!13299,!13364,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299','no');
    
    clickStartButton();
    
    let totalBet = getTotalBet();
    test.log("totalBet: " + totalBet);
    
    let oldBalance = getBalance();
    test.log('Old balance: ' + oldBalance);  
        
    clickPlayButtonImage();
    
    waitForImage(pickFSbtn, {timeout:35000});

    pickFS();
    snooze(2);
    
    verifyFSFields(totalBet);
    
    playFS();
    // snooze(5);
    
    let newBalance = getBalance();
    test.log('New balance: ' + newBalance);
    snooze(1);
    
    test.compare(waitForObjectExists(names.total_win).innerText, "€0.20");

    let totalWin = getTotalWin();
    test.log("totalWIn: " + totalWin);
    
    verifyBalance(totalBet, oldBalance, newBalance, totalWin);
}
