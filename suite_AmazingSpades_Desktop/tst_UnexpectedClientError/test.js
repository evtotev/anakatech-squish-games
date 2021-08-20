import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "scratch_functions.js"));
source(findFile("scripts", "images.js"));

function main()
{
    //clearCacheAndOpenGame(217, 1);
        
    openGame('construct2',217,'1','no');

    clickPlayButton();

    test.compare(getErrorTitleWrongCheat(), "999 - Wrong cheat for the game");

    closeError();
    
    if (test.imagePresent(playBtn, playBtnTolerant)) {
        test.pass("Play new round", clickPlayButton());
        if (waitForObjectExists(names.game_session)) {
            test.pass("Round played", clickPlayButton());
        } 
    }


}
