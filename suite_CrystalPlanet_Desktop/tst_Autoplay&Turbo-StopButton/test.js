import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));

function main() {
    //clearCacheAndOpenGame(253, '!13797,!13797,!13797');    
        
    openGame('cocos',253,'!13797,!13797,!13797','no');
    
    clickStartButton();
    
    test.imagePresent(playBtn, playBtnTolerant);
    
    //click(names.turbo_btn);
    clickImg(turboBtn);
    test.log('Turbo clicked');
    
    startAutoplay();
    test.log('Auto Started');
    
    //click(names.stopAutoTurbo);
    clickImg(stopAutoTurboBtn,playBtnTolerant);
    test.log('Auto Stopped');

    test.imagePresent(playTurboBtn, playBtnTolerant);
}
