import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "balanceVerifications_slot.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));
source(findFile("scripts", "imageVerifications.js"));

function main() {
    //clearCacheAndOpenGame(282,'13147,13147,13147');

    openGame('construct2', 282, '!13165', 'no');

    snooze(5);

    clickStartButton();

    clickPlayButtonImage();
    test.log('Play btn clicked');

    clickStopButton();
    test.log('Stop btn clicked');

    waitForImage(playBtn, playBtnTolerant);
    test.log('Play btn found');
}