import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));

function main() {
    //clearCacheAndOpenGame(217, '!323,!323,!323');
        
    openGame('construct2',217,'!323,!323,!323','no');
    
    test.imagePresent(playBtn);
    test.log('Play btn found')
    
    click(names.turbo_btn);
    test.log('Turbo On')
    
    startAutoplay();
    
    clickImg(stopAutoPlayTurboBtn);
    test.log('Auto stop')

    test.imagePresent(playTurboBtn);
    test.log('TurboStill On')
}
