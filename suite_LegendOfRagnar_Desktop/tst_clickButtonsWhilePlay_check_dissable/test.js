import * as names from 'names.js';
source(findFile("scripts", "globalFunctions.js"));
source(findFile("scripts", "suiteFunctions.js"));
source(findFile("scripts", "images.js"));

function main()
{
    clearCacheAndOpenGame(150, '13223,13223,13223');
    clickStartButton();
    
    clickPlayButton();
    object.exists(names.bet_unclickable);
    test.log("Buttons are unclickable")
    
    waitForImage(playBtn, playBtnTolerant);
    try {
        object.exists(names.bet_unclickable);
    } catch (e){
        test.log("Buttons are clickable")
    }
}
