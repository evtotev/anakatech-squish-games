import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "balanceVerifications_slot.js"));
source(findFile("scripts", "verifications.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));

function main()
{
    //clearCacheAndOpenGame(282,'13168,!13602,!13602,!13602,!13602,!13602,!13602,!13602,!13602');    
            
    openGame('construct2',282,'13168,!13602,!13602,!13602,!13602,!13602,!13602,!13602,!13602','no');
    
    clickStartButton();

    let totalBet = getTotalBet();
    test.log("totalBet: " + totalBet);
    
    let oldBalance = getBalance();
    test.log('Old balance: ' + oldBalance);
    
    clickPlayButtonImage();
    snooze(10);
    
    waitForImage(pickFSbtn, {timeout:35000});

    pickFS();
    snooze(2);
    
    verifyFSFields(totalBet);
    
    playFS();
    snooze(2);
    
    test.imageNotPresent(backBtn, backBtnTolerant);
    
    let newBalance = getBalance();
    test.log('New balance: ' + newBalance);
    snooze(1);
    
    let totalWin = getTotalWin();
    test.log("totalWIn: " + totalWin);
    
    verifyBalanceWhenLose(newBalance, oldBalance + 500, totalBet); // 3 roses win 5 x bet
    
    waitForImage(playBtn, playBtnTolerant);
    test.pass(clickPlayButton());
    
}
