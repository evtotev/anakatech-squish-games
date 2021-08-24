import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "balanceVerifications_slot.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));
source(findFile("scripts", "imageVerifications.js"));

function main() 
{
    //clearCacheAndOpenGame(275, "830, 830, 830, 830");
        
    openGame('construct2',275,'830, 830, 830, 830','no');

    clickStartButton();
    
    clickPlayButton();
    waitForImage(stopBtn);
    test.log('Play button clicked')
    clickStopButton();
    waitForImage(playBtn, playBtnTolerant)
    test.log('Stop button clicked')

        handleBonusFSGames();

}
