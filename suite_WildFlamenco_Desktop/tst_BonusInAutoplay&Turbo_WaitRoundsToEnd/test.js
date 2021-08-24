import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "balanceVerifications_slot.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));
source(findFile("scripts", "imageVerifications.js"));

function main() {
    //clearCacheAndOpenGame(282, '13159');
        
    openGame('construct2',282,'13159','no');

    clickStartButton();

    click(names.turbo_btn);

    startAutoplay();

    waitForImage(bonusMenu, bonusMenuTolerant);
    test.log('In bonus');
    
    waitForImage(sign20Lines, {timeout: 85000});

    while (true) {
        testSettings.imageNotFoundDebugging = false;

        try {
            if (findImage(playTurboBtn, playBtnTolerant)) {
                break;
            }
        } catch (e) {
        test.log('Still AutoMode');
        }
    }

    test.imagePresent(playTurboBtn, playBtnTolerant);
}
