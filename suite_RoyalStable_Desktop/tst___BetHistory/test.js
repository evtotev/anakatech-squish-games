import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "balanceVerifications_slot.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));
source(findFile("scripts", "imageVerifications.js"));

function main()
{
    openGame(275);
    
    clickStartButton();
    
    let totalBet = getTotalBet();
    test.log("totalBet: " + totalBet);

    let bet = getBet();
    test.log("bet: " + bet);
    
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
    
    verifyBalance(totalBet, oldBalance, newBalance, totalWin);      
    
    click(names.history_btn);
//    test.compare(waitForObjectExists(names.sF275TotalBet20TotalWin0EndBalance789030841TD).innerText, "Total Bet: €20\nTotal Win: €0\nEnd Balance: €7,890,308.41");
//    test.compare(waitForObjectExists(names.titleSF275TypeBrowserTabDOCUMENTHTML1BODY1DIV2DIV1DIV3DIV1DIV1DIV3TABLE1TBODY1TR2TD4).visible, true);
    mouseMove(700, 320);
//    snooze(5);
    waitForImage(historyDetailsBtn);
    doubleClick(waitForImage(historyDetailsBtn));
//    test.pass(clickImg(historyDetailsBtn));

    test.compare(waitForObjectExists(names.titleSF275TypeBrowserTabDOCUMENTHTML1BODY1DIV2DIV1DIV3DIV1DIV1DIV3TABLE1TBODY1TR2TD4).innerHTML, "<img src=\"/syndication_framework/assets/images/history_camera.png\">");

    snooze(5);
}