import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));

function main() {
    
    //clearCacheAndOpenGame(275, 830);
        
    openGame('construct2',275,'830','no');

    clickStartButton();
    
    test.imagePresent(playBtn, playBtnTolerant);
    
    click(names.turbo_btn);
    
    startAutoplay();
    
    snooze(3);
    
    clickImg(stopAutoTurboBtn);

    test.imagePresent(playTurboBtn, playBtnTolerant);
}
