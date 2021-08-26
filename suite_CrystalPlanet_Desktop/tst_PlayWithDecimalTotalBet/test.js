import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "balanceVerifications_slot.js"));
source(findFile("scripts", "images.js"));

function main() 
{
    //clearCacheAndOpenGame(253, '!605');    
        
    openGame('cocos',253,'!605','no');
    
    snooze(3);
    
    clickStartButton();

    let oldTotalBet = '';
    let newTotalBet = '';
    
    while (true) {
        oldTotalBet = getTotalBetAbs();
        click(names.bet_less);
        newTotalBet = checkIfDecimal(getTotalBetAbs());

        if (!isNaN(newTotalBet)) {
            break;
        }

        if (oldTotalBet == newTotalBet) {
            while (true) {
                oldTotalBet = getTotalBetAbs();
                click(names.bet_more);
                newTotalBet = checkIfDecimal(getTotalBetAbs());

                if (!isNaN(newTotalBet)) {
                    break;
                }
            }
        }
    }

    let oldBalance = getBalance();
    test.log('Old balance: ' + oldBalance);

    clickPlayButtonImage();
    
    waitForImage(playBtn, playBtnTolerant);

    let newBalance = getBalance();
    test.log('New balance: ' + newBalance);
    snooze(3);

    let totalWin = getTotalWin();

    verifyBalance(newTotalBet, oldBalance, newBalance, totalWin);
}

