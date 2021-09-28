import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));

function main() {

    openGame('construct2', 275, '830', 'no');

    snooze(5);

    clickStartButton();

    test.imagePresent(playBtn, playBtnTolerant);

    //click(names.turbo_btn);
    clickImg(turboBtn);
    test.log('Turbo clicked');

    startAutoplay();
    test.log('Auto Started');

    clickImg(stopAutoTurboBtn);
    test.log('Auto Stopped');

    test.imagePresent(playTurboBtn, playBtnTolerant);
}
