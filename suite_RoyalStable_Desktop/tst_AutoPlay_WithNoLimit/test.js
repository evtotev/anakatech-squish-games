import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));

function main() {

    //clearCacheAndOpenGame(275);
    
    clearCache(275);
    
    openGame('construct2',275,'','no');
    
    clickStartButton();
    
    snooze(3);
        
    startAutoplayWihoutLimit();

    test.compare(getErrorTitleLossLimit(), "Loss limit");
    test.log('Loss limit not set');
    
    closeError();
    test.log('Error closed');

    waitForImage(playBtn, playBtnTolerant);
    test.log('Play btn found');

}
