import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));

function main() {
    
    //clearCacheAndOpenGame(275,'!719,830,830,830,830,830,830,830,830,830,830,830,830,830');
        
    openGame('construct2',275,'!719,830,830,830,830,830,830,830,830,830,830,830,830,830','no');
    
    clickStartButton();
    
    startAutoplay();
    
    waitForImage(trophyIcon, trophyIconTolerant);
    waitForImage(backBtn, backBtnTolerant);
    multiplier = getMultiplier();
    
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
