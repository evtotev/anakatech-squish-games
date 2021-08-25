import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));

function main() {
    //clearCacheAndOpenGame(282,'13147,13147');
        
    openGame('construct2',282,'13147,13147','no');

    clickStartButton();
    
    test.imagePresent(playBtn, playBtnTolerant);
       
    //click(names.turbo_btn);
    clickImg(turboBtn);
    
    startAutoplay();
    
    snooze(3);
    
    clickImg(stopAutoTurboBtn);

    snooze(3);
    
    test.imagePresent(playTurboBtn, playBtnTolerant);
}
