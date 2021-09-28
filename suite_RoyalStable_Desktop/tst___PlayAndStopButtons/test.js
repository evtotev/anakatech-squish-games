import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "balanceVerifications_slot.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));
source(findFile("scripts", "imageVerifications.js"));

function main() {
    //clearCacheAndOpenGame(275, "830, 830, 830, 830");

    openGame('construct2', 275, '830, 830, 830, 830', 'no');

    snooze(5);

    clickStartButton();

    clickPlayButtonImage();
    test.log('Play button clicked')
    
    clickStopButton();
    
    waitForImage(playBtn, playBtnTolerant)
    test.log('Stop button clicked')
}
