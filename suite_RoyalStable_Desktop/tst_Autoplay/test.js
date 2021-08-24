import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));

function main() 
{
    //clearCacheAndOpenGame(275);
        
    openGame('construct2',275,'','no');

    clickStartButton();
    
    startAutoplay();

    while (true) {
        try {
            testSettings.imageNotFoundDebugging = false;
            if (findImage(playBtn, playBtnTolerant)) {
                break;
            }
        } catch (e) {

        }

        handleBonusFSGames();
    }

    test.imagePresent(playBtn);
}
