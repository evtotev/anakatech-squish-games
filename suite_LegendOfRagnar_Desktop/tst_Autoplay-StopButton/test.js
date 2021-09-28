import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));

function main() {

    openGame('cocos', 150, '!13223,!13223,!13223', 'no');

    snooze(5);

    clickStartButton();

    startAutoplay();
    test.log('Auto started');

    snooze(3);

    clickImg(stopAutoplayBtn, playBtnTolerant);
    test.log('AutoStop btn clicked');

    test.imagePresent(playBtn);
}
