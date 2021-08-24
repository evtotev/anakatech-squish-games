import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));

function main() {
    //clearCacheAndOpenGame(150);
    
    openGame('cocos',150,'','no');
    
    clickStartButton();
    
    test.imagePresent(playBtn, playBtnTolerant);
    
    click(names.turbo_btn);
    
    startAutoplay();
    
    //clickImg(stopAutoTurboBtn, playBtnTolerant);
    
    click(names.stopAutoTurbo);

    test.imagePresent(playTurboBtn, playBtnTolerant);
}
