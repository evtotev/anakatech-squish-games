import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));

function main() {

    //clearCacheAndOpenGame(253, '!13797,!13797,!13797');    
    
    clearCache(253);
    
    openGame('cocos',253,'!13797,!13797,!13797','no');
    
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
