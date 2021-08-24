import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "images.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "imageVerifications.js"));


function main() 
{
    clearCacheAndOpenGame(275, 1);

    clickStartButton();

    clickPlayButton();
    
    snooze(4);

    test.compare(getErrorTitle(), "999 - Wrong cheat for the game");
    
    closeError();
    
    test.imagePresent(errorIcons, errorIconsTolerant);    

    if (test.imagePresent(playBtn, playBtnTolerant)) {
        test.pass("Play new round", clickPlayButton());

        handleBonusFSGames();
    }
}


