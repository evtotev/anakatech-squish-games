import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));

//second cheat is ignored - so can't verify the bonus win and balance update

function main() {
    //clearCacheAndOpenGame(282, '13159');
        
    openGame('construct2',282,'13159','no');

    clickStartButton();
    
    const bet = getBet();

    startAutoplay();
        
    //waitForImage(bonusMenu, bonusMenuTolerant);
    waitForImage(match3ToWin, {timeout:25000});
    test.log('In bonus');
    
    spamBetButtons(bet);

    while (true) {
        testSettings.imageNotFoundDebugging = false;
        
        try {
            if (findImage(playBtn, playBtnTolerant)) {
                break;
            }
        } catch (e) {

        }
    }

    test.imagePresent(playBtn);
    test.compare(bet,5)
}
