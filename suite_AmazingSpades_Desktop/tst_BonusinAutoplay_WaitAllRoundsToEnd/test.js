import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "scratch_functions.js"));
source(findFile("scripts", "balanceVerifications_scratch.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));
source(findFile("scripts", "imageVerifications.js"));

//the balance isn't updating correctly GSE-444

function main() {

    //clearCacheAndOpenGame(217, '329,!323,!323,!323,!323,!323,!323,!323,!323,!323,!323,!323,!323,!323,!323,!323,!323');
        
    openGame('construct2',217,'329,!323,!323,!323,!323,!323,!323,!323,!323,!323,!323,!323,!323,!323,!323,!323,!323','no');
    
    const totalBet = getTotalBet();
    const oldBalance = getBalance() - (9 * totalBet); // We put no win cheat to the rest of the autoPlays
    
    startAutoplay();
    
    waitForImage(scratchAllBtn, scratchAllBtnTolerant);
    test.log('In bonus game');

    waitForObject(names.total_win, 40000)
    const totalWin = 150;
    test.log('Total win: ' + totalWin);
    
    while (true) {
        testSettings.imageNotFoundDebugging = false;
        
        try {
            if (findImage(playBtn, playBtnTolerant)) {
                test.log('Autoplay completed');            
                break;
            }
        } catch (e) {

        }
    }
    
    const newBalance = getBalance();
    
    verifyBalance(totalBet,oldBalance,newBalance,totalWin);
}
