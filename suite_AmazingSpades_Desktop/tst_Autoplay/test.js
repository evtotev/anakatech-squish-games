import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "images.js"));

function main() {

    //clearCacheAndOpenGame(217);
        
    openGame('construct2',217,'','no');
    
    playBtnTolerant.timeout = 50000;
    
    waitForImage(playBtn, playBtnTolerant);
    
    startAutoplay();

    while (true) {
        try {
            testSettings.imageNotFoundDebugging = false;
            if (findImage(playBtn, playBtnTolerant)) {
                test.pass('Autoplay completed');
                break;
            }
        } catch (e) {

        }
    }

    test.imagePresent(playBtn, playBtnTolerant);
}
