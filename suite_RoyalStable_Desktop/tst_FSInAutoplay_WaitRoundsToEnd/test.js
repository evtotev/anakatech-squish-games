import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));

function main() {
    
    //clearCacheAndOpenGame(275,'!692,,,,,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830');
    
    openGame('construct2',275,'!692,,,,,!830,!830,!830,!830,!830,!830,!830,!830,!830,!830','no');
    
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
