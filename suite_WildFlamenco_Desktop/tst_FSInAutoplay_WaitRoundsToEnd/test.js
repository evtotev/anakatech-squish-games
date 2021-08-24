import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));

function main() {
    //clearCacheAndOpenGame(282, '13168,!13602,!13602,!13602,!13602,!13602,!13602,!13602,!13602');    
    
    openGame('construct2',282,'13168,!13602,!13602,!13602,!13602,!13602,!13602,!13602,!13602','no');
    
    clickStartButton();
    
    startAutoplay();
    
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
