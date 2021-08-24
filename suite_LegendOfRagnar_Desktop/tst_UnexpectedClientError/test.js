import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "images.js"));
source(findFile("scripts", "suiteFunctions.js"));
//https://netomedia.atlassian.net/browse/GSE-448
function main() 
{
    openGame('cocos',150,'1','no');

    clickStartButton();

    clickPlayButton();
    snooze(7);
    
    //test.compare(getErrorTitle(), "999 - Wrong cheat for the game");
    test.compare(getErrorTitleWrongCheat(), "999 - Wrong cheat for the game");
    
    test.imagePresent(errorIcons, errorIconsTolerant);    
    snooze(2);
    closeError();
    snooze(3);
    
    if (test.imagePresent(playBtn, playBtnTolerant)) {
        test.pass("Play new round", clickPlayButton());

        handleBonusFSGames();
    } 
}
