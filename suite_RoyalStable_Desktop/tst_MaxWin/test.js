import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "balanceVerifications_slot.js"));
source(findFile("scripts", "images.js"));

function main() 
{
    //clearCacheAndOpenGame(275, 864);
        
    openGame('construct2',275,'864','no');

    clickStartButton();

    let bet = getBet();
    test.log("bet: " + bet);

    while (true) {
        bet = getBet();
        test.log("bet: " + bet);

        click(names.bet_more);

        let newBet = getBet();

        if (newBet === bet) {
            test.log("newBet: " + newBet);
            bet = newBet;
            test.log("bet: " + bet);
            break;
        }
    }

    let totalBet = getTotalBet();
    test.log("totalBet: " + totalBet);

    let oldBalance = getBalance();
    test.log('Old balance: ' + oldBalance);

    clickPlayButton();

    playBtnTolerant.timeout = 30000;
    waitForImage(playBtn, playBtnTolerant);

    let newBalance = getBalance();
    test.log('New balance: ' + newBalance);
    snooze(7);

    verifyBalanaceWhenMaxWin(newBalance, oldBalance, totalBet, 250);
}

