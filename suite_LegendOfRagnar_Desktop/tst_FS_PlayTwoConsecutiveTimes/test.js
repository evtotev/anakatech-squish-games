import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "balanceVerifications_slot.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));
source(findFile("scripts", "imageVerifications.js"));
source(findFile("scripts", "verifications.js"));
// the game blocks

function main() {
    //clearCacheAndOpenGame(150, '!13680,,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13680');
        
    openGame('cocos',150,'!13680,,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13299,!13680','no');
    
    clickStartButton();

    clickPlayButtonImage();
    
    waitForImage(pickFSbtn, {timeout:35000});

    pickFS();
    snooze(4);
    
    verifyFSFields();
    
    playFS();
    
    waitForImage(playBtn);
    
    clickPlayButtonImage();
    
    waitForImage(pickFSbtn, {timeout:35000});

    pickFS();
    
    snooze(6);
    
    verifyFSFields();
    
    playFS();
    
    waitForImage(playBtn);
}