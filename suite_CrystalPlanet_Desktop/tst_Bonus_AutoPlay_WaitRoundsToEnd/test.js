import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));
source(findFile("scripts", "balanceVerifications_slot.js"));

function main() {
    //clearCacheAndOpenGame(253, '!13063');
        
    openGame('cocos',253,'!13063','no');
    
    clickStartButton();
    
    startAutoplay();
    
    waitForImage(inBonus, inBonusTolerant);
    test.log('In bonus');
        
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
}
