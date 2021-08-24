import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "balanceVerifications_slot.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));
source(findFile("scripts", "imageVerifications.js"));
source(findFile("scripts", "verifications.js"));

function main() {
    //clearCacheAndOpenGame(282, '13168,!13602,!13602,!13602,!13602,!13602,!13602,!13602,!13602,!13168');    
        
    openGame('construct2',282,'13168,!13602,!13602,!13602,!13602,!13602,!13602,!13602,!13602,!13168','no');
    
    clickStartButton();

    clickPlayButton();
    
    waitForImage(pickFSbtn, {timeout:35000});

    pickFS();
    snooze(4);
    
    verifyFSFields();
    
    playFS();
    
    waitForImage(playBtn);
    
    clickPlayButton();
    
    waitForImage(pickFSbtn, {timeout:35000});

    pickFS();
    
    snooze(6);
    
    verifyFSFields();
    
    playFS();
    
    waitForImage(playBtn);
}