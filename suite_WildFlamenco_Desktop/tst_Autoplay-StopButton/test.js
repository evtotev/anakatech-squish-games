import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));

function main() {

    openGame('construct2', 282, '13147,13147', 'no');

    snooze(5);

    clickStartButton();

    startAutoplay();
    test.log('Auto started');

    snooze(3);

    clickImg(stopAutoplayBtn);
    test.log('AutoStop btn clicked');

    test.imagePresent(playBtn);
}
