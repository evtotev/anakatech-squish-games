import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));
// we currently doesn't have limit
function main() {

    //clearCacheAndOpenGame(150);
    
    clearCache(150);
    
    openGame('cocos',150,'','no');
    
    clickStartButton();
    
    snooze(3);
        
    startAutoplayWihoutLimit(10);

    test.compare(getErrorTitleLossLimit(), "Loss limit");
    test.log('Loss limit not set');
    
    closeError();
    test.log('Error closed');

    waitForImage(playBtn, playBtnTolerant);
    test.log('Play btn found');

}
