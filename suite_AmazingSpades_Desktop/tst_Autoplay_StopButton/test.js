import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "images.js"));

function main() {
    
    //clearCacheAndOpenGame(217, '!323,!323,!323');
        
    openGame('construct2',217,'!323,!323,!323','no');
    
    startAutoplay();
    
    snooze(5);
    
    clickImg(stopAutoplayBtn);

    test.imagePresent(playBtn, playBtnTolerant);
}
