import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "balanceVerifications_slot.js"));
source(findFile("scripts", "verifications.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));

function main()
{
    //clearCacheAndOpenGame(282,'13168,!13605,!13602,!13602,!13602,!13602,!13602,!13602,!13602');
           
    openGame('construct2',282,'13168,!13605,!13602,!13602,!13602,!13602,!13602,!13602,!13602','no');
    
    clickStartButton();
    
    let totalBet = getTotalBet();
    test.log("totalBet: " + totalBet);
    
    let oldBalance = getBalance();
    test.log('Old balance: ' + oldBalance);  
        
    clickPlayButton();
    
    waitForImage(pickFSbtn, {timeout:35000});

    clickStartFS();
    snooze(2);
    
    verifyFSFields(totalBet);
    
    playFS();
    // snooze(5);
    
    let newBalance = getBalance();
    test.log('New balance: ' + newBalance);
    snooze(1);
    
    test.compare(waitForObjectExists(names.total_win).innerText, "€1.20");

    let totalWin = getTotalWin();
    test.log("totalWIn: " + totalWin);
    
    verifyBalance(totalBet, oldBalance, newBalance, totalWin + 500); // 3 roses win 5 x bet
}
